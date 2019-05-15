//Script for UI showing user face

'use strict';
	
// The sumerian object can be used to access Sumerian engine
// types.
//
/* global sumerian */
	
// Called when play mode starts.
function setup(args, ctx) {
	
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var opencvCanvas = document.getElementById("opencvcanvas");
	var opencvContext = opencvCanvas.getContext("2d");
	var face_rekognition_canvas = document.getElementById("rekognition");
	var face_rekognition_context = face_rekognition_canvas.getContext("2d");
	
	//navigator initialization
	if(navigator.mediaDevices === undefined){
		navigator.mediaDevices = {};
	}
	
	if(navigator.mediaDevices.getUserMedia === undefined){
		navigator.mediaDevices.getUserMedia = function(constraints){
			var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
			if(!getUserMedia){
				return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
			}
			return new Promise(function(resolve,reject){
				getUserMedia.call(navigator,constraints,resolve,reject);
			});
		}
	}
	
	//Logic
	navigator.mediaDevices.getUserMedia({ audio: false, video: true})
	.then(function(stream){
		var video = document.querySelector("video");
		//Older browsers may not have object
		if("srcObject" in video) {
			video.srcObject = stream;
		} else {
			//Avoid using this in new browsers, as it is going away
			video.src = window.URL.createObjectURL(stream);
		}
		video.onloadmetadata = function(e) {
			video.play();
		};
	})
	.catch(function(err){
		console.log(err.name + ":" + err.message);
	});
	
	video.addEventListener('play',function(){
		draw(this,context,opencvContext,400,300);
	},false);
}

function face_rekognition(video,context,width,height,ctx){
	context.drawImage(video,0,0,width,height);
	var face_rekognition_canvas = document.getElementById("rekognition");
	var canvas_data = face_rekognition_canvas.toDataURL();
	var base64Data_array = canvas_data.split(',');
	var base64Data = base64Data_array[1];
	var image = context.getImageData(0,0,width,height)
	// console.log("Base64 : " + base64Data);

	var blobURL = URL.createObjectURL( new Blob([ '(',
	function(){
		//Long-running work here
		self.window = self;
		self.addEventListener('message', (e) => {

			var base64Data = e.data;
			const Http = new XMLHttpRequest();
			const url='https://yourURL.execute-api.us-east-1.amazonaws.com/prod';//add your aws rekognition url
			Http.open("POST", url,true); //true for async call

			Http.setRequestHeader("Accept","application/json");
			Http.setRequestHeader("Content-Type","application/json");

			Http.onreadystatechange = function() {
				if(Http.readyState == 4 && Http.status == 200) {
					console.log("Rekog Result : " + Http.responseText)
					var response = JSON.parse(Http.responseText);
					try{
						var user = response['user'];
						console.log("User : " + user);
						self.postMessage(user)
					}catch(e){
						console.log("error : " + e)
					}

				}
			}
			Http.send(base64Data);

		}, false);
	}.toString(),
	')()'], { type: 'application/javascript' } ) );

	if(window.Worker){
		var worker = new Worker(blobURL)
		var rect = getClosestFace(image)
		if(!(rect == undefined || rect == null || rect['neighbors']<2)){
// 			worker.postMessage(base64Data)
			var workerEventHandlers = (e) => { 
			var data = e.data;
			if(data != "no user"){
				document.getElementById('user-name').innerHTML= "User : " + data;
				console.log("User : " + data)
				ctx.worldData.userName = data;
				sumerian.SystemBus.emit("faceRecognitionCompleted")
			 }else{
				 
			 }
			}
			sumerian.SystemBus.emit("faceRecognitionCompleted")
			worker.addEventListener('message', workerEventHandlers, false);
		}else{
			console.log("Face not detected")
			setTimeout(face_rekognition,3000,video,context,width,height)
		}
	}
}

function draw(video, context,opencvContext, width, height) {
	var image,data;
	context.drawImage(video,0,0,width,height);
	var canvas_data = canvas.toDataURL();
	var base64Data_array = canvas_data.split(',')
	var base64Data = base64Data_array[1]
	
	//jsfeat
	image = context.getImageData(0,0,width,height);
	var rect_coord = getClosestFace(image);
	opencv_draw(video, opencvContext, rect_coord,width,height);
	
	setTimeout(draw,15,video,context,opencvContext,width,height);
	
}

function opencv_draw(video,context,rect_coord, width, height){
	var image,data;
	try{
		var rectArray = Object.values(rect_coord);
		context.drawImage(video,0,0,width,height);
		context.beginPath();
		if(rectArray[4] > 1){
// 			console.log(rectArray)
			context.rect(rectArray[0],rectArray[1],rectArray[2],rectArray[3]);
			context.lineWidth = 3;
			context.strokeStyle = '#37ef50';
			context.stroke();
		}
	}catch(e){
		console.log("error : " + e);
	}
}

function getClosestFace(videoFrameImageData) {
	const w = videoFrameImageData.width;
	const h = videoFrameImageData.height;

	const classifier = jsfeat.haar.frontalface;

	const options = {
		min_scale : 2,
		scale_factor : 1.15,
		use_canny : false,
		edges_density : 0.13,
		equalize_histogram : true
	}

	let img_u8 = new jsfeat.matrix_t(w, h, jsfeat.U8_t | jsfeat.C1_t);
	let ii_sum = new Int32Array((w+1)*(h+1));
	let ii_sqsum = new Int32Array((w+1)*(h+1));
	let ii_tilted = new Int32Array((w+1)*(h+1));
	let ii_canny = new Int32Array((w+1)*(h+1));

	jsfeat.imgproc.grayscale(videoFrameImageData.data, w, h, img_u8);

	jsfeat.imgproc.compute_integral_image(img_u8, ii_sum, ii_sqsum, null);

	let rects = jsfeat.haar.detect_multi_scale(ii_sum, ii_sqsum, ii_tilted, 
		options.use_canny? ii_canny : null, img_u8.cols, img_u8.rows, classifier, 
		options.scale_factor, options.min_scale);
	rects = jsfeat.haar.group_rectangles(rects, 1);
	// console.log("Output : " + Object.values(rects[0]))
	return rects[0];
}
	
// Called on every physics update, after setup(). When used in a 
// ScriptAction, this function is called only while the state 
// containing the action is active.
//
// For the best performance, remove this function if it is not 
// used.
//
function fixedUpdate(args, ctx) {
}
	
// Called on every render frame, after setup(). When used in a 
// ScriptAction, this function is called only while the state 
// containing the action is active.
//
// For the best performance, remove this function if it is not 
// used.
//
function update(args, ctx) {
}
	
// Called after all script "update" methods in the scene has 
// been called. When used in a ScriptAction, this function is
// called only while the state containing the action is active.
//
// For the best performance, remove this function if it is not
// used.
//
function lateUpdate(args, ctx) {
}

// When used in a ScriptAction, called when a state is entered.
// Use ctx.transitions.success() to trigger the On<State>Success transition
// and ctx.transitions.failure() to trigger the On<State>Failure transition
function enter(args, ctx) {
}
	
// When used in a ScriptAction, called when a state is exited.
//
function exit(args, ctx) {
}
	
// Called when play mode stops.
//
function cleanup(args, ctx) {
}

// Defines script parameters.
//
var parameters = [];

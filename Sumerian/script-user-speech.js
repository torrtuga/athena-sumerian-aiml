'use strict';
	
// The sumerian object can be used to access Sumerian engine
// types.
//
/* global sumerian */
	
// Called when play mode starts.
//
function setup(args, ctx) {
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
	console.log("Inside User Speech")
	window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
	let finalTranscript = '';
	let recognition = new window.SpeechRecognition();
	recognition.interimResults = true;
	recognition.maxAlternatives = 10;
	recognition.continuous = false;
	recognition.onresult = (event) => {
		ctx.worldData.transcript = "User : " + event.results[0][0].transcript;
		if(event.results[0].isFinal){
			var url;
			var urlDomain;
			var xhr = new XMLHttpRequest();
			
			var userResponse = event.results[0][0].transcript;
			ctx.entityData.userResponse = userResponse;
			console.log("User Resp : " + userResponse);
			if(ctx.worldData.userSecondResponseFlag == 1){
				urlDomain = "https://www.torrtuga.xyz/sentiment";
				url = urlDomain + "?user-sentiment=" + userResponse
			}else{
				urlDomain = "https://www.torrtuga.xyz/";
				url = urlDomain + "?user-response=" + userResponse;
			}
			xhr.open('GET',url,true);
			if(userResponse.includes("goodbye") ||
			  	userResponse.includes("bye") ||
			  	userResponse.includes("see you") ||
			  	userResponse.includes("that's all")){
				resetAimlDialogue(ctx);
				speakEnglish(ctx,"Good Bye!, It was lovely talking to you")

			}else{
				xhr.send();
				xhr.onreadystatechange = (e) => {
					if(xhr.readyState == 4 && xhr.status==200){
						ctx.worldData.newUserFlagTwo = true;
						ctx.entityData.hostResponse = xhr.responseText;
						console.log("response text : ", ctx.entityData.hostResponse);
						ctx.worldData.allowSpeech = false;
						ctx.worldData.numIteration = ctx.worldData.numIteration+1;
						console.log("Iterator value = " + ctx.worldData.numIteration)
						ctx.transitions.success();
					}
				}
			}
		}
	}
	recognition.start();
// 	recognition.onend = function() {
// 	  console.log('Speech recognition service disconnected : User ');
// 	  ctx.worldData.allowSpeech=false;
// 	  ctx.transitions.success();
// 	}
// 	console.log("Inside User Speech")
// 	ctx.entityData.hostResponse = "That's great, I love that";
// 	ctx.transitions.success()
}

function resetAimlDialogue(ctx){
	var xhr = new XMLHttpRequest();
	var urlDomain = "https://www.torrtuga.xyz/kernel_reset";
	var url = urlDomain
	xhr.open('GET',url,true);
	xhr.send();
	xhr.onreadystatechange = (e) => {
		if(xhr.readyState == 4 && xhr.status==200){
			response = xhr.responseText;
			console.log("Response after resetting kernel " + response)
		}
	}
}


function speakEnglish(ctx,text){
	const speechComponent = ctx.entity.getComponent('SpeechComponent');
	const speech = new sumerian.Speech();

	speechComponent.addSpeech(speech);
	
	speech.updateConfig({
		body: '<speak>' + text + '</speak>',
		voice: 'Amy'
	});
	ctx.speak = () => {
		speech.play().then(() => {
			location.reload();
		});
	}
	ctx.speak();
	
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

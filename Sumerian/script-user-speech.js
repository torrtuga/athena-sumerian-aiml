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
			var xhr = new XMLHttpRequest();
			var urlDomain = "https://www.torrtuga.xyz/";
			var userResponse = event.results[0][0].transcript;
			console.log("User Resp : " + userResponse);
			var url = urlDomain + "?user-response=" + userResponse;
			xhr.open('GET',url,true);
			xhr.send();
			xhr.onreadystatechange = (e) => {
				if(xhr.readyState == 4 && xhr.status==200){
					ctx.entityData.hostResponse = xhr.responseText;
					console.log("response text : ", ctx.entityData.hostResponse);
					ctx.worldData.allowSpeech = false;
					ctx.transitions.success();
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

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
	//Updating Text
	var spanElement = document.getElementById('selected');
	if(ctx.worldData.transcript==undefined)
		ctx.worldData.transcript = "Waiting for Input"
	 spanElement.innerHTML = ctx.worldData.transcript;
	//Updating circle
	var circle = document.getElementById('circle');
	if(ctx.worldData.allowSpeech==undefined)
		circle.style.fill='red';
	if(ctx.worldData.allowSpeech==true)
		circle.style.fill='green';
	if(ctx.worldData.allowSpeech==false)
		circle.style.fill='red';
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

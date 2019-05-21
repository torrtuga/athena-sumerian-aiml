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
	languageLearnModule(ctx);
}

function languageLearnModule(ctx){
	console.log("Inside language learn module");
// 	sumerian.SystemBus.emit("startLanguageWindow")
	var langBanner = document.getElementById("containerID");
	langBanner.style.display = "block";
// 	ctx.worldData.currentOption = "un chien"
	
	const speechComponent = ctx.entity.getComponent('SpeechComponent');
	const speech = new sumerian.Speech();

	speechComponent.addSpeech(speech);
	var text = "Okay! Let's learn. Go through the images and select to hear the French word for that. Once done, click next."
	ctx.worldData.currentPage = "pageOne";

	speech.updateConfig({
		body: '<speak>' + text + '</speak>',
		voice: 'Amy'
	});
	ctx.speak = () => {
		speech.play().then(() => {
			console.log("Inside language module audio initial");
		});
	}
	ctx.speak();
	sumerian.SystemBus.emit("languageWindowStarted");
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

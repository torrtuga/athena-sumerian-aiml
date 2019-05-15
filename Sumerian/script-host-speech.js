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
// 	var cat = document.getElementsByClassName('cat')[0];
// 	var girl = document.getElementsByClassName('girl')[0];
// 	var woman = document.getElementsByClassName('woman')[0];
// 	console.log("Update Athena")
// 	cat.addEventListener('click', function (event) {
// 		console.log("Cat clicked")
// 		 if(ctx.worldData.currentEntity=="cat"){
// 			 ctx.worldData.currentEntity = "girl"
// 			 speak(ctx,"Good Job! Now select the word for the girl")
// 		 }else{
// 			 console.log("Inside when cat not correct")
// 			 speak(ctx,"Sorry! That's wrong. Please try again")
// 		 }
// 	 });
// 	girl.addEventListener('click', function (event) {
// 		console.log("girl clicked")
// 		 if(ctx.worldData.currentEntity=="girl"){
// 			 ctx.worldData.currentEntity = "woman"
// 			 speak(ctx,"Good Job! Now select the word for the woman")
// 		 }else{
// 			 console.log("Inside when girl not correct")
// 			 speak(ctx,"Sorry! That's wrong. Please try again")
// 		 }
// 	 });
// 	woman.addEventListener('click', function (event) {
// 		console.log("woman clicked")
// 		 if(ctx.worldData.currentEntity=="woman"){
// 			 ctx.worldData.currentEntity = "woman"
// 			 speak(ctx,"Amazing work done")
// 		 }else{
// 			 console.log("Inside when woman not correct")
// 			 speak(ctx,"Sorry! That's wrong. Please try again")
// 		 }
// 	 });
}

function speak(ctx,text){
	const speechComponent = ctx.entity.getComponent('SpeechComponent');
	const speech = new sumerian.Speech();

	speechComponent.addSpeech(speech);

	speech.updateConfig({
		body: '<speak>' + text + '</speak>',
		voice: 'Amy'
	});
	ctx.speak = () => {
		speech.play().then(() => {
			console.log("Inside language module audio");
		});
	}
	ctx.speak();
}

// When used in a ScriptAction, called when a state is entered.
// Use ctx.transitions.success() to trigger the On<State>Success transition
// and ctx.transitions.failure() to trigger the On<State>Failure transition
function enter(args, ctx) {
	//video
	console.log("Inside Script Host")
	var language_module = "language module"
	
	if(ctx.worldData.userName != undefined && ctx.worldData.userName != "complete"){
		if(ctx.entityData.hostResponse==undefined){
			ctx.entityData.hostResponse = "Good to meet you " + ctx.worldData.userName + ". How are you?"
		}
		ctx.worldData.userName = "complete";
	}else{
		if(ctx.entityData.hostResponse==undefined)
		ctx.entityData.hostResponse = "Hi, I am Athena, a language tutor bot. What is your name?"
	}
	if(ctx.entityData.hostResponse==undefined){ //junk code, will remove
		console.log("Still undefined")
	}else{
		if(ctx.entityData.hostResponse.includes(language_module)){
			languageLearnModule(ctx);
		}else{
			console.log("Host : ",ctx.entityData.hostResponse)
			const speechComponent = ctx.entity.getComponent('SpeechComponent');
			const speech = new sumerian.Speech();

			speechComponent.addSpeech(speech);

			speech.updateConfig({
				body: '<speak>' + ctx.entityData.hostResponse + '</speak>',
				voice: 'Amy'
			});
			ctx.speak = () => {
				speech.play().then(() => {
					console.log("Inside Host Audio Play method");
				});
			}
			window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
			let finalTranscript = '';
			let recognition = new window.SpeechRecognition();
			recognition.interimResults = true;
			recognition.maxAlternatives = 10;
			recognition.continuous = false;
			var count = 0;
			recognition.onresult = (event) => {
				try{
					console.log(event);
					count = count + 1;
					console.log("Count : " + count);
					if(event.results[0].isFinal){
						console.log("isFinal touched");
						ctx.worldData.allowSpeech=true;
						ctx.transitions.success();
					}
					if(count>=30){
						console.log('count level exceeded');
						ctx.worldData.allowSpeech=true;
						ctx.transitions.success();
					}
				}catch(e){
					console.log("Error : " + e);
				}

			}
			recognition.onend = function() {
			  console.log('Speech recognition service disconnected : Host');
				ctx.worldData.allowSpeech=true;
			  ctx.transitions.success();
			}
			recognition.start();
			ctx.speak();
		}
	}
		
}

function languageLearnModule(ctx){
	console.log("Inside language learn module");
	var langBanner = document.getElementById('banner');
	langBanner.style.display = "block";
	const speechComponent = ctx.entity.getComponent('SpeechComponent');
	const speech = new sumerian.Speech();

	speechComponent.addSpeech(speech);
	var text = "Okay! Let's learn. Select the word for the cat"
	ctx.worldData.currentEntity = "cat";

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

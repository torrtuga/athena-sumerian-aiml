'use strict';
	
// The sumerian object can be used to access Sumerian engine
// types.
//
/* global sumerian */
const greeting = "welcome to the Sumerian Concierge Experience."
	
// Called when play mode starts.
//
function setup(args, ctx) {
	
	//video
	const body = [
		"Hi,I am Athena, a language tutor bot. What is your name?"
	];
	
	const index = Math.floor(Math.random() * body.length);
	
	const speechComponent = ctx.entity.getComponent('SpeechComponent');
	const speech = new sumerian.Speech();
	
	speechComponent.addSpeech(speech);
	
	speech.updateConfig({
		body: '<speak>' + body[index] + '</speak>',
		voice: 'Amy'
	});
	ctx.speak = () => {
// 		console.log("System bus working")
		ctx.worldData.userName = "John"
	}
	
	sumerian.SystemBus.addListener("faceRecognitionCompleted",ctx.speak)

	
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
	var cat = document.getElementsByClassName('cat')[0];
	var girl = document.getElementsByClassName('girl')[0];
	var woman = document.getElementsByClassName('woman')[0];
	var button = document.getElementsByClassName('buttonDiv')[0];
	
	var horse = document.getElementsByClassName('horse')[0];
	var boy = document.getElementsByClassName('boy')[0];
	var man = document.getElementsByClassName('man')[0];
	var button2 = document.getElementsByClassName('buttonDiv2')[0];
	
	var dog = document.getElementsByClassName('dog')[0];
	var plane = document.getElementsByClassName('plane')[0];
	var student = document.getElementsByClassName('student')[0];
	var button3 = document.getElementsByClassName('buttonDiv2')[0];
	console.log("Update Athena")
	cat.addEventListener('click', function (event) {
		console.log("Cat clicked")
		 if(ctx.worldData.currentEntity=="cat"){
			 console.log("Cat clicked")
			 speak(ctx,"Good Job! Now select the word for the girl","le chat")
			 cat.style.border = "thick solid #00FF00";
			 ctx.worldData.currentEntity = "girl"
		 }else{
// 			 speak(ctx,"Sorry! That's wrong. Please try again")
// 			 cat.style.border = "thick solid #FF0000";
		 }
	 });
	girl.addEventListener('click', function (event) {
		console.log("Girl clicked")
		 if(ctx.worldData.currentEntity=="girl"){
			 speak(ctx,"Great! Now select the word for the woman","la fille")
			 girl.style.border = "thick solid #00FF00"; 	
			 ctx.worldData.currentEntity = "woman"
		 }else{
// 			 speak(ctx,"Sorry! That's wrong. Please try again")
// 			 girl.style.border = "thick solid #FF0000";
		 }
	 });
	woman.addEventListener('click', function (event) {
		console.log("Woman clicked")
		const speechComponent = ctx.entity.getComponent('SpeechComponent');
		const speech = new sumerian.Speech();
		speechComponent.addSpeech(speech);
		 if(ctx.worldData.currentEntity=="woman"){
// 			 speak(ctx,"","la femme")
// 			 var inputDiv = document.getElementById('inputDiv');
// 			 var buttonDiv = document.getElementById('buttonDiv');
// 			 var langBanner = document.getElementById('banner');
// 			 langBanner.style.display = "none";
// 			 inputDiv.style.display = "inline-block";
// 			 buttonDiv.style.display = "inline-block";
			 var inputDiv = document.getElementById('inputDiv');
			 var buttonDiv = document.getElementById('buttonDiv');
			 var langBanner = document.getElementById('banner');
			 langBanner.style.display = "none";
			 inputDiv.style.display = "inline-block";
			 buttonDiv.style.display = "inline-block";
			 
		 }else{
// 			 speak(ctx,"Sorry! That's wrong. Please try again")
// 			 girl.style.border = "thick solid #FF0000";
		 }
	 });
	button.addEventListener('click', function (event) {
		console.log("Button Clicked")
		 var inputVal = document.getElementById("inputbox").value;
		 console.log("Input Val : " + inputVal)
		 if(inputVal=="la femme"){
// 			speak(ctx,"button1",null)
			ctx.worldData.currentEntity = "horse"
			 var inputDiv = document.getElementById('inputDiv');
			 var buttonDiv = document.getElementById('buttonDiv');
			 var langBanner = document.getElementById('banner2');
			 inputDiv.style.display = "none";
			 buttonDiv.style.display = "none";
			 langBanner.style.display = "block"
// 			 speak(ctx,"Select the word for the horse",null)
		}
	 });
	horse.addEventListener('click', function (event) {
		console.log("Horse clicked")
		 if(ctx.worldData.currentEntity=="horse"){
			 speak(ctx,"Great! Now select the word for the Boy","le chaval")
			 horse.style.border = "thick solid #00FF00"; 	
			 ctx.worldData.currentEntity = "boy"
		 }else{
// 			 speak(ctx,"Sorry! That's wrong. Please try again")
// 			 girl.style.border = "thick solid #FF0000";
		 }
	 });
	boy.addEventListener('click', function (event) {
		console.log("Boy clicked")
		 if(ctx.worldData.currentEntity=="boy"){
			 speak(ctx,"Great! Now select the word for the Man","le garçon")
			 boy.style.border = "thick solid #00FF00"; 	
			 ctx.worldData.currentEntity = "man"
		 }else{
// 			 speak(ctx,"Sorry! That's wrong. Please try again")
// 			 girl.style.border = "thick solid #FF0000";
		 }
	 });
	man.addEventListener('click', function (event) {
		console.log("Man clicked")
		 if(ctx.worldData.currentEntity=="man"){
// 			 speak(ctx,"Great!","l'homme")
			 var inputDiv = document.getElementById('inputDiv2');
			 var buttonDiv = document.getElementById('buttonDiv2');
			 var langBanner = document.getElementById('banner2');
			 langBanner.style.display = "none";
			 inputDiv.style.display = "inline-block";
			 buttonDiv.style.display = "inline-block";
		 }else{
// 			 speak(ctx,"Sorry! That's wrong. Please try again")
// 			 girl.style.border = "thick solid #FF0000";
		 }
	 });
	button2.addEventListener('click', function (event) {
		console.log("Button Clicked")
		 var inputVal = document.getElementById("inputbox2").value;
		 console.log("Input Val : " + inputVal)
		 if(inputVal=="le chaval"){
// 			speak(ctx,"button2",null)
			ctx.worldData.currentEntity = "dog"
			 var inputDiv = document.getElementById('inputDiv2');
			 var buttonDiv = document.getElementById('buttonDiv2');
			 var langBanner = document.getElementById('banner3');
			 inputDiv.style.display = "none";
			 buttonDiv.style.display = "none";
			 langBanner.style.display = "block"
		}
	 });
	
	dog.addEventListener('click', function (event) {
		console.log("Dog clicked")
		 if(ctx.worldData.currentEntity=="dog"){
			 speak(ctx,"Great! Now select the word for the Plane","le chien")
			 dog.style.border = "thick solid #00FF00"; 	
			 ctx.worldData.currentEntity = "plane"
		 }else{
// 			 speak(ctx,"Sorry! That's wrong. Please try again")
// 			 girl.style.border = "thick solid #FF0000";
		 }
	 });
	plane.addEventListener('click', function (event) {
		console.log("Plane clicked")
		 if(ctx.worldData.currentEntity=="plane"){
			 speak(ctx,"Great! Now select the word for the Student","l'avion")
			 plane.style.border = "thick solid #00FF00"; 	
			 ctx.worldData.currentEntity = "student"
		 }else{
// 			 speak(ctx,"Sorry! That's wrong. Please try again")
// 			 girl.style.border = "thick solid #FF0000";
		 }
	 });
	student.addEventListener('click', function (event) {
		console.log("Student clicked")
		 if(ctx.worldData.currentEntity=="student"){
// 			 speak(ctx,"Great!","l'étudiant")
			 var inputDiv = document.getElementById('inputDiv3');
			 var buttonDiv = document.getElementById('buttonDiv3');
			 var langBanner = document.getElementById('banner3');
			 langBanner.style.display = "none";
			 inputDiv.style.display = "inline-block";
			 buttonDiv.style.display = "inline-block";
		 }else{
// 			 speak(ctx,"Sorry! That's wrong. Please try again")
// 			 girl.style.border = "thick solid #FF0000";
		 }
	 });
}

function speak(ctx,text,french){
	const speechComponent = ctx.entity.getComponent('SpeechComponent');
	const speech = new sumerian.Speech();

	speechComponent.addSpeech(speech);
	
	if(french != null){
		speech.updateConfig({
		body: '<speak>' + french + '<break time="1000ms"/>' + '</speak>',
		voice: 'Celine'
		});
		ctx.speak = () => {
			speech.play().then(() => {	
				speech.updateConfig({
				body: '<speak>' + text + '</speak>',
				voice: 'Amy'
				});
				ctx.speak = () => {
					speech.play().then(() => {
						if(french=="la femme"){
							 var inputDiv = document.getElementById('inputDiv');
							 var buttonDiv = document.getElementById('buttonDiv');
							 var langBanner = document.getElementById('banner');
							 langBanner.style.display = "none";
							 inputDiv.style.display = "inline-block";
							 buttonDiv.style.display = "inline-block";
						}
					});
				}
				ctx.speak();		
			});
		}
		ctx.speak();
	}else{
		if(text=="button1"){
			
			speech.updateConfig({
			body: '<speak>' + "Good Job" + '<break time="1000ms"/>' + "Select the word for horse" + '</speak>',
			voice: 'Amy'
			});
			ctx.speak = () => {
				speech.play().then(() => {
					 var inputDiv = document.getElementById('inputDiv');
					 var buttonDiv = document.getElementById('buttonDiv');
					 var langBanner = document.getElementById('banner2');
					 inputDiv.style.display = "none";
					 buttonDiv.style.display = "none";
					 langBanner.style.display = "block"
				});
			}
			
		}else if(text=="button2"){
			
			speech.updateConfig({
			body: '<speak>' + "Good Job" + '<break time="1000ms"/>' + "Select the word for dog" + '</speak>',
			voice: 'Amy'
			});
			ctx.speak = () => {
				speech.play().then(() => {
					 var inputDiv = document.getElementById('inputDiv2');
					 var buttonDiv = document.getElementById('buttonDiv2');
					 var langBanner = document.getElementById('banner3');
					 inputDiv.style.display = "none";
					 buttonDiv.style.display = "none";
					 langBanner.style.display = "block"
				});
			}
			
		}
		else{
			
			speech.updateConfig({
			body: '<speak>' + text + '</speak>',
			voice: 'Amy'
			});
			ctx.speak = () => {
				speech.play().then(() => {
					console.log("Inside language module audio");
				});
			}

		}
		
		ctx.speak();
	}

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
	sumerian.SystemBus.removeListener("hostTalk",ctx.speak);
	
}

// Defines script parameters.
//
var parameters = [];


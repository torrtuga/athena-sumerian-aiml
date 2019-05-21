'use strict';
	
// The sumerian object can be used to access Sumerian engine
// types.
//
/* global sumerian */
const greeting = "welcome to the Sumerian Concierge Experience."
	
// Called when play mode starts.
//
function setup(args, ctx) {
		
	sumerian.SystemBus.addListener("languageWindowStarted",languageLearnWindow(ctx))
	
}

function languageLearnWindow(ctx){
	
	var image1 = document.getElementById("img1");
	var image2 = document.getElementById("img2");
	var image3 = document.getElementById("img3");
	var image4 = document.getElementById("img4");
	var image5 = document.getElementById("img5");
	var image6 = document.getElementById("img6");
	var text1  = document.getElementById("one");
	var text2  = document.getElementById("two");
	var text3  = document.getElementById("three");
	var text4  = document.getElementById("four");
	var text5  = document.getElementById("five");
	var text6  = document.getElementById("six");
	var button = document.getElementById("buttonID");
	var langBanner = document.getElementById("containerID");
	var langAssesment = document.getElementById("assesContainerID");
	var langOptions = document.getElementById("assesImageID");
	
	image1.addEventListener('click', function (event) {
		text = image1.alt;
		console.log("Text : " + text);
		speak(ctx,text);
	 });
	image2.addEventListener('click', function (event) {
		text = image2.alt;
		console.log("Text : " + text);
		speak(ctx,text);
		 
	 });
	image3.addEventListener('click', function (event) {
		text = image3.alt;
		console.log("Text : " + text);
		speak(ctx,text);
		 
	 });
	image4.addEventListener('click', function (event) {
		text = image4.alt;
		console.log("Text : " + text);
		speak(ctx,text);
		 
	 });
	image5.addEventListener('click', function (event) {
		text = image5.alt;
		console.log("Text : " + text);
		speak(ctx,text);
		 
	 });
	image6.addEventListener('click', function (event) {
		text = image6.alt;
		console.log("Text : " + text);
		speak(ctx,text);
		 
	 });
	
	button.addEventListener('click', function (event) {
		
		if(ctx.worldData.currentPage=="pageOne"){
			
			console.log("pageOne Clicked");
			ctx.worldData.currentPage = "pageTwo";
			ctx.world.loader.load("38cef2f90750990fa6d3bb6b3921a8aafdc54e94.jpg").then(img=>{
  				image1.src = img.src;
				image1.alt = "une femme";
				text1.innerHTML = "une femme (a wife)";
			});
			ctx.world.loader.load("9adcc8dd69400ec418ff51fbd39f5d6c2471f478.jpg").then(img=>{
  				image2.src=img.src;
				image2.alt =  "une mère";
				text2.innerHTML =  "une mère (a mother)";
			});
			ctx.world.loader.load("da9d16b516ab892995e139cfa88037114fbb68c9.jpg").then(img=>{
  				image3.src=img.src;
				image3.alt = "un père";
				text3.innerHTML = "un père (a father)";;
			});
			ctx.world.loader.load("612ba1af8af8be69de58cf9a5555608ab07fecc8.jpg").then(img=>{
  				image4.src=img.src;
				image4.alt = "une famille";
				text4.innerHTML = "une famille (a family)";
			});
			ctx.world.loader.load("6ed06da3e3817268e500ad931e26edee062e70c5.jpg").then(img=>{
  				image5.src=img.src;
				image5.alt = "une grand-mère";
				text5.innerHTML = "une grand-mère (a grandma)";
			});
			ctx.world.loader.load("d7a3ef0dc138cb7a9c7504d73c970ca59718157a.jpg").then(img=>{
  				image6.src=img.src;
				image6.alt = "un grand-père";
				text6.innerHTML = "un grand-père (a grandpa)";
			});
			
		}else if(ctx.worldData.currentPage=="pageTwo"){
			
			
			console.log("page two clicked");
			ctx.worldData.currentPage = "pageThree";
			ctx.world.loader.load("607ed8217ef529ef17ec18a1a1bf4fff7e1492ce.jpg").then(img=>{
  				image1.src = img.src;
				image1.alt = "un aéroport";
				text1.innerHTML = "un aéroport (an airport)";
			});
			ctx.world.loader.load("337f8486be48f6ae2162d97c0bbef8e50aee86b9.jpg").then(img=>{
  				image2.src=img.src;
				image2.alt =  "un chat";
				text2.innerHTML =  "un chat (a cat)";
			});
			ctx.world.loader.load("466ffa59c1a06e2324fbb64bebede6823f5a0a2a.jpg").then(img=>{
  				image3.src=img.src;
				image3.alt = "un chien";
				text3.innerHTML = "un chien (a dog)";;
			});
			ctx.world.loader.load("8aa2367780dd8537cd60e21c9b99cf23b5238142.jpg").then(img=>{
  				image4.src=img.src;
				image4.alt = "un cheval";
				text4.innerHTML = "un cheval (a horse)";
			});
			ctx.world.loader.load("f69a4f20845607b25c4be90ee6ecf667d3134ac3.jpg").then(img=>{
  				image5.src=img.src;
				image5.alt = "un avion";
				text5.innerHTML = "un avion (an airplane)";
			});
			ctx.world.loader.load("9f6163f066d71cf0a7848a6ac52b96960b55eca6.jpg").then(img=>{
  				image6.src=img.src;
				image6.alt = "un hôtel";
				text6.innerHTML = "un hôtel (a hotel)";
			});
			
		}else if(ctx.worldData.currentPage=="pageThree"){
			langBanner.style.display = "none";
			langAssesment.style.display = "block";
			
			ctx.worldData.currentImage="le garcon";
		} 
	 });
	
	var submitButton = document.getElementById("submitButtonID");
	var inputBox = document.getElementById("inputboxID");
	var testImage = document.getElementById("testImageID");
	
	submitButton.addEventListener('click', function (event) {
		var value = inputBox.value;
		console.log("Value is " + value);
		
		if(value==ctx.worldData.currentImage && value=="le garcon"){
			console.log("over here........")
			speakEnglish(ctx,"That's Correct");
			inputBox.value = "";
			ctx.world.loader.load("337f8486be48f6ae2162d97c0bbef8e50aee86b9.jpg").then(img=>{
  				testImage.src=img.src;
				ctx.worldData.currentImage = "un chat"
			});
		}else if(ctx.worldData.currentImage=="le garcon" && value!=ctx.worldData.currentImage){
			inputBox.value = "";
			speakEnglish(ctx,"That's incorrect")
		}
		
		if(value==ctx.worldData.currentImage && value=="un chat"){
			speakEnglish(ctx,"That's Correct");
			inputBox.value = "";
			ctx.world.loader.load("da9d16b516ab892995e139cfa88037114fbb68c9.jpg").then(img=>{
  				testImage.src=img.src;
				ctx.worldData.currentImage = "un pere";
			});
		}else if(ctx.worldData.currentImage=="un chat" && value!=ctx.worldData.currentImage){
			speakEnglish(ctx,"That's incorrect");
			inputBox.value = "";
		}
		
		if(value==ctx.worldData.currentImage && value=="un pere"){
			speakEnglish(ctx,"That's Correct");
			langAssesment.style.display = "none";
			langOptions.style.display = "block";
			ctx.worldData.currentOption = "un chien"
			
		}else if(ctx.worldData.currentImage=="un pere" && value!=ctx.worldData.currentImage){
			speakEnglish(ctx,"That's incorrect");
			inputBox.value = "";
		}
	});
	
	var imageOption1 = document.getElementById("image1");
	var imageOption2 = document.getElementById("image2");
	var imageOption3 = document.getElementById("image3");
	var spanText = document.getElementById("spanTextID");
	
	imageOption1.addEventListener('click', function (event) {
		var imageVal1 = imageOption1.alt;
		if(imageVal1 == ctx.worldData.currentOption){
			speakEnglish(ctx,"That's Correct");
			spanText.innerHTML = "deux femme";
			ctx.worldData.currentOption = "deux femme";
			ctx.world.loader.load("da9d16b516ab892995e139cfa88037114fbb68c9.jpg").then(img=>{
  				imageOption1.src=img.src;
				imageOption1.alt = "un père";
			});
			ctx.world.loader.load("6ed06da3e3817268e500ad931e26edee062e70c5.jpg").then(img=>{
  				imageOption2.src=img.src;
				imageOption2.alt = "une grand-mère";
			});
			ctx.world.loader.load("99e54e46969a9d63c54078f2ec59300896bb7ab2.jpg").then(img=>{
  				imageOption3.src=img.src;
				imageOption3.alt = "deux femme";
			});
			imageOption1.style.border = "none";
			imageOption2.style.border = "none";
			imageOption3.style.border = "none";
		}else{
			speakEnglish(ctx,"That's incorrect");
			imageOption1.style.border = "1px solid #FF0000";
		}	
	});
	
	imageOption2.addEventListener('click', function (event) {
		var imageVal2 = imageOption2.alt;
		if(imageVal2 == ctx.worldData.currentOption){
			speakEnglish(ctx,"That's Correct");
			spanText.innerHTML = "un avion";
			ctx.worldData.currentOption = "un avion";
			ctx.world.loader.load("f69a4f20845607b25c4be90ee6ecf667d3134ac3.jpg").then(img=>{
  				imageOption1.src=img.src;
				imageOption1.alt = "un avion";
			});
			ctx.world.loader.load("9f6163f066d71cf0a7848a6ac52b96960b55eca6.jpg").then(img=>{
  				imageOption2.src=img.src;
				imageOption2.alt = "un hôtel";
			});
			ctx.world.loader.load("607ed8217ef529ef17ec18a1a1bf4fff7e1492ce.jpg").then(img=>{
  				imageOption3.src = img.src;
				imageOption3.alt = "un aéroport";
			});
			imageOption1.style.border = "none";
			imageOption2.style.border = "none";
			imageOption3.style.border = "none";
		}else{
			speakEnglish(ctx,"That's incorrect");
			imageOption2.style.border = "1px solid #FF0000";
		}	
	});
	
	imageOption3.addEventListener('click', function (event) {
		var imageVal3 = imageOption3.alt;
		if(imageVal3 == ctx.worldData.currentOption){
			speakEnglish(ctx,"That's Correct");
			langOptions.style.display = "none";
			imageOption1.style.border = "none";
			imageOption2.style.border = "none";
			imageOption3.style.border = "none";
		}else{
			speakEnglish(ctx,"That's incorrect");
			imageOption3.style.border = "1px solid #FF0000";
		}	
	});
	
}

function speak(ctx,text){
	const speechComponent = ctx.entity.getComponent('SpeechComponent');
	const speech = new sumerian.Speech();

	speechComponent.addSpeech(speech);
	
	speech.updateConfig({
		body: '<speak>' + text + '</speak>',
		voice: 'Celine'
	});
	ctx.speak = () => {
		speech.play().then(() => {
			console.log("Inside language module audio");
		});
	}
	ctx.speak();
	
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
			console.log("Inside language module audio");
		});
	}
	ctx.speak();
	
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

function openWindow(ctx){
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


'use strict';

// The sumerian object can be used to access Sumerian engine
// types.
//
/* global sumerian */

// Called when play mode starts.
// 

var score = 0;
var assessment_num = 0;

var image_object_pageFour = [
	
	{'dataID' : "e928c3e8c0edaf3d7108dccd1120faa2615a901d.jpg",
	 'alt' : 'un chocolat',
	 'text' : 'un chocolat (a chocolate)',
	 'english' : 'a chocolate'},
	{'dataID' : "2e8ff4f5e4b0a9eec0b20d163a39546a229c023f.jpg",
	 'alt' : 'fromage',
	 'text' : 'fromage (cheese)',
	 'english' : 'cheese'},
	{'dataID' : "5a9208571ddbab43b444a150a8ebffd5c6be18fb.jpg",
	 'alt' : 'pain',
	 'text' : 'pain (bread)',
	 'english' : 'bread'},
	{'dataID' : "f15da86ba823d5f80c37cf235defa374c92c84ed.jpg",
	 'alt' : 'du vin',
	 'text' : 'du vin (wine)',
	 'english' : 'wine'},
	{'dataID' : "89de524cd258f35f6245cfa86cdfddebd099cf27.jpg",
	 'alt' : 'un sandwich',
	 'text' : 'un sandwich (a sandwich)',
	 'english' : 'a sandwich'},
	{'dataID' : "6903716efec5eb0a0d4c8fa67917eee402cda47e.jpg",
	 'alt' : 'cafe',
	 'text' : 'cafe (coffee)',
	 'english' : 'cafe'}
	
];

var image_object_pageFive = [
	{'dataID' : "cbd3ea55a59cf46458dcff66101510517301c9cd.jpg",
	 'alt' : 'un parc',
	 'text' : 'un parc (a park)',
	 'english' : 'a park'},
	{'dataID' : "607ed8217ef529ef17ec18a1a1bf4fff7e1492ce.jpg",
	 'alt' : 'un aeroport',
	 'text' : 'un aeroport (an airport)',
	 'english' : 'an airport'},
	{'dataID' : "9e14c78b0f0601eb8d1569978c4905a7aa02fe8c.jpg",
	 'alt' : 'un hopital',
	 'text' : 'un hopital (a hospital)',
	 'english' : 'a hospital'},
	{'dataID' : "5fe3dd9a13231fb3550446d5cf4a75b5ab366353.jpg",
	 'alt' : 'un chateau',
	 'text' : 'un chateau (a castle)',
	 'english' : 'a castle'},
	{'dataID' : "04621df8723dad37722ca24a9e0ce8091fc41b40.jpg",
	 'alt' : 'une boulangerie',
	 'text' : 'une boulangerie(a bakery)',
	 'english' : 'a bakery'},
	{'dataID' : "6142fc0ba168737d785cb401e177a77b4b3e45fd.jpg",
	 'alt' : 'un appartement',
	 'text' : 'un appartement(an apartment)',
	 'english' : 'an apartment'}
];

var image_object_pageSix = [
	
	{'dataID' : "21574a987c56a1f76a6218d0e1ab82e3a0b46738.jpg",
	 'alt' : 'un livre',
	 'text' : 'un livre (a book)',
	 'english' : 'a book'},
	{'dataID' : "9a0ad5a0af85fca6d6602e3083a68319522afbae.jpg",
	 'alt' : 'un bus',
	 'text' : 'un bus (a bus)',
	 'english' : 'a bus'},
	{'dataID' : "1f7cacaee6458f237319b69639458d01c90830a4.jpg",
	 'alt' : 'une tasse',
	 'text' : 'une tasse (a cup)',
	 'english' : 'a cup'},
	{'dataID' : "57bd577a608d4043872f559ac0af6a304728ff4a.jpg",
	 'alt' : 'une plante',
	 'text' : 'une plante (a plant)',
	 'english' : 'a plant'},
	{'dataID' : "b59d69d85b7cf2d63f54e99c65280fad3d6b16e2.jpg",
	 'alt' : 'une table',
	 'text' : 'une table (a table)',
	 'english' : 'a table'},
	{'dataID' : "12fa291bc80d67c0f49304485a2a4c40b07ecc0f.jpg",
	 'alt' : 'une bicyclette',
	 'text' : 'une bicyclette (a bicycle)',
	 'english' : 'a bicycle'}
];

function setup(args, ctx) {
	
	sumerian.SystemBus.addListener("moduleTwoStarted",languageModuleTwo(ctx));
}

function languageModuleTwo(ctx){
	
	var goodbye_greeting = "Good bye! Hope you learnt a lot"
	
	var langBannerFour = document.getElementById("containerIDFour");
	var langBannerFive = document.getElementById("containerIDFive");
	var langBannerSix = document.getElementById("containerIDSix");
	var langAssesment = document.getElementById("assesContainerIDTwo");
	var langOptions = document.getElementById("assesImageIDTwo");
	var langAssesText = document.getElementById("assesTextId2");
	var text;
	
	var image41 = document.getElementById("img41");
	var image42 = document.getElementById("img42");
	var image43 = document.getElementById("img43");
	var image44 = document.getElementById("img44");
	var image45 = document.getElementById("img45");
	var image46 = document.getElementById("img46");
	var text41  = document.getElementById("one4");
	var text42  = document.getElementById("two4");
	var text43  = document.getElementById("three4");
	var text44  = document.getElementById("four4");
	var text45  = document.getElementById("five4");
	var text46  = document.getElementById("six4");
	var buttonFour = document.getElementById("buttonIDFour");
	var buttonCloseFour = document.getElementById("buttonCloseIDFour");
	
	var image51 = document.getElementById("img51");
	var image52 = document.getElementById("img52");
	var image53 = document.getElementById("img53");
	var image54 = document.getElementById("img54");
	var image55 = document.getElementById("img55");
	var image56 = document.getElementById("img56");
	var text51  = document.getElementById("one5");
	var text52  = document.getElementById("two5");
	var text53  = document.getElementById("three5");
	var text54  = document.getElementById("four5");
	var text55  = document.getElementById("five5");
	var text56  = document.getElementById("six5");
	var buttonFive = document.getElementById("buttonIDFive");
	var buttonCloseFive = document.getElementById("buttonCloseIDFive");
	
	var image61 = document.getElementById("img61");
	var image62 = document.getElementById("img62");
	var image63 = document.getElementById("img63");
	var image64 = document.getElementById("img64");
	var image65 = document.getElementById("img65");
	var image66 = document.getElementById("img66");
	var text61  = document.getElementById("one6");
	var text62  = document.getElementById("two6");
	var text63  = document.getElementById("three6");
	var text64  = document.getElementById("four6");
	var text65  = document.getElementById("five6");
	var text66  = document.getElementById("six6");
	var buttonSix = document.getElementById("buttonIDSix");
	var buttonCloseSix = document.getElementById("buttonCloseIDSix");
	
	var submitButtonCount = 1;
	
	image41.addEventListener('click', function (event) {
		image41.style.border='2px solid #2ce827';
		text = image41.alt;
		console.log("Text : " + text);
		speak(ctx,text);
	 });
	image42.addEventListener('click', function (event) {
		image42.style.border='2px solid #2ce827';
		text = image42.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image43.addEventListener('click', function (event) {
		image43.style.border='2px solid #2ce827';
		text = image43.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image44.addEventListener('click', function (event) {
		image44.style.border='2px solid #2ce827';
		text = image44.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image45.addEventListener('click', function (event) {
		image45.style.border='2px solid #2ce827';
		text = image45.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image46.addEventListener('click', function (event) {
		image46.style.border='2px solid #2ce827';
		text = image46.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	
	
	image51.addEventListener('click', function (event) {
		image51.style.border='2px solid #2ce827';
		text = image51.alt;
		console.log("Text : " + text);
		speak(ctx,text);
	 });
	image52.addEventListener('click', function (event) {
		image52.style.border='2px solid #2ce827';
		text = image52.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image53.addEventListener('click', function (event) {
		image53.style.border='2px solid #2ce827';
		text = image53.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image54.addEventListener('click', function (event) {
		image54.style.border='2px solid #2ce827';
		text = image54.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image55.addEventListener('click', function (event) {
		image55.style.border='2px solid #2ce827';
		text = image55.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image56.addEventListener('click', function (event) {
		image56.style.border='2px solid #2ce827';
		text = image56.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	
	
	image61.addEventListener('click', function (event) {
		image61.style.border='2px solid #2ce827';
		text = image61.alt;
		console.log("Text : " + text);
		speak(ctx,text);
	 });
	image62.addEventListener('click', function (event) {
		image62.style.border='2px solid #2ce827';
		text = image62.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image63.addEventListener('click', function (event) {
		image63.style.border='2px solid #2ce827';
		text = image63.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image64.addEventListener('click', function (event) {
		image64.style.border='2px solid #2ce827';
		text = image64.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image65.addEventListener('click', function (event) {
		image65.style.border='2px solid #2ce827';
		text = image65.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image66.addEventListener('click', function (event) {
		image66.style.border='2px solid #2ce827';
		text = image66.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	
	
	buttonFour.addEventListener('click', function (event) {
		console.log("pageFour Clicked");
		ctx.worldData.currentPage = "pageFive";
		langBannerFour.style.display = "none";
		langBannerFive.style.display = "block";
		writeToFile(ctx)
	});
	
	buttonFive.addEventListener('click', function (event) {
		console.log("page five clicked");
		ctx.worldData.currentPage = "pageSix";
		langBannerFive.style.display = "none";
		langBannerSix.style.display = "block";
		writeToFile(ctx)
	});
	
	buttonSix.addEventListener('click', function (event) {
		langBannerSix.style.display = "none";
		triggerFunc(ctx)
	});
	
	//close buttons
	buttonCloseFour.addEventListener('click', function (event) {
		langBannerFour.style.display = "none";
		speakEnglish(ctx, goodbye_greeting);
		
	});
	
	buttonCloseFive.addEventListener('click', function (event) {
		langBannerFive.style.display = "none";
		speakEnglish(ctx, goodbye_greeting)
		
	});
	
	buttonCloseSix.addEventListener('click', function (event) {
		langBannerSix.style.display = "none";
		speakEnglish(ctx, goodbye_greeting)
		
	});
	
	//Assesment module
	var submitButton = document.getElementById("submitButtonIDTwo");
	var inputBox = document.getElementById("inputboxIDTwo");
	var testImage = document.getElementById("testImageIDTwo");
	
	submitButton.addEventListener('click', function (event) {
		var value = inputBox.value;
		console.log("Value is " + value);
		
		if(value==ctx.worldData.currentImage && ctx.worldData.currentImageNum===1){
			console.log("over here........");
			var text = random_correct(Math.floor((Math.random() * 10) + 1));
			speakEnglish(ctx,text);
			score = score + 10;
			inputBox.value = "";
			var random_num = Math.floor(Math.random() * 6);
			ctx.world.loader.load(image_object_pageFive[random_num].dataID).then(img=>{
				testImage.src=img.src;
				ctx.worldData.currentImage = image_object_pageFive[random_num].alt;
				ctx.worldData.currentImageNum = 2
			});
		}else if(ctx.worldData.currentImageNum===1 && value!=ctx.worldData.currentImage){
			var text = random_incorrect(Math.floor((Math.random() * 10) + 1));
			speakEnglish(ctx,text)
			inputBox.value = "";
			var random_num = Math.floor(Math.random() * 6);
			ctx.world.loader.load(image_object_pageFive[random_num].dataID).then(img=>{
				testImage.src=img.src;
				ctx.worldData.currentImage = image_object_pageFive[random_num].alt;
				ctx.worldData.currentImageNum = 2
			});
		}
		
		if(value==ctx.worldData.currentImage && ctx.worldData.currentImageNum===2){
			var text = random_correct(Math.floor((Math.random() * 10) + 1));
			speakEnglish(ctx,text);
			score = score + 10;
			inputBox.value = "";
			var random_num = Math.floor(Math.random() * 6);
			ctx.world.loader.load(image_object_pageSix[random_num].dataID).then(img=>{
				testImage.src=img.src;
				ctx.worldData.currentImage = image_object_pageSix[random_num].alt;
				ctx.worldData.currentImageNum = 3
			});
		}else if(ctx.worldData.currentImageNum===2 && value!=ctx.worldData.currentImage){
			var text = random_incorrect(Math.floor((Math.random() * 10) + 1));
			speakEnglish(ctx,text);
			inputBox.value = "";
			var random_num = Math.floor(Math.random() * 6);
			ctx.world.loader.load(image_object_pageSix[random_num].dataID).then(img=>{
				testImage.src=img.src;
				ctx.worldData.currentImage = image_object_pageSix[random_num].alt;
				ctx.worldData.currentImageNum = 3
			});
		}
		
		if(value==ctx.worldData.currentImage && ctx.worldData.currentImageNum===3){
			var text = random_correct(Math.floor((Math.random() * 10) + 1));
			speakEnglish(ctx,text);
			score = score + 10;
			langAssesment.style.display = "none";
			langAssesText.style.display = "block";
			
		}else if(ctx.worldData.currentImageNum===3 && value!=ctx.worldData.currentImage){
			var text = random_incorrect(Math.floor((Math.random() * 10) + 1));
			speakEnglish(ctx,text);
// 			inputBox.value = "";
			langAssesment.style.display = "none";
			langAssesText.style.display = "block";
		}
	});
	
	
	var textDiv = document.getElementById('englishTextId2');
	var inputText = document.getElementById('englishInputID2');
	var buttonText = document.getElementById('submitFrenchButtonID2');
	submitButtonCount = 1;
	
	buttonText.addEventListener('click', function (event) {
		var value = inputText.value;
		console.log("value" + value);
		console.log("Submit button value : " + submitButtonCount);
		console.log(ctx.worldData.currentFrench);
		console.log(ctx.worldData.currentEnglish);
		if(textDiv.innerHTML === ctx.worldData.currentFrench && submitButtonCount===1){
			if(value === ctx.worldData.currentEnglish){
				var text = random_correct(Math.floor((Math.random() * 10) + 1));
				speakEnglish(ctx,text);
				score = score + 10;
				inputText.value = "";
			   
			}else{
				var text = random_incorrect(Math.floor((Math.random() * 10) + 1));
				speakEnglish(ctx,text)
				inputText.value = "";
				score = score - 10;
			   
			}	
			var random_num = Math.floor(Math.random()*6);
			var french1 = image_object_pageFive[random_num].alt;
			var english1 = image_object_pageFive[random_num].english;
			if(random_num === 5){
				random_num = 0
			}
			random_num = random_num + 1;
			var french2 = image_object_pageFive[random_num].alt;
			var english2 = image_object_pageFive[random_num].english;
			textDiv.innerHTML = french1 +  ' et ' + french2;
			ctx.worldData.currentFrench = french1 + ' et ' + french2;
			ctx.worldData.currentEnglish = english1 + ' and ' + english2;
			submitButtonCount=2;
		}
		else if(textDiv.innerHTML === ctx.worldData.currentFrench && submitButtonCount===2){
			if(value === ctx.worldData.currentEnglish){
				var text = random_correct(Math.floor((Math.random() * 10) + 1));
				speakEnglish(ctx,text);
				score = score + 10;
				inputText.value = "";
				
			}else{
				var text = random_incorrect(Math.floor((Math.random() * 10) + 1));
				speakEnglish(ctx,text)
				inputText.value = ""; 
				score = score - 10;
			}	
			var random_num = Math.floor(Math.random()*6);
			var french1 = image_object_pageSix[random_num].alt;
			var english1 = image_object_pageSix[random_num].english;
			if(random_num === 5){
				random_num = 0
			}
			random_num = random_num + 1;
			var french2 = image_object_pageSix[random_num].alt;
			var english2 = image_object_pageSix[random_num].english;
			textDiv.innerHTML = french1 +  ' et ' + french2;
			ctx.worldData.currentFrench = french1 + ' et ' + french2;
			ctx.worldData.currentEnglish = english1 + ' and ' + english2;
			submitButtonCount=3
			
		}
		else if(textDiv.innerHTML === ctx.worldData.currentFrench && submitButtonCount===3){
			if(value === ctx.worldData.currentEnglish){
				var text = random_correct(Math.floor((Math.random() * 10) + 1));
				speakEnglish(ctx,text);
				score = score + 10;
				inputText.value = "";
				langAssesText.style.display = "none";
				langOptions.style.display = "block";
			   
			}else{
			    var text = random_incorrect(Math.floor((Math.random() * 10) + 1));
				speakEnglish(ctx,text)
				inputText.value = "";
				score = score - 10;
				langAssesText.style.display = "none";
				langOptions.style.display = "block";
			}	
		}
	});
	
	
	//assesment 2
	var imageOption1 = document.getElementById("image12");
	var imageOption2 = document.getElementById("image22");
	var imageOption3 = document.getElementById("image32");
	var spanText = document.getElementById("spanTextIDTwo");
	
	//logic is the correct option resides uniquely indexed
	imageOption1.addEventListener('click', function (event) {
		console.log("Current option is : " + ctx.worldData.currentOption);
		var imageVal1 = imageOption1.alt;
		if(imageVal1 == spanText.innerHTML){
			var text = random_correct(Math.floor((Math.random() * 10) + 1));
			speakEnglish(ctx,text);
			score = score + 10;
			spanText.innerHTML = "une boulangerie";
			ctx.worldData.currentOption = "une famille";
			ctx.world.loader.load("9e14c78b0f0601eb8d1569978c4905a7aa02fe8c.jpg").then(img=>{
				imageOption1.src=img.src;
				imageOption1.alt = "un hôpital";
			});
			ctx.world.loader.load("04621df8723dad37722ca24a9e0ce8091fc41b40.jpg").then(img=>{
				imageOption2.src=img.src;
				imageOption2.alt = "une boulangerie";
			});
			ctx.world.loader.load("6142fc0ba168737d785cb401e177a77b4b3e45fd.jpg").then(img=>{
				imageOption3.src=img.src;
				imageOption3.alt = "un appartement";
			});
			imageOption1.style.border = "none";
			imageOption2.style.border = "none";
			imageOption3.style.border = "none";
			
		}else{
			var text = random_incorrect(Math.floor((Math.random() * 10) + 1));
			speakEnglish(ctx,text);
			score = score - 10;
			imageOption1.style.border = "1px solid #FF0000";
			
		}
	});
	
	imageOption2.addEventListener('click', function (event) {
		console.log("Current option is : " + ctx.worldData.currentOption);
		var imageVal2 = imageOption2.alt;
		if(imageVal2 == spanText.innerHTML){
			var text = random_correct(Math.floor((Math.random() * 10) + 1));
			speakEnglish(ctx,text);
			score = score + 10;
			spanText.innerHTML = "un livre";
			ctx.worldData.currentOption = "l'étudiant";
			ctx.world.loader.load("b59d69d85b7cf2d63f54e99c65280fad3d6b16e2.jpg").then(img=>{
  				imageOption1.src=img.src;
				imageOption1.alt = "une table";
			});
			ctx.world.loader.load("12fa291bc80d67c0f49304485a2a4c40b07ecc0f.jpg").then(img=>{
  				imageOption2.src=img.src;
				imageOption2.alt = "une bicyclette";
			});
			ctx.world.loader.load("21574a987c56a1f76a6218d0e1ab82e3a0b46738.jpg").then(img=>{
  				imageOption3.src = img.src;
				imageOption3.alt = "un livre";
			});
			imageOption1.style.border = "none";
			imageOption2.style.border = "none";
			imageOption3.style.border = "none";
		}else{
			var text = random_incorrect(Math.floor((Math.random() * 10) + 1));
			speakEnglish(ctx,text);
			socre = score - 10;
			imageOption2.style.border = "1px solid #FF0000";
		}
	});
	
	imageOption3.addEventListener('click', function (event) {
		console.log("Current option is : " + ctx.worldData.currentOption);
		var imageVal3 = imageOption3.alt;
		if(imageVal3 == spanText.innerHTML){
			var text = random_correct(Math.floor((Math.random() * 10) + 1));
			speakEnglish(ctx,text);
			score = score + 10;
			imageOption1.style.border = "none";
			imageOption2.style.border = "none";
			imageOption3.style.border = "none";
			langOptions.style.display = "none";
			if(score > 50){
				speakEnglish(ctx,"Great! Now you can move to the next module");
			}else{
				speakEnglish(ctx,"Looks like you still need to learn. Let's start the second module again");
				ctx.worldData.currentPage = "pageFour"
				var langBanner = document.getElementById("containerIDFour");
				langBanner.style.display = "block";
				score = 0;
				submitButtonCount = 1;
			}
		 }else{
			var text = random_incorrect(Math.floor((Math.random() * 10) + 1));
			speakEnglish(ctx,text);
			score = score - 10;
			imageOption3.style.border = "1px solid #FF0000";
		}
	});
	
}

function triggerFunc(ctx){
	var testImage = document.getElementById("testImageIDTwo");
	var langAssesment = document.getElementById("assesContainerIDTwo");
	var random_num = Math.floor(Math.random() * 6);
	ctx.world.loader.load(image_object_pageFour[random_num].dataID).then(img=>{
		testImage.src=img.src;
		ctx.worldData.currentImage = image_object_pageFour[random_num].alt
	});
	langAssesment.style.display = "block";
	ctx.worldData.currentImage=image_object_pageFour[random_num].alt;
	ctx.worldData.currentImageNum = 1;
	ctx.worldData.currentPage = "assesmentTwo";
	writeToFile(ctx);
	
	//assesment2
	var textDiv = document.getElementById('englishTextId2');
	var random_num_sec = Math.floor(Math.random()*6);
	var french1 = image_object_pageFour[random_num_sec].alt;
	var english1 = image_object_pageFour[random_num_sec].english;
	if(random_num_sec === 5){
		random_num_sec = 0
	}
	random_num_sec = random_num_sec + 1;
	var french2 = image_object_pageFour[random_num_sec].alt;
	var english2 = image_object_pageFour[random_num_sec].english;
	textDiv.innerHTML = french1 +  ' et ' + french2;
	ctx.worldData.currentFrench = french1 + ' et ' + french2;
	ctx.worldData.currentEnglish = english1 + ' and ' + english2;
	
	//assesment3
	var imageOption1 = document.getElementById("image12");
	var imageOption2 = document.getElementById("image22");
	var imageOption3 = document.getElementById("image32");
	var spanText = document.getElementById("spanTextIDTwo");
	ctx.world.loader.load("2e8ff4f5e4b0a9eec0b20d163a39546a229c023f.jpg").then(img=>{
		imageOption1.src=img.src;
		imageOption1.alt = "fromage";
	});
	ctx.world.loader.load("5a9208571ddbab43b444a150a8ebffd5c6be18fb.jpg").then(img=>{
		imageOption2.src=img.src;
		imageOption2.alt = "pain";
	});
	ctx.world.loader.load("6903716efec5eb0a0d4c8fa67917eee402cda47e.jpg").then(img=>{
		imageOption3.src=img.src;
		imageOption3.alt = "café";
	});
	spanText.innerHTML = "fromage";
}

function random_correct(num){
	var myObj = ["That's correct","That's right","Correct","That's correct answer",
				"You've chosen correctly","Correct answer","Right answer","Right",
				"That's right","That's correct"];
	return myObj[num-1];
}

function random_incorrect(num){
	var myObj = ["That's incorrect","That's wrong","Wrong","That's wrong answer",
				"You've chosen incorrectly","Wrong answer","Incorrect answer","Incorrect",
				"That's wrong","That's incorrect"];
	return myObj[num-1];
	
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
			console.log("");
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
			if(text.includes("Hope you learnt")){
				location.reload();
			}
		});
	}
	ctx.speak();
	
}

function writeToFile(ctx){
	var xhr = new XMLHttpRequest();
	var urlDomain = "https://www.torrtuga.xyz/file_edit";
	var name = ctx.worldData.currentUser;
	var currentPage = ctx.worldData.currentPage;
	var data = name + "111000" + currentPage
	console.log("Writing File data " + data)
	var url = urlDomain + "?data=" + data 
	xhr.open('GET',url,true);
	xhr.send();
	xhr.onreadystatechange = (e) => {
		if(xhr.readyState == 4 && xhr.status==200){
			var response = xhr.responseText;
			console.log("JSON File updatation Edit : ", response);
		}
	}
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

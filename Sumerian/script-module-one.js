	
// The sumerian object can be used to access Sumerian engine
// types.
//
/* global sumerian */
//We are tracking : ctx.worldData.currentImage || ctx.worldData.currentPage 
// || ctx.worldData.currentOption
const greeting = "welcome to the Sumerian Concierge Experience."
var score = 0;
var assessment_num = 0;

var image_object_pageOne = [
	
	{'dataID' : "9adcc8dd69400ec418ff51fbd39f5d6c2471f478.jpg",
	 'alt' : 'une mere',
	 'text' : 'une mere (a mother)',
	 'english' : 'a mother'
	},
	{'dataID' : "38cef2f90750990fa6d3bb6b3921a8aafdc54e94.jpg",
	 'alt' : 'une femme',
	 'text' : 'une femme (a wife)',
	 'english' : 'a wife'},
	{'dataID' : "612ba1af8af8be69de58cf9a5555608ab07fecc8.jpg",
	 'alt' : 'une famille',
	 'text' : 'une famille (a family)',
	 'english' : 'a family'},
	{'dataID' : "da9d16b516ab892995e139cfa88037114fbb68c9.jpg",
	 'alt' : 'un pere',
	 'text' : 'un pere (a father)',
	 'english' : 'a father'},
	{'dataID' : "6ed06da3e3817268e500ad931e26edee062e70c5.jpg",
	 'alt' : 'une grandmere',
	 'text' : 'une grandmere (a grandma)',
	 'english' : 'a grandmother'},
	{'dataID' : "d7a3ef0dc138cb7a9c7504d73c970ca59718157a.jpg",
	 'alt' : 'un grandpere',
	 'text' : 'un grandpere (a grandpa)',
	 'english' : 'a grandfather'}
	
];

var image_object_pageTwo = [
		
	{'dataID' : "413a07813701b9f850c7b30a3056f08c53879917.jpg",
	 'alt' : 'un bebe',
	 'text' : 'un bebe (a baby)',
	 'english' : 'a baby'},
	{'dataID' : "b04c21a6f4d790aa21c7a74325290f1c925ac22b.jpg",
	 'alt' : 'un garcon',
	 'text' : 'un garcon (a boy)',
	 'english' : 'a boy'},
	{'dataID' : "97becc8201a325d433f477bff2008c6517c38359.jpg",
	 'alt' : 'une fille',
	 'text' : 'une fille (a girl)',
	 'english' : 'a girl'},
	{'dataID' : "1f4071a430ae541ae4ad1a2c6195fc5d7cd08a16.jpg",
	 'alt' : 'un homme',
	 'text' : 'un homme (a man)',
	 'english' : 'a man'},
	{'dataID' : "d2b4a607275c65db25a5d5e824bcf35c8fc00f4a.jpg",
	 'alt' : 'un etudiant',
	 'text' : 'un etudiant (a student)',
	 'english' : 'a student'},
	{'dataID' : "9ae290bbde9e8ff9376f552609acc1adcaecaef9.jpg",
	 'alt' : 'une femme',
	 'text' : 'une femme (a woman)',
	 'english' : 'a woman'}
];

var image_object_pageThree = [
	
	{'dataID' : "99e54e46969a9d63c54078f2ec59300896bb7ab2.jpg",
	 'alt' : 'deux femmes',
	 'text' : 'deux femmes(two women)',
	 'english' : 'two women'},
	{'dataID' : "492bde4bcdb7b5a493a6f2563de1c66b4321f105.jpg",
	 'alt' : 'deux hommes',
	 'text' : 'deux hommes(two men)',
	 'english' : 'two men'},
	{'dataID' : "22bcb5d9ef4a7eb9694785aa23d0c5e164419df0.jpg",
	 'alt' : 'un enseignant',
	 'text' : 'un enseignant(a teacher)',
	 'english' : 'a teacher'},
	{'dataID' : "8aa2367780dd8537cd60e21c9b99cf23b5238142.jpg",
	 'alt' : 'un cheval',
	 'text' : 'un cheval(a horse)',
	 'english' : 'a horse'},
	{'dataID' : "466ffa59c1a06e2324fbb64bebede6823f5a0a2a.jpg",
	 'alt' : 'un chien',
	 'text' : 'un chien (a dog)',
	 'english': 'a dog'},
	{'dataID' : "337f8486be48f6ae2162d97c0bbef8e50aee86b9.jpg",
	 'alt' : 'un chat',
	 'text' : 'un chat (a cat)',
	 'english' : 'a cat'}
]
	
// Called when play mode starts.
function setup(args, ctx) {
		
	sumerian.SystemBus.addListener("languageWindowStarted",languageLearnWindow(ctx))
	
}

function languageLearnWindow(ctx){
	
	var goodbye_greeting = "Good bye! Hope you learnt a lot"
	
	var langBannerOne = document.getElementById("containerIDOne");
	var langBannerTwo = document.getElementById("containerIDTwo");
	var langBannerThree = document.getElementById("containerIDThree");
	var langAssesment1 = document.getElementById("assesContainerIDOne1");
	var langAssesment2 = document.getElementById("assesContainerIDOne2");
	var langAssesment3 = document.getElementById("assesContainerIDOne3");
	var langOptions1 = document.getElementById("assesImageIDOne1");
	var langOptions2 = document.getElementById("assesImageIDOne2");
	var langOptions3 = document.getElementById("assesImageIDOne3");
	
	
	var langAssesment = document.getElementById("assesContainerIDOne");
	var langOptions = document.getElementById("assesImageIDOne");
	var langAssesText = document.getElementById("assesTextId");
	var text;
	
	var image11 = document.getElementById("img11");
	var image12 = document.getElementById("img12");
	var image13 = document.getElementById("img13");
	var image14 = document.getElementById("img14");
	var image15 = document.getElementById("img15");
	var image16 = document.getElementById("img16");
	var text11  = document.getElementById("one1");
	var text12  = document.getElementById("two1");
	var text13  = document.getElementById("three1");
	var text14  = document.getElementById("four1");
	var text15  = document.getElementById("five1");
	var text16  = document.getElementById("six1");
	var buttonOne = document.getElementById("buttonIDOne");
	var buttonCloseOne = document.getElementById("buttonCloseIDOne");
	
	var image21 = document.getElementById("img21");
	var image22 = document.getElementById("img22");
	var image23 = document.getElementById("img23");
	var image24 = document.getElementById("img24");
	var image25 = document.getElementById("img25");
	var image26 = document.getElementById("img26");
	var text21  = document.getElementById("one2");
	var text22  = document.getElementById("two2");
	var text23  = document.getElementById("three2");
	var text24  = document.getElementById("four2");
	var text25  = document.getElementById("five2");
	var text26  = document.getElementById("six2");
	var buttonTwo = document.getElementById("buttonIDTwo");
	var buttonCloseTwo = document.getElementById("buttonCloseIDTwo");
	
	var image31 = document.getElementById("img31");
	var image32 = document.getElementById("img32");
	var image33 = document.getElementById("img33");
	var image34 = document.getElementById("img34");
	var image35 = document.getElementById("img35");
	var image36 = document.getElementById("img36");
	var text31  = document.getElementById("one3");
	var text32  = document.getElementById("two3");
	var text33  = document.getElementById("three3");
	var text34  = document.getElementById("four3");
	var text35  = document.getElementById("five3");
	var text36  = document.getElementById("six3");
	var buttonThree = document.getElementById("buttonIDThree");
	var buttonCloseThree = document.getElementById("buttonCloseIDThree");
	
	var submitButtonCount = 1;
	
// 	if(ctx.worldData.currentPage=="pageTwo"){
// 		activatePageTwo(ctx);
// 	}
// 	else if(ctx.worldData.currentPage=="pageThree"){
// 		activatePageThree(ctx);
// 	}
	
	image11.addEventListener('click', function (event) {
		image11.style.border='2px solid #2ce827';
		text = image11.alt;
		console.log("Text : " + text);
		speak(ctx,text);
	 });
	image12.addEventListener('click', function (event) {
		image12.style.border='2px solid #2ce827';
		text = image12.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image13.addEventListener('click', function (event) {
		image13.style.border='2px solid #2ce827';
		text = image13.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image14.addEventListener('click', function (event) {
		image14.style.border='2px solid #2ce827';
		text = image14.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image15.addEventListener('click', function (event) {
		image15.style.border='2px solid #2ce827';
		text = image15.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image16.addEventListener('click', function (event) {
		image16.style.border='2px solid #2ce827';
		text = image16.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	
	
	
	image21.addEventListener('click', function (event) {
		image21.style.border='2px solid #2ce827';
		text = image21.alt;
		console.log("Text : " + text);
		speak(ctx,text);
	 });
	image22.addEventListener('click', function (event) {
		image22.style.border='2px solid #2ce827';
		text = image22.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image23.addEventListener('click', function (event) {
		image23.style.border='2px solid #2ce827';
		text = image23.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image24.addEventListener('click', function (event) {
		image24.style.border='2px solid #2ce827';
		text = image24.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image25.addEventListener('click', function (event) {
		image25.style.border='2px solid #2ce827';
		text = image25.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image26.addEventListener('click', function (event) {
		image26.style.border='2px solid #2ce827';
		text = image26.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	
	
	image31.addEventListener('click', function (event) {
		image31.style.border='2px solid #2ce827';
		text = image31.alt;
		console.log("Text : " + text);
		speak(ctx,text);
	 });
	image32.addEventListener('click', function (event) {
		image32.style.border='2px solid #2ce827';
		text = image32.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image33.addEventListener('click', function (event) {
		image33.style.border='2px solid #2ce827';
		text = image33.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image34.addEventListener('click', function (event) {
		image34.style.border='2px solid #2ce827';
		text = image34.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image35.addEventListener('click', function (event) {
		image35.style.border='2px solid #2ce827';
		text = image35.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	image36.addEventListener('click', function (event) {
		image36.style.border='2px solid #2ce827';
		text = image36.alt;
		console.log("Text : " + text);
		speak(ctx,text);

	 });
	
	buttonOne.addEventListener('click', function (event) {
		console.log("pageOne Clicked");
		ctx.worldData.currentPage = "pageTwo";
		langBannerOne.style.display = "none";
		langBannerTwo.style.display = "block";
		writeToFile(ctx)
	});
	
	buttonTwo.addEventListener('click', function (event) {
		console.log("page two clicked");
		ctx.worldData.currentPage = "pageThree";
		langBannerTwo.style.display = "none";
		langBannerThree.style.display = "block";
		writeToFile(ctx)
	});
	
	buttonThree.addEventListener('click', function (event) {
		langBannerThree.style.display = "none";
		triggerFunc(ctx)
	});
	
	//close buttons
	buttonCloseOne.addEventListener('click', function (event) {
		langBannerOne.style.display = "none";
		speakEnglish(ctx, goodbye_greeting);
		
	});
	
	buttonCloseTwo.addEventListener('click', function (event) {
		langBannerTwo.style.display = "none";
		speakEnglish(ctx, goodbye_greeting)
		
	});
	
	buttonCloseThree.addEventListener('click', function (event) {
		langBannerThree.style.display = "none";
		speakEnglish(ctx, goodbye_greeting)
		
	});
	

	
 	//assesment module
	var submitButton = document.getElementById("submitButtonIDOne");
	var inputBox = document.getElementById("inputboxIDOne");
	var testImage = document.getElementById("testImageIDOne");
	
	submitButton.addEventListener('click', function (event) {
		var value = inputBox.value;
		console.log("Value is " + value);
		alert("Current image is " + ctx.worldData.currentImage);
		if(value===ctx.worldData.currentImage && ctx.worldData.currentImageNum===1){
			console.log("over here........")
			var text = random_correct(Math.floor((Math.random() * 10) + 1));
			speakEnglish(ctx,text);
			score = score + 10;
			inputBox.value = "";
			var random_num = Math.floor(Math.random() * 6);
			ctx.world.loader.load(image_object_pageTwo[random_num].dataID).then(img=>{
				testImage.src=img.src;
				ctx.worldData.currentImage = image_object_pageTwo[random_num].alt;
				ctx.worldData.currentImageNum = 2
			});
		}else if(ctx.worldData.currentImageNum===1 && value!=ctx.worldData.currentImage){
			var text = random_incorrect(Math.floor((Math.random() * 10) + 1));
			speakEnglish(ctx,text)
			inputBox.value = "";
			var random_num = Math.floor(Math.random() * 6);
			ctx.world.loader.load(image_object_pageTwo[random_num].dataID).then(img=>{
				testImage.src=img.src;
				ctx.worldData.currentImage = image_object_pageTwo[random_num].alt;
				ctx.worldData.currentImageNum = 2
			});
		}
		
		if(value==ctx.worldData.currentImage && ctx.worldData.currentImageNum===2){
			var text = random_correct(Math.floor((Math.random() * 10) + 1));
			speakEnglish(ctx,text);
			score = score + 10;
			inputBox.value = "";
			var random_num = Math.floor(Math.random() * 6);
			ctx.world.loader.load(image_object_pageThree[random_num].dataID).then(img=>{
				testImage.src=img.src;
				ctx.worldData.currentImage = image_object_pageThree[random_num].alt;
				ctx.worldData.currentImageNum = 3
			});
		}else if(ctx.worldData.currentImageNum===2 && value!=ctx.worldData.currentImage){
			var text = random_incorrect(Math.floor((Math.random() * 10) + 1));
			speakEnglish(ctx,text);
			inputBox.value = "";
			var random_num = Math.floor(Math.random() * 6);
			ctx.world.loader.load(image_object_pageThree[random_num].dataID).then(img=>{
				testImage.src=img.src;
				ctx.worldData.currentImage = image_object_pageThree[random_num].alt;
				ctx.worldData.currentImageNum = 3
			});
		}
		
		if(value==ctx.worldData.currentImage && ctx.worldData.currentImageNum===3){
			var text = random_correct(Math.floor((Math.random() * 10) + 1));
			speakEnglish(ctx,text);
			score = score + 10;
			langAssesment.style.display = "none";
			langAssesText.style.display = "block";
// 			langOptions.style.display = "block";
// 			ctx.worldData.currentOption = "un grand-père"
			
		}else if(ctx.worldData.currentImageNum===3 && value!=ctx.worldData.currentImage){
			var text = random_incorrect(Math.floor((Math.random() * 10) + 1));
			speakEnglish(ctx,text);
// 			inputBox.value = "";
			langAssesment.style.display = "none";
			langAssesText.style.display = "block";
// 			langOptions.style.display = "block";
// 			ctx.worldData.currentOption = "un grand-père"
		}
	});
	
	
	var textDiv = document.getElementById('englishTextId');
	var inputText = document.getElementById('englishInputID');
	var buttonText = document.getElementById('submitFrenchButtonID');
	submitButtonCount = 1;
	
	buttonText.addEventListener('click', function (event) {
		var value = inputText.value;
		console.log("value" + value);
		console.log("Button count : " + submitButtonCount)
		if(textDiv.innerHTML === ctx.worldData.currentFrench && submitButtonCount===1){
			if(value === ctx.worldData.currentEnglish){
				var text = random_correct(Math.floor((Math.random() * 10) + 1));
				speakEnglish(ctx,text);
				score = score + 10;
				inputText.value = "";
			}else{
				var text = random_incorrect(Math.floor((Math.random() * 10) + 1));
				speakEnglish(ctx,text)
				score = score - 10;
				inputText.value = "";
			   
			}	
			var random_num = Math.floor(Math.random()*6);
			var french1 = image_object_pageTwo[random_num].alt;
			var english1 = image_object_pageTwo[random_num].english;
			if(random_num === 5){
				random_num = 0
			}
			random_num = random_num + 1;
			var french2 = image_object_pageTwo[random_num].alt;
			var english2 = image_object_pageTwo[random_num].english;
			textDiv.innerHTML = french1 +  ' et ' + french2;
			ctx.worldData.currentFrench = french1 + ' et ' + french2;
			ctx.worldData.currentEnglish = english1 + ' and ' + english2;
			submitButtonCount = 2;
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
			var french1 = image_object_pageThree[random_num].alt;
			var english1 = image_object_pageThree[random_num].english;
			if(random_num === 5){
				random_num = 0
			}
			random_num = random_num + 1;
			var french2 = image_object_pageThree[random_num].alt;
			var english2 = image_object_pageThree[random_num].english;
			textDiv.innerHTML = french1 +  ' et ' + french2;
			ctx.worldData.currentFrench = french1 + ' et ' + french2;
			ctx.worldData.currentEnglish = english1 + ' and ' + english2;
			submitButtonCount = 3
		}
		else if(textDiv.innerHTML === ctx.worldData.currentFrench && submitButtonCount===3){
			if(value === ctx.worldData.currentEnglish){
				var text = random_correct(Math.floor((Math.random() * 10) + 1));
				speakEnglish(ctx,text);
				score = score + 10;
				inputText.value = "";
				langAssesText.style.display = "none";
				langOptions.style.display = "block";
				ctx.worldData.currentOption = "un grand-père"
			   
			}else{
			    var text = random_incorrect(Math.floor((Math.random() * 10) + 1));
				speakEnglish(ctx,text)
				inputText.value = "";
				score = score - 10;
				langAssesText.style.display = "none";
				langOptions.style.display = "block";
				ctx.worldData.currentOption = "un grand-père"
			}	
		}
	});
	
	
	
	//assesment 2
	var imageOption1 = document.getElementById("image11");
	var imageOption2 = document.getElementById("image21");
	var imageOption3 = document.getElementById("image31");
	var spanText = document.getElementById("spanTextIDOne");
	
	//logic is the correct option resides uniquely indexed
	imageOption1.addEventListener('click', function (event) {
		console.log("Current option is : " + ctx.worldData.currentOption);
		var imageVal1 = imageOption1.alt;
		if(imageVal1 == spanText.innerHTML){
			var text = random_correct(Math.floor((Math.random() * 10) + 1));
			speakEnglish(ctx,text);
			score = score + 10;
			spanText.innerHTML = "une famille";
			ctx.worldData.currentOption = "une famille";
			ctx.world.loader.load("b04c21a6f4d790aa21c7a74325290f1c925ac22b.jpg").then(img=>{
				imageOption1.src=img.src;
				imageOption1.alt = "un garçon";
			});
			ctx.world.loader.load("612ba1af8af8be69de58cf9a5555608ab07fecc8.jpg").then(img=>{
				imageOption2.src=img.src;
				imageOption2.alt = "une famille";
			});
			ctx.world.loader.load("d7a3ef0dc138cb7a9c7504d73c970ca59718157a.jpg").then(img=>{
				imageOption3.src=img.src;
				imageOption3.alt = "un grand-père";
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
			spanText.innerHTML = "un enseignant";
			ctx.worldData.currentOption = "un enseignant";
			ctx.world.loader.load("492bde4bcdb7b5a493a6f2563de1c66b4321f105.jpg").then(img=>{
  				imageOption1.src=img.src;
				imageOption1.alt = "deux hommes";
			});
			ctx.world.loader.load("d2b4a607275c65db25a5d5e824bcf35c8fc00f4a.jpg").then(img=>{
  				imageOption2.src=img.src;
				imageOption2.alt = "un étudiant";
			});
			ctx.world.loader.load("22bcb5d9ef4a7eb9694785aa23d0c5e164419df0.jpg").then(img=>{
  				imageOption3.src = img.src;
				imageOption3.alt = "un enseignant";
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
				speakEnglish(ctx,"Great! Now you can move to the next module")
				var langBannerModuleTwo = document.getElementById("containerIDFour");
				langBannerModuleTwo.style.display = "block";
				sumerian.SystemBus.emit("moduleTwoStarted");
				ctx.worldData.currentPage = "pageFour"
			}else{
				speakEnglish(ctx,"Looks like you still need to learn. Let's start the first module again");
				ctx.worldData.currentPage = "pageOne"
				var langBanner = document.getElementById("containerIDOne");
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
	alert("Trigger function called");
	var testImage = document.getElementById("testImageIDOne");
	var langAssesment = document.getElementById("assesContainerIDOne");
	var random_num = Math.floor(Math.random() * 6);
	alert(random_num + "init");
	ctx.world.loader.load(image_object_pageOne[random_num].dataID).then(img=>{
		testImage.src=img.src;
		alert(random_num);
		ctx.worldData.currentImage = image_object_pageOne[random_num].alt
		alert(ctx.worldData.currentImage);
		alert(image_object_pageOne[random_num].alt);
	});
	langAssesment.style.display = "block";
// 	ctx.worldData.currentImage=image_object_pageOne[random_num].alt;
	ctx.worldData.currentImageNum = 1;
	ctx.worldData.currentPage = "assesmentOne";
	writeToFile(ctx);
	
	//assesment2
	var textDiv = document.getElementById('englishTextId');
	var random_num_sec = Math.floor(Math.random()*6);
	var french1 = image_object_pageOne[random_num_sec].alt;
	var english1 = image_object_pageOne[random_num_sec].english;
	if(random_num_sec === 5){
		random_num_sec = 0
	}
	random_num_sec = random_num_sec + 1;
	var french2 = image_object_pageOne[random_num_sec].alt;
	var english2 = image_object_pageOne[random_num_sec].english;
	textDiv.innerHTML = french1 +  ' et ' + french2;
	ctx.worldData.currentFrench = french1 + ' et ' + french2;
	ctx.worldData.currentEnglish = english1 + ' and ' + english2;
	
	
	//assesment3
	var imageOption1 = document.getElementById("image11");
	var imageOption2 = document.getElementById("image21");
	var imageOption3 = document.getElementById("image31");
	var spanText = document.getElementById("spanTextIDOne");
	ctx.world.loader.load("d7a3ef0dc138cb7a9c7504d73c970ca59718157a.jpg").then(img=>{
		imageOption1.src=img.src;
		imageOption1.alt = "un grand-père";
	});
	ctx.world.loader.load("97becc8201a325d433f477bff2008c6517c38359.jpg").then(img=>{
		imageOption2.src=img.src;
		imageOption2.alt = "une fille";
	});
	ctx.world.loader.load("337f8486be48f6ae2162d97c0bbef8e50aee86b9.jpg").then(img=>{
		imageOption3.src=img.src;
		imageOption3.alt = "un chat";
	});
	spanText.innerHTML = "un grand-père";
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

function activatePageTwo(ctx){	
	ctx.worldData.currentPage = "pageTwo";
	console.log("Page 2 activation function");	
}

function activatePageThree(ctx){	
	ctx.worldData.currentPage = "pageThree";
	console.log("Page 3 activation function");	
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
	
}

// Defines script parameters.
//
var parameters = [];


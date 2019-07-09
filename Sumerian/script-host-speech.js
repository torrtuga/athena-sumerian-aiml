'use strict';
	
// The sumerian object can be used to access Sumerian engine
// types.
//
/* global sumerian */
	
// Called when play mode starts.
//
//
var currentPage = "PageOne"
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
	
	//for old user
	if(ctx.worldData.userName != undefined && ctx.worldData.userName != "complete"){
		if(ctx.entityData.hostResponse==undefined){
			ctx.entityData.hostResponse = "Good to meet you " + ctx.worldData.userName + ". How are you?"
			ctx.worldData.newUserFlagOne = false;
			ctx.worldData.currentUser = ctx.worldData.userName;
			readProgress(ctx)
		}
		ctx.worldData.userName = "complete";
	}else{
		//for new user
		if(ctx.entityData.hostResponse==undefined){
			ctx.entityData.hostResponse = "Hi, I am Athena, a language tutor bot. What is your name?"
			ctx.worldData.newUserFlagOne = true;
		}
	}
	
	if(ctx.entityData.hostResponse==undefined){ //junk code, will remove
		console.log("Still undefined")
	}else{
		console.log("Username worldData" + ctx.worldData.userName);
		console.log("NewUserFlag : " + ctx.worldData.newUserFlagOne)
		//for new user name response
		if(ctx.worldData.newUserFlagOne==true && ctx.worldData.newUserFlagTwo==true ){
			ctx.worldData.newUserFlagOne = false;
			ctx.worldData.newUserFlagTwo = false;
			console.log("New user flag check")
			addToJSONFile(ctx)
			addToCollection(ctx)
			console.log("New user added")
		}
		if(ctx.entityData.hostResponse.includes(language_module) 
		   		|| ctx.worldData.userName!='complete'){
			console.log("Language module came in output")
			languageLearnModule(ctx);
			resetAimlDialogue(ctx);
		}else{
			//iteration, again ask user for language learning
			if(ctx.worldData.userSecondResponseFlag == 1){
				console.log("Entered userSecondFlag")
				if(ctx.entityData.hostResponse == "neg"){
					ctx.entityData.hostResponse = "Okay, lets continue our conversation";
					ctx.worldData.userSecondResponseFlag = 0;
					transitToNewAimlDialogue(ctx);
				}else{
					languageLearnModule(ctx);
					resetAimlDialogue(ctx);
				}
			}
			else if(ctx.worldData.numIteration%7==0){
				var additionalDialogue = " Anyways, tell me are you feeling better now?"
				ctx.entityData.hostResponse = ctx.entityData.hostResponse + additionalDialogue;
				var stringDummy = ctx.entityData.hostResponse.toString();
				stringDummy.replace('.',' '); //str.replace(/./g, "bar")
				stringDummy.replace('.',' ');
				stringDummy.replace('.',' ');
				ctx.entityData.hostResponse = stringDummy;
				console.log("The modified string is : " + stringDummy)
				ctx.worldData.userSecondResponseFlag = 1;
				console.log("Entered iteration check");
			}
		
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
			
			//speech rekognition part
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
			  //so that it doesn't transition from one state to another
			  if(ctx.worldData.userSecondResponseFlag == 1 && ctx.entityData.hostResponse == "pos"){
				  console.log("Inside dead end");
			  }else{
				  ctx.transitions.success();
			  } 
			}
			recognition.start();
			ctx.speak();
		}
	}
		
}

function addToCollection(ctx){
	console.log("ADDTOCOLLECTION")
	var name = ctx.entityData.userResponse;
	ctx.worldData.currentUser = name;
	var base64Data = ctx.worldData.base64Data;
	var input = name + "111000" + base64Data;
	
	const Http = new XMLHttpRequest();
    const url='https://aaceb6t224.execute-api.us-east-1.amazonaws.com/prod';//aws url
    Http.open("POST", url,true); //true for async call

    Http.setRequestHeader("Accept","application/json");
    Http.setRequestHeader("Content-Type","application/json");

    Http.onreadystatechange = function() {
		console.log("Ready State changed" + Http.readyState + " " + Http.status)
      if(Http.readyState == 4 && Http.status == 200) {
        console.log("Rekog Result ADDTOCOLLECTION : " + Http.responseText)
        var response = JSON.parse(Http.responseText);
        try{
          var user = response;
          console.log("User : " + user);
          self.postMessage(user)
        }catch(e){
          console.log("error : " + e)
        }
		  
      }
    }
    Http.send(input);	
}

function addToJSONFile(ctx){
	var xhr = new XMLHttpRequest();
	var urlDomain = "https://www.torrtuga.xyz/file_insert";
	var name = ctx.entityData.userResponse;
	var url = urlDomain + "?name=" + name;
	xhr.open('GET',url,true);
	xhr.send();
	xhr.onreadystatechange = (e) => {
		if(xhr.readyState == 4 && xhr.status==200){
			var response = xhr.responseText;
			console.log("JSON File updatation : ", response);
		}
	}
}

function readProgress(ctx){
	var name = ctx.worldData.userName;
	var xhr = new XMLHttpRequest();
	var urlDomain = "https://www.torrtuga.xyz/file_read";
	var url = urlDomain + "?name=" + name;
	xhr.open('GET',url,true);
	xhr.send();
	var response = "empty"
	xhr.onreadystatechange = (e) => {
		if(xhr.readyState == 4 && xhr.status==200){
			response = xhr.responseText;
			ctx.worldData.responseFile = response;
			currentPage = response;
			console.log("JSON File Read Progress : ", response);
			console.log("JSON File Read Progress Context : ", ctx.worldData.responseFile);
		}
	}
}

function resetAimlDialogue(ctx){
	var xhr = new XMLHttpRequest();
	var urlDomain = "https://www.torrtuga.xyz/kernel_reset";
	var url = urlDomain;
	xhr.open('GET',url,true);
	xhr.send();
	xhr.onreadystatechange = (e) => {
		if(xhr.readyState == 4 && xhr.status==200){
			response = xhr.responseText;
			console.log("Response after resetting kernel " + response)
		}
	}
}

function transitToNewAimlDialogue(ctx){
	var xhr = new XMLHttpRequest();
	var urlDomain = "https://www.torrtuga.xyz/transit_new_aiml";
	var url = urlDomain;
	xhr.open('GET',url,true);
	xhr.send();
	xhr.onreadystatechange = (e) => {
		if(xhr.readyState ===4 && xhr.status==200){
			response = xhr.responseText;
			console.log("Response after tranisition to new AIML " + response);
		} 
	}
}

function languageLearnModule(ctx){
	
	console.log("Inside language learn module");
// 	sumerian.SystemBus.emit("startLanguageWindow")
	
// 	ctx.worldData.currentOption = "un chien"
	
	const speechComponent = ctx.entity.getComponent('SpeechComponent');
	const speech = new sumerian.Speech();

	speechComponent.addSpeech(speech);
	var text = "";
	if(ctx.worldData.responseFile==undefined){
		text = "Let's learn. Go through the images and select to hear the French word for that. Once done, click next."
	}else{
		text = "Okay! Let's learn from where you left. Go through the images and select to hear the French word for that. Once done, click next."
	}
// 	ctx.worldData.currentPage = "pageOne";

	speech.updateConfig({
		body: '<speak>' + text + '</speak>',
		voice: 'Amy'
	});
	ctx.speak = () => {
		speech.play().then(() => {
			console.log("Inside language module audio initial" + ctx.worldData.responseFile);
			if(ctx.worldData.responseFile===undefined){
				ctx.worldData.currentPage = "pageOne"
				var langBanner = document.getElementById("containerIDOne");
				langBanner.style.display = "block";
			}else{
				if(ctx.worldData.responseFile == 'default'){
					ctx.worldData.currentPage = "pageOne"
					var langBanner = document.getElementById("containerIDOne");
					langBanner.style.display = "block";
				}else{
					ctx.worldData.currentPage = ctx.worldData.responseFile;
					console.log("Current page set as " + ctx.worldData.responseFile)
					if(ctx.worldData.currentPage==="pageOne"){
						var langBanner = document.getElementById("containerIDOne");
						langBanner.style.display = "block";
					}else if(ctx.worldData.currentPage==="pageTwo"){
						var langBanner = document.getElementById("containerIDTwo");
						langBanner.style.display = "block";

					}else if(ctx.worldData.currentPage==="pageThree"){
						var langBanner = document.getElementById("containerIDThree");
						langBanner.style.display = "block";
					}else if(ctx.worldData.currentPage==="pageFour"){
						var langBanner = document.getElementById("containerIDFour");
						langBanner.style.display = "block";
					}else if(ctx.worldData.currentPage==="pageFive"){
						var langBanner = document.getElementById("containerIDFive");
						langBanner.style.display = "block";
					}else if(ctx.worldData.currentPage==="pageSix"){
						var langBanner = document.getElementById("containerIDSix");
						langBanner.style.display = "block";
					}else{
						var langBanner = document.getElementById("containerIDOne");
						langBanner.style.display = "block";
					}
				}
			}

			
			sumerian.SystemBus.emit("languageWindowStarted");
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

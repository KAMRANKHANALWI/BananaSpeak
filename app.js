var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lesssonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "	https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
   return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
   console.log("error occured", error);
   alert("Someting Wrong with Server!")
}


function clickedHandler() {
   var inputText = txtInput.value; // taking input

   //calling server for processing
   fetch(getTranslationURL(inputText))
      .then(response => response.json())
      .then( json => {
         var translatedText = json.contents.translated;
         outputDiv.innerText = translatedText; //output
         })
      .catch(errorHandler);
};

btnTranslate.addEventListener("click", clickedHandler);
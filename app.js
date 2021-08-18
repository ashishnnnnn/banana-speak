var button_translate = document.querySelector("#btn-translate")
var txtinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");



function clickEventHandler(){
    outputdiv.innerText = "ASDFGH "+txtinput.value;
}


button_translate.addEventListener("click", clickEventHandler);


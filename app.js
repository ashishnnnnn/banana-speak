var button_translate = document.querySelector("#btn-translate")
var txtinput = document.querySelector("#txt-input");

function clickEventHandler(){
    console.log("Clicked");
    console.log("Input Values",txtinput.value)
}


button_translate.addEventListener("click", clickEventHandler);


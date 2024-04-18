const inputAngles=document.querySelectorAll(".angle-input");

const checkBtn=document.querySelector("#is-triangle-btn");


function isTriangle(){
    var sum= Number(inputAngles[0].value) + Number(inputAngles[1].value) + Number(inputAngles[2].value);
    if(sum==180){
        document.querySelector("#output-div").innerText="Hurrayy, these angles form a triangle";
    }else{
        document.querySelector("#output-div").innerText="Oh oh! They don't form a triangle"
    }
}

checkBtn.addEventListener('click',isTriangle);
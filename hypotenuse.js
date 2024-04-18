const inputAngles=document.querySelectorAll(".side-input");
const btn=document.querySelector("#hypotenuse-btn");


function sumOfSquares(a,b){
    return a**2+b**2;
}
function calcHypotenuse(){
    const sum=sumOfSquares(Number(inputAngles[0].value),Number(inputAngles[1].value));
    document.querySelector("#output").innerText="Length of the hypotenuse is "+parseFloat(Math.sqrt(sum)).toFixed(2);
}


btn.addEventListener('click',calcHypotenuse);
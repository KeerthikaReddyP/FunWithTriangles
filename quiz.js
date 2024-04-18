const formResult=document.querySelector(".quiz-form");
const submitBtn=document.querySelector("#quiz-submit-btn");

const answersArr=["90°","right-angled","Equilateral"];

function calcScore(){
    let score=0;
    let index=0;
    const quizData=new FormData(formResult);
    for(let value of quizData.values()){
        if(value==answersArr[index]){
            score++;
        }
        index++;
    }
    document.querySelector("#output").innerText="Your score is "+score;
}


submitBtn.addEventListener('click', calcScore);
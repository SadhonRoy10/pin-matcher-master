/***************************************************
 Project Name: Simple Pin generator.
 Author: Sadhon Chondro.
 Contact: 01744909603.
 ***************************************************/

// Generate Pin button activities
const randomCounterBtn=document.getElementById("randomCounterBtn");
randomCounterBtn.addEventListener("click",function(){
    generatePin()

})
// Generate Pin hare
function generatePin(){
   const countRandomNumber= Math.random()*1000000+"";
   const randomNumber=(countRandomNumber).split(".")[0];
   
   document.getElementById("randomCounter").value=randomNumber;
}

// user input button activities
function getUserInput(inputValue){
   document.getElementById("userInput").value=document.getElementById("userInput").value+inputValue;
    if(inputValue=="C"){
        document.getElementById("userInput").value=null;
    }
}

// check two input values number form input box
function checkRandomNumber(){
   const randomNumber= document.getElementById("randomCounter").value;
   const userNumber= document.getElementById("userInput").value;
   

   if (randomNumber ===userNumber){
    
    const successAlert=document.getElementById("successAlert");
    successAlert.style="display:block;"
    dangerAlert.style="display:none;"
    document.getElementById("countTryTime").innerText=0;
    

    }

   else{
    
    const dangerAlert=document.getElementById("dangerAlert");
    dangerAlert.style="display:block;"
    successAlert.style="display:none;"
    
    
    const countTryTime=document.getElementById("countTryTime").innerText;
    const convertCountTryTime= parseInt(countTryTime);
    const total=convertCountTryTime+1;
    document.getElementById("countTryTime").innerText=total;
    }

}
//  submit button activities
const submitBtnActivities =document.getElementById("submitBtn");
submitBtnActivities.addEventListener("click",function(){
    checkRandomNumber();

})

/*********************************Thank you***********************************/

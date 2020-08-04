


var playing=false;
var score;
var timeleft;

var correctAnswer;

document.getElementById("startreset").onclick= function(){
    if (playing==true){
        location.reload();
    }
    else{
        score=0;
        document.getElementById("scorevalue").innerHTML="Score:"+" "+score;
        
        document.getElementById("timeremaining").style.display= "block";
        
        document.getElementById("startreset").innerHTML="Reset";
        playing=!playing;
        timeleft = 60;
        document.getElementById("timeremainingvalue").innerHTML=timeleft;
        
        countdown();
        generateQA();
        
     }
}
 
for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick=
     function(){
     if(playing==true){
         if(this.innerHTML==correctAnswer){
             //correct answer
             score++;
             document.getElementById("scorevalue").innerHTML=score;
             hide("wrong");
             show("correct");
             setTimeout(function(){
                 hide("correct");
             }, 1000);
             
             //Generate new question
             generateQA();
         }
         
         else{
            //wrong answer
             hide("correct");
             show("wrong");
             setTimeout(function(){
                 hide("wrong");
             }, 1000);
         }
     }
 }

}


//1ST PART::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                    //if playing:
                       //reload page
                    //if not playing:
                       //set score to 0;show countdown box; reduce time by 1 sec.
                             //is the left?
                                //yes---continue
                                // No----gameover.
                      //change button to reset
                      //Generate new QA.

//2ND PART , CLICKING ON THE ANSWER BOX:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                   //If we click on the answer box
                       //if we are playing
                           //correct
                                 //yes
                                    //increase score
                                    //show correct box for 1 sec
                                    //Generate new QA
                                // No
                                    //Show try again box for 1sec



//FUNCTIONS-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                        function countdown(){
                        var action = setInterval(function(){
                        timeleft-=1;
                        document.getElementById("timeremainingvalue").innerHTML=timeleft;
                        if(timeleft==0){
                            clearInterval(action);
                            show("gameover");
                            document.getElementById("gameover").innerHTML= "<p> Game over!</p><p> Your score is"+" "+ score + "</p>";
                            hide("timeremaining");
                            hide("correct");
                            hide("wrong");
                            document.getElementById("startreset").innerHTML= "New Game";

                        }



                    }, 1000);

                    }

//............................................................................................
                    function hide(id){
                        document.getElementById(id).style.display="none";
                    }
//.............................................................................................
                    function show(id){
                        document.getElementById(id).style.display="block";
                    }
//.............................................................................................
                  
                   function generateQA(){
                       var x=1+Math.round(9*Math.random());
                       var y=1+Math.round(9*Math.random());
                       correctAnswer= x*y;
                       document.getElementById("question").innerHTML= x+"x"+y;
                       
                       var correctPosition= 1+Math.round(3*Math.random());
                       document.getElementById("box"+correctPosition).innerHTML= correctAnswer;// Fill one box with correct answer
                       var answers=[correctAnswer];
                       for(i=1; i<=4; i++ ){
                           if(i!=correctPosition){
                               var wrongAnswer;
                               do{
                               wrongAnswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
                               } while(answers.indexOf(wrongAnswer)>-1);
                                document.getElementById("box"+i).innerHTML= wrongAnswer;
                               answers.push(wrongAnswer);
                            }
                       }
                    }

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
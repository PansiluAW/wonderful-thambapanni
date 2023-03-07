//all the question are called here
//question1
//the input tag is called to the p tag
var q1=["1. What is the national language of Sri Lanka?"];
var q1a1=["<input onclick=correct1() name=button1 type=radio /> Sinhalese"];
var q1a2=["<input onclick=incorrect1() name=button1 type=radio /> English"];
var q1a3=["<input onclick=incorrect1() name=button1 type=radio /> Mandarin"];
var q1a4=["<input onclick=incorrect1() name=button1 type=radio /> Hindi"];
var a=0;
//question2
var q2=["2.What is the currency of Sri Lanka?"];
var q2a1=["<input onclick=incorrect2() name=button2 type=radio /> Dollar"];
var q2a2=["<input onclick=correct2() name=button2 type=radio /> Rupees"];
var q2a3=["<input onclick=incorrect2() name=button2 type=radio /> Pounds"];
var q2a4=["<input onclick=incorrect2() name=button2 type=radio /> Rubel"];
var b=0;
//question3
var q3=["3.What is the national sport of Sri Lanka?"];
var q3a1=["<input onclick=incorrect3() name=button3 type=radio /> Cricket"];
var q3a2=["<input onclick=incorrect3() name=button3 type=radio /> Football"];
var q3a3=["<input onclick=correct3() name=button3 type=radio /> Volleyball"];
var q3a4=["<input onclick=incorrect3() name=button3 type=radio /> Hockey"];
var c=0;
//question4
var q4=["4.What is the national tree of Sri Lanka?"];
var q4a1=["<input onclick=correct4() name=button4 type=radio /> Na Tree "];
var q4a2=["<input onclick=incorrect4() name=button4 type=radio /> Bo Tree"];
var q4a3=["<input onclick=incorrect4() name=button4 type=radio /> Mango Tree"];
var q4a4=["<input onclick=incorrect4() name=button4 type=radio /> apple Tree"];
var d=0;
//question5
var q5=["5. What is the legislative capital city of Sri Lanka?"];
var q5a1=["<input onclick=incorrect5() name=button5 type=radio /> Colombo"];
var q5a2=["<input onclick=incorrect5() name=button5 type=radio /> Jaffna"];
var q5a3=["<input onclick=incorrect5() name=button5 type=radio /> Kandy"];
var q5a4=["<input onclick=correct5() name=button5 type=radio /> Sri Jayawardanapura Kotte"];
var e=0;
//question6
var q6=["6.What animal is present in the Sri Lankan national flag?"];
var q6a1=["<input onclick=incorrect6() name=button6 type=radio />Rooster"];
var q6a2=["<input onclick=incorrect6() name=button6 type=radio /> Bear"];
var q6a3=["<input onclick=correct6() name=button6 type=radio /> Lion"];
var q6a4=["<input onclick=incorrect6() name=button6 type=radio /> Black panther"];
var f=0;
//question7
var q7=["7.How many provinces is Sri Lanka divided?"];
var q7a1=["<input onclick=correct7() name=button7 type=radio /> 9"];
var q7a2=["<input onclick=incorrect7() name=button7 type=radio /> 10"];
var q7a3=["<input onclick=incorrect7() name=button7 type=radio /> 8"];
var q7a4=["<input onclick=incorrect7() name=button7 type=radio /> 11"];
var g=0;
//question8
var q8=["8.What is the tallest point in Sri Lanka?"];
var q8a1=["<input onclick=incorrect8() name=button8 type=radio /> Adam's Peak"];
var q8a2=["<input onclick=correct8() name=button8 type=radio /> Pidurutalagala"];
var q8a3=["<input onclick=incorrect8() name=button8 type=radio />Sigiriya"];
var q8a4=["<input onclick=incorrect8() name=button8 type=radio /> Galle"];
var h=0;
//question9
var q9=["9.Most famous UNESCO heritage in Sri Lanka"];
var q9a1=["<input onclick=incorrect9() name=button9 type=radio /> Pasikuda"];
var q9a2=["<input onclick=incorrect9() name=button9 type=radio /> Dambulla Temple"];
var q9a3=["<input onclick=incorrect9() name=button9 type=radio /> Galle Fort"];
var q9a4=["<input onclick=correct9() name=button9 type=radio /> Sigiriya"];
var i=0;
//question10
var q10=["10.How was Sri Lanka formerly known?"];
var q10a1=["<input onclick=correct10() name=button10 type=radio /> Ceylon"];
var q10a2=["<input onclick=incorrect10() name=button10 type=radio /> Island of Dragons"];
var q10a3=["<input onclick=incorrect10() name=button10 type=radio /> Burma"];
var q10a4=["<input onclick=incorrect10() name=button10 type=radio /> Maldives"];
var j=0;
//rules
let result;
var count=0;
var rul1=["You will have 60 seconds to complete the quiz."];
var rul2=["The quiz contains 10 MCQs"];
var rul3=["You will get 2 marks per correct answer and -1 for each wrong answer"];
//buttons
const goBtn = document.getElementById('goBtn');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const showBtn = document.getElementById('showBtn');
const repeatBtn = document.getElementById('repeatBtn');
//this loads the buttons
window.onload = function() {
    //i hide the button otherwise they will show up in unwanted places and make the visible when wanted
    startBtn.style.visibility = 'hidden';
    nextBtn.style.visibility = 'hidden';
    showBtn.style.visibility = 'hidden';
    repeatBtn.style.visibility = 'hidden';
    //this in the begining on the website , it loads to the rules sturture when clicked
    goBtn.addEventListener('click', () => {
        goBtn.style.visibility = 'hidden'; 
        rule();
        //hide button
       
        startBtn.style.visibility = 'visible'
    });
    
}
//rules
//the rules are loaded into the tags that are given a specific tag id
function rule(){
    topic.innerHTML="";
    rules1.innerHTML=rul1;
    rules2.innerHTML=rul2;
    rules3.innerHTML=rul3;
    startBtn.addEventListener('click', () => {
        set1();
        var result=0;
        timetext.innerHTML="Timer"
        //hide button
        startBtn.style.visibility = 'hidden'; 
        nextBtn.style.visibility = 'visible';
        
    });
    
    
}

//question1
function set1(){
    //timer is started
time = setInterval(myTimer, 1000);


//answers are assign to ans1,2,3,4 ids and question  is assign to question id
    zero();
    question.innerHTML = q1;
    ans1.innerHTML = q1a1;
    ans2.innerHTML = q1a2;
    ans3.innerHTML = q1a3;
    ans4.innerHTML = q1a4;
    //loads the next set of ans and question when clicked
    nextBtn.addEventListener('click', () => {
        set2();
    });
}
//if correct the count is add 2 or else it is -1 , the a=1 is to check wheather the answer is correct which is later used in the summary
function correct1() {
    count+=2;
    a = 1;
}
function incorrect1() {
    count-=1;
    
}

//question2
function set2(){
    
    zero();
    question.innerHTML = q2;
    ans1.innerHTML = q2a1;
    ans2.innerHTML = q2a2;
    ans3.innerHTML = q2a3;
    ans4.innerHTML = q2a4;
    nextBtn.addEventListener('click', () => {
        set3();
    });
}
function correct2() {
    b = 1;
    count+=2;
}
function incorrect2() {
    count-=1;
}

//question3
function set3(){
    
    zero();
    question.innerHTML = q3;
    ans1.innerHTML = q3a1;
    ans2.innerHTML = q3a2;
    ans3.innerHTML = q3a3;
    ans4.innerHTML = q3a4;
    nextBtn.addEventListener('click', () => {
        set4();
    });
}
function correct3() {
    c = 1;
    count+=2;
}
function incorrect3() {
    count-=1;
}

//question4
function set4(){
    
    zero();
    question.innerHTML = q4;
    ans1.innerHTML = q4a1;
    ans2.innerHTML = q4a2;
    ans3.innerHTML = q4a3;
    ans4.innerHTML = q4a4;
    nextBtn.addEventListener('click', () => {
        set5();
    });
}
function correct4() {
    d = 1;
    count+=2;
}
function incorrect4() {
    count-=1;
}

//question5
function set5(){
    
    zero();
    question.innerHTML = q5;
    ans1.innerHTML = q5a1;
    ans2.innerHTML = q5a2;
    ans3.innerHTML = q5a3;
    ans4.innerHTML = q5a4;
    nextBtn.addEventListener('click', () => {
        set6();
    });
}
function correct5() {
    e = 1;
    count+=2;
}
function incorrect5() {
    count-=1;
}

//question6
function set6(){
    
    zero();
    question.innerHTML = q6;
    ans1.innerHTML = q6a1;
    ans2.innerHTML = q6a2;
    ans3.innerHTML = q6a3;
    ans4.innerHTML = q6a4;
    nextBtn.addEventListener('click', () => {
        set7();
    });
}
function correct6() {
    f = 1;
    count+=2;
}
function incorrect6() {
    count-=1;
}

//question7
function set7(){
    
    zero();
    question.innerHTML = q7;
    ans1.innerHTML = q7a1;
    ans2.innerHTML = q7a2;
    ans3.innerHTML = q7a3;
    ans4.innerHTML = q7a4;
    nextBtn.addEventListener('click', () => {
        set8();
    });
}
function correct7() {
    g = 1;
    count+=2;
}
function incorrect7() {
    count-=1;
}

//question2
function set8(){
    
    zero();
    question.innerHTML = q8;
    ans1.innerHTML = q8a1;
    ans2.innerHTML = q8a2;
    ans3.innerHTML = q8a3;
    ans4.innerHTML = q8a4;
    nextBtn.addEventListener('click', () => {
        set9();
    });
}
function correct8() {
    h = 1;
    count+=2;
}
function incorrect8() {
    count-=1;
}

//question9
function set9(){
    
    zero();
    question.innerHTML = q9;
    ans1.innerHTML = q9a1;
    ans2.innerHTML = q9a2;
    ans3.innerHTML = q9a3;
    ans4.innerHTML = q9a4;
    nextBtn.addEventListener('click', () => {
        set10();
        nextBtn.textContent = 'End Quiz';
    });
}
function correct9() {
    i = 1;
    count+=2;
}
function incorrect9() {
    count-=1;
}

//question10
function set10(){
    
    zero();
    question.innerHTML = q10;
    ans1.innerHTML = q10a1;
    ans2.innerHTML = q10a2;
    ans3.innerHTML = q10a3;
    ans4.innerHTML = q10a4;
    nextBtn.addEventListener('click', () => {
        end();
        showBtn.style.visibility = 'visible';
        repeatBtn.style.visibility = 'hidden';
        nextBtn.style.visibility = 'hidden';
    });
}
function correct10() {
    j = 1;
    count+=2;
}
function incorrect10() {
    count-=1;
}
//the quiz is ended
//end process
//the result are show according to the progress the user have done
function end(){
    nextBtn.style.visibility = 'hidden';
    showBtn.style.visibility = 'visible';
    zero2();
    clearInterval(time);
    message.innerHTML = "End of Quiz";
    if(count<=0){
        count=0;
    }
    if(count<10){
        bad.innerHTML="Try again next Time";
    }else if(count<=15){
        mid.innerHTML="Well Done";
    }else{
        good.innerHTML="Excellent";
    }
    scoreOutput.innerHTML="Your score is "+count+"/20";

    showBtn.addEventListener('click', () => {
        //freezes the time if we finish the quiz
        clearInterval(time);
        show()
        showBtn.style.visibility = 'hidden';
        repeatBtn.style.visibility = 'visible';
    });
    
}
//show result
function show(){
    zero2()
    zero3()
    //if user gets a correct ans the text beome green otherwise red
    if(a==1){
        document.getElementById("A1").style.color ="#ccff33";
        A1.innerHTML="Q1 is correct";
    }else{
        document.getElementById("A1").style.color ="#ffcccc";
        A1.innerHTML="Q1 is wrong";
    }
    
    if(b==1){
        document.getElementById("A2").style.color ="#ccff33";
        A2.innerHTML="Q2 is correct";
    }else{
        document.getElementById("A2").style.color ="#ffcccc";
        A2.innerHTML="Q2 is wrong";
    }
    
    if(c==1){
        document.getElementById("A3").style.color ="#ccff33";
        A3.innerHTML="Q3 is correct";
    }else{
        document.getElementById("A3").style.color ="#ffcccc";
        A3.innerHTML="Q3 is wrong";
    }
    
    if(d==1){
        document.getElementById("A4").style.color ="#ccff33";
        A4.innerHTML="Q4 is correct";
    }else{
        document.getElementById("A4").style.color ="#ffcccc";
        A4.innerHTML="Q4 is wrong";
    }
    
    if(e==1){
        document.getElementById("A5").style.color ="#ccff33";
        A5.innerHTML="Q5 is correct";
    }else{
        document.getElementById("A5").style.color ="#ffcccc";
        A5.innerHTML="Q5 is wrong";
    }
    
    if(f==1){
        document.getElementById("A6").style.color ="#ccff33";
        A6.innerHTML="Q6 is correct";
    }else{
        document.getElementById("A6").style.color ="#ffcccc";
        A6.innerHTML="Q6 is wrong";
    }
    
    if(g==1){
        document.getElementById("A7").style.color ="#ccff33";
        A7.innerHTML="Q7 is correct";
    }else{
        document.getElementById("A7").style.color ="#ffcccc";
        A7.innerHTML="Q7 is wrong";
    }
    
    if(h==1){
        document.getElementById("A8").style.color ="#ccff33";
        A8.innerHTML="Q8 is correct";
    }else{
        document.getElementById("A8").style.color ="#ffcccc";
        A8.innerHTML="Q8 is wrong";
    }
    
    if(i==1){
        document.getElementById("A9").style.color ="#ccff33";
        A9.innerHTML="Q9 is correct";
    }else{
        document.getElementById("A9").style.color ="#ffcccc";
        A9.innerHTML="Q9 is wrong";
    }
    
    if(j==1){
        document.getElementById("A10").style.color ="#ccff33";
        A10.innerHTML="Q10 is correct";
    }else{
        document.getElementById("A10").style.color ="#ffcccc";
        A10.innerHTML="Q10 is wrong";
    }
    //this is calling the repeat funtion
    repeatBtn.addEventListener('click', () => {
        repeat()
        repeatBtn.style.visibility = 'hidden';
    });
}


//repeat funtion, loops back to the top
function repeat(){
    location.reload();
}
//making things blank , to make it hide other they will show up in unwanted areasa
function zero(){
    A1.innerHTML="";
    A2.innerHTML="";
    A3.innerHTML="";
    A4.innerHTML="";
    A5.innerHTML="";
    A6.innerHTML="";
    A7.innerHTML="";
    A8.innerHTML="";
    A9.innerHTML="";
    A10.innerHTML="";

    rules1.innerHTML="";
    rules2.innerHTML="";
    rules3.innerHTML="";
    start.innerHTML="";
    message.innerHTML="";
    scoreOutput.innerHTML="";
    repeat1.innerHTML="";
    topic.innerHTML="";
    
}
function zero2(){
    
    rules1.innerHTML="";
    rules2.innerHTML="";
    rules3.innerHTML="";
    question.innerHTML ="";
    ans1.innerHTML ="";
    ans2.innerHTML ="";
    ans3.innerHTML = "";
    ans4.innerHTML = "";
    clickNext.innerHTML="";
}
function zero3(){
    message.innerHTML = "";
    scoreOutput.innerHTML="";
    repeat1.innerHTML="";
    good.innerHTML="";
    mid.innerHTML="";
    bad.innerHTML="";

}


//timer
var time;
var sec = 60; 
var min = parseInt(sec/60)   
var seconds = parseInt(sec%60) 
function myTimer() {
    if(seconds<10){
      seconds=`0${seconds}`
    }
    if(min<10){
      min=`0${min}`
    }
    document.getElementById('timer').innerHTML = min+":"+seconds;
    sec--;   
    min = parseInt(sec/60)
    seconds = parseInt(sec%60)
    console.log(sec)
    if (sec === -1) {
        //if the timer ends the timer is freezed and then goes to the end
        clearInterval(time); //freeze the time 
        var result=0;
        end();
    }
}

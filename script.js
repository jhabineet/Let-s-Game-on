// here we are making 243 bubbles so this is the code for making these many bubbles
function makeBubble(){
var clutter = "";

for(var i=1;i<=243;i++)
{
    var rn = Math.floor(Math.random()*10)
    clutter += `<div id="bubble">${rn}</div>`;
} 

document.querySelector("#pbtm").innerHTML = clutter; 
}

makeBubble();

//-------------------------------------------------------
// now we will make the timer run from 60 to 0-->

var timer = 30;
function runTimer() {
    var timerint = setInterval(function(){
        if(timer > 0) {
        timer--;
        document.querySelector(".timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over..!!</h1>`;
        }
    }, 1000);
}

runTimer();

// -------------------------------------------------------
// no we will change the hit value-->
var hitrn = 0;

function getNewHit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector(".hitval").textContent = hitrn;
}


getNewHit();

//--------------------------------------------------------
// now we will build the mechanism for increasing the score-->
// Event bubbling  - jispe click karoge wo element par event raise hoga, aur 
// event listener naa milne par event element ke parent par listener dhundhega, agar waha  bhi nhi milne par event parent ke parent ke parent par listener dhundega.  

var score = 0;

function increaseScore(){
    score = score + 10;
    document.querySelector(".scoreval").textContent = score;
}

increaseScore();

// --------------------------------------------------------

document.querySelector("#pbtm").addEventListener("click",function(dets){
    //    alert("chal rha hai");

    var clickedNum = Number(dets.target.textContent)  // yeh jo milega woh ek string milega toh isko hame number meh convert karna hoga toh isliye hame Number add karna hoga to get that particular number. 
    if(clickedNum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
    }
});






















let body = document.querySelector("body");
let level = document.querySelector("h3");
let playground = document.querySelector(".playground");
let box = document.querySelectorAll(".box");
let helpBtn = document.querySelector(".help");

let started = false;
let memArr = [];
let userArr = [];
let levelNum = 1;
let clicks = 0;
let num = 0;
let score = 0;


playground.addEventListener("click", function(event){
    if(started == true){
        if(event.target.className == "box")
    {
        clicks++;
        userFlash(event.target);
        // console.log("Number of clicks =",clicks);
        userArr.push(event.target.id);
        // console.log("userarr is = ",userArr);

        checker();
    }
    // console.dir(event.target);

    }

    }
    
)


function selectBox(){

    //Updating the level
    level.innerText = `Level ${levelNum}`;
    levelNum++;

    //Selecting the random box
    let randVal = Math.floor((Math.random())*4);
    // console.dir(box[randVal]);

    //Some styling
    flashRand(randVal);

    //pushing the random box in array
    memArr.push(box[randVal].id);
    // console.log("Memory arr is = ",memArr);
    // console.log("Memory length is", memArr.length);
    // checker();
};

function flashRand(randVal)
{
    box[randVal].classList.add("memFlash");
    setTimeout(() =>{
        box[randVal].classList.remove("memFlash")
    },250);
}

function userFlash(box)
{
    box.classList.add("userFlash");
    setTimeout(() =>{
        box.classList.remove("userFlash")
    },200);
}


function checker()
{
    if(userArr[clicks-1] != memArr[clicks-1]){
        // console.log("Wrong click");
        level.innerText = `You lost, your score is ${score}\n(Press any key to restart)`;
        started = false;
        memArr = [];
        userArr = [];
        levelNum = 1;
        score = 0;
        num = 0;
        clicks = 0;
        body.classList.add("gameOver");
        setTimeout(function()
        {
            body.classList.remove("gameOver");
        },200)
    }
    else{

        num++
    }

    if((num == memArr.length) && num != 0)
    {
        score += 10;
        // console.log("Hurray!")
        userArr = [];
        clicks = 0;
        num = 0;
        setTimeout(selectBox, 500);
    }

}

function reload(){
    window.location.reload(true)
}

body.addEventListener("keydown", function(){
    if(started == false){
        selectBox();
        started = true;
    }
});

helpBtn.addEventListener("click", function(){
    let iniText = level.innerText;
    level.innerText = `Memory array is ${memArr}`;
    setTimeout(function(){
        level.innerText = iniText;
    },2000)
})

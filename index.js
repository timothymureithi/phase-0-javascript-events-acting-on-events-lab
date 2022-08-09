// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerRight(){
    var moveRight = dodger.style.left.replace('px',"");
    let left = parseInt(moveRight,10);

    if (left > 0 ){
        dodger.style.left = `${left + 1}px`
    }
}

function moveDodgerLeft(){
    var moveLeft = dodger.style.left.replace('px',"");
    let left = parseInt(moveLeft,10);

    if (left > 0 ){
        dodger.style.left = `${left - 1}px`
    }
}
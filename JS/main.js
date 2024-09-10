'use strict'
var currentWidth = 100
var currentHeight = 100


function onBallClick(){
    var elBall = document.querySelector('.ball')
    currentWidth += getRandomInt(20, 60)
    currentHeight += getRandomInt(20, 60)
    elBall.style.width = currentWidth + 'px'
    elBall.style.height = currentHeight + 'px'

    if(currentHeight && currentHeight > 400){
        currentWidth = 100
        currentHeight = 100
    }


   

}
'use strict'

var currentWidth1 = 100
var currentHeight1 = 100
var currentWidth2 = 100
var currentHeight2 = 100

function onBallClick(event, maxDiameter) {
    var elBall = event.target

    
    if (elBall.classList.contains('ball') || elBall.classList.contains('ball2')) {
        // Increase size
        currentWidth1 += getRandomInt(20, 60)
        currentHeight1 += getRandomInt(20, 60)

        // Check if size exceeds maxDiameter
        if (currentWidth1 >= maxDiameter || currentHeight1 >= maxDiameter) {
            currentWidth1 = 100
            currentHeight1 = 100
        }

        elBall.style.width = currentWidth1 + 'px'
        elBall.style.height = currentHeight1 + 'px'
        elBall.style.backgroundColor = getRandomColor()
    }
}
function reduceBallSizes() {
    var ball1 = document.querySelector('.ball')
    var ball2 = document.querySelector('.ball2')


    var ball1Styles = getComputedStyle(ball1)
    var ball2Styles = getComputedStyle(ball2)

  
    var width1 = parseFloat(ball1Styles.width)
    var height1 = parseFloat(ball1Styles.height)
    var width2 = parseFloat(ball2Styles.width)
    var height2 = parseFloat(ball2Styles.height)

   
    var reduceAmount1 = getRandomInt(20, 60)
    var reduceAmount2 = getRandomInt(20, 60)

    
    width1 = Math.max(100, width1 - reduceAmount1)
    height1 = Math.max(100, height1 - reduceAmount1)
    width2 = Math.max(100, width2 - reduceAmount2)
    height2 = Math.max(100, height2 - reduceAmount2)

    
    ball1.style.width = width1 + 'px'
    ball1.style.height = height1 + 'px'
    ball2.style.width = width2 + 'px'
    ball2.style.height = height2 + 'px'
}

function swapBallProperties() {
    var ball1 = document.querySelector('.ball')
    var ball2 = document.querySelector('.ball2')

    // Swap sizes
    var tempWidth = ball1.style.width
    var tempHeight = ball1.style.height
    ball1.style.width = ball2.style.width
    ball1.style.height = ball2.style.height
    ball2.style.width = tempWidth
    ball2.style.height = tempHeight

    // Swap colors
    var tempColor = ball1.style.backgroundColor
    ball1.style.backgroundColor = ball2.style.backgroundColor
    ball2.style.backgroundColor = tempColor
}

function onThirdBallClick() {
    swapBallProperties()
}


function onFourthBallClick(){
    reduceBallSizes()
}
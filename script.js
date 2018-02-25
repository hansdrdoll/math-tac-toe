// math tac toe
console.log("script connected")
// each user takes turns placing a number

// the first player to make a row that equals 15 wins

//

// list of available even numbers on right side
// available odd numbers on left side

// on p1 turn, only select from left side
// on p2 turn, only select from right side

// when number is selected, make board active
// whichever box user clicks, takes the value of the number and adds to the array


// define arrays of win conditions
// push the value of the placed number into the matching variable
// check if array.length = 3
// check all variables if they equal 15, user wins
// else next turn

var odd = [1,3,5,7,9]

var even = [2,4,6,8]


// win conditions

let win1 = []; win2 = []; win3 = []; win4 = []; win5 = []; win6 = []; win7 = []; win8 = [];


// options

// win1.push(8)
win1.push(6)

// win7.push(2)
// win7.push(8)

// console.log(win8)

function checkForWin () {

  for (i = 1; i < 9; i++) {
    var currentArr = eval('win'+i)
    console.log("checking array",currentArr)
    var winningNumbers = currentArr.reduce((a, b) => a + b, 0)
    console.log(winningNumbers)
    if (winningNumbers === 15) {
      console.log("you won")
      break;
    } else if (i === 8) {
      console.log("next turn")
    }
  }
}


// user selects a number, then selects a box
// place the number selected into the box and array

// make the numbers live

function oddTurn () {

var $num1 = $('#num1'); $num3 = $('#num3'); $num5 = $('#num5'); $num7 = $('#num7'); $num9 = $('#num9');

$num1.click(function() {
  $num1.addClass('usedToken')
  placeToken(1)
})
$num3.click(function() {
  $num3.addClass('usedToken')
  placeToken(3)
})
$num5.click(function() {
  $num5.addClass('usedToken')
    placeToken(5)
})
$num7.click(function() {
  $num7.addClass('usedToken')
    placeToken(7)
})
$num9.click(function() {
  $num9.addClass('usedToken')
    placeToken(9)
})



}



oddTurn();


// game board
let $boxa = $('#a'); $boxb = $('#b'); $boxc = $('#c'); $boxd = $('#d'); $boxe = $('#e'); $boxf = $('#f'); $boxg = $('#g'); $boxh = $('#h'); $boxi = $('#i');


function placeToken (num) {
  var tokenHtml = '<h2>' + num + '</h2>'
  var tokenValue = num

  $boxa.click(function() {
    $boxa.html(tokenHtml)
    win1.push(tokenValue)
    win4.push(tokenValue)
    win7.push(tokenValue)
    checkForWin()
  })
  $boxb.click(function() {
    $boxb.html(tokenHtml)
    win2.push(tokenValue)
    win4.push(tokenValue)
    checkForWin()
  })
  $boxc.click(function() {
    $boxc.html(tokenHtml)
    win3.push(tokenValue)
    win4.push(tokenValue)
    win8.push(tokenValue)
    checkForWin()
  })
  $boxd.click(function() {
    $boxd.html(tokenHtml)
    win1.push(tokenValue)
    win5.push(tokenValue)
    checkForWin()
  })

}


// make the boxes live



// checkForWin()

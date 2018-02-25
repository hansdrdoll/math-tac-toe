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

// global vars

// win conditions
var win1 = []; win2 = []; win3 = []; win4 = []; win5 = []; win6 = []; win7 = []; win8 = [];

// number use states
var num1Used = false; num2Used = false; num3Used = false; num4Used = false; num5Used = false; num6Used = false; num7Used = false; num8Used = false; num9Used = false;

// box use states
var boxAUsed = false; boxBUsed = false; boxCUsed = false; boxDUsed = false; boxEUsed = false; boxFUsed = false; boxGUsed = false; boxHUsed = false; boxIUsed = false;
var boardActive = false;

// test pushes

// win8.push(8)
// win8.push(6)
// win7.push(6)
// win7.push(8)

// console.log(win8)

// odd's turn = 1, even's turn = 2
var nextTurn = 1;

function checkForWin () {

    // $('.token').off()
    boardActive = false

  for (i = 1; i < 9; i++) {

    var currentArr = eval('win'+i)
    // console.log("checking array",currentArr)
    var winningNumbers = currentArr.reduce((a, b) => a + b, 0)
    // console.log(winningNumbers)
    if (winningNumbers === 15) {
      console.log("you won")
      break;
    } else if (i === 8 && nextTurn === 2) {
      console.log("even's turn is next")
    } else if (i === 8 && nextTurn === 1) {
      console.log("odd's turn is next")
    }
  }
}


// user selects a number, then selects a box
// place the number selected into the box and array

// make the numbers live

function oddTurn () {

if (nextTurn === 1) {
var $num1 = $('#num1'); $num3 = $('#num3'); $num5 = $('#num5'); $num7 = $('#num7'); $num9 = $('#num9');

if (!num1Used) {
  $num1.click(function() {
    $num1.addClass('usedToken')
    boardActive = true
    placeToken(1)
    nextTurn = 2
    num1Used = true
    $num1.off()
    console.log('on',num1Used)
  })}

if (!num3Used){
  $num3.click(function() {
    $num3.addClass('usedToken')
    placeToken(3)
    nextTurn = 2
    num3Used = true;
    $num3.off()
  })}

if (!num5Used) {
  $num5.click(function() {
    $num5.addClass('usedToken')
    placeToken(5)
    nextTurn = 2
    num5Used = true;
    $num5.off()
  })}

if (!num7Used) {
  $num7.click(function() {
    $num7.addClass('usedToken')
    placeToken(7)
    nextTurn = 2
    num7Used = true;
    $num7.off()
  })}

if (!num9Used) {
  $num9.click(function() {
    $num9.addClass('usedToken')
    placeToken(9)
    nextTurn = 2
    num9Used = true;
    $num9.off()
  })}
}}
oddTurn();


// game board
let $boxA = $('#a'); $boxB = $('#b'); $boxC = $('#c'); $boxD = $('#d'); $boxE = $('#e'); $boxF = $('#f'); $boxG = $('#g'); $boxH = $('#h'); $boxI = $('#i');


function placeToken (num) {

if (boardActive) {

  var tokenHtml = '<h2>' + num + '</h2>'
  var tokenValue = num


  if(!boxAUsed) {
    $boxA.click(function() {
    console.log('Box A clicked')
    $boxA.html(tokenHtml)
    win1.push(tokenValue)
    win4.push(tokenValue)
    win7.push(tokenValue)
    boxAUsed = true
    $boxA.off()
    checkForWin()
  })}

  if (!boxBUsed) {
  $boxB.click(function() {
    console.log('Box B clicked')
    $boxB.html(tokenHtml)
    win2.push(tokenValue)
    win4.push(tokenValue)
    boxBUsed = true;
    checkForWin()
  })}

  if (!boxCUsed) {
  $boxC.click(function() {
    $boxC.html(tokenHtml)
    win3.push(tokenValue)
    win4.push(tokenValue)
    win8.push(tokenValue)
    boxCused = true;
    checkForWin()
  })}

  if (!boxDUsed) {
  $boxD.click(function() {
    $boxD.html(tokenHtml)
    win1.push(tokenValue)
    win5.push(tokenValue)
    boxDused = true;
    checkForWin()
  })}

  if (!boxEUsed) {
  $boxE.click(function() {
    $boxE.html(tokenHtml)
    win2.push(tokenValue)
    win5.push(tokenValue)
    win7.push(tokenValue)
    win8.push(tokenValue)
    boxEused = true;
    checkForWin()
  })}

  if (!boxFUsed) {
  $boxF.click(function() {
    $boxF.html(tokenHtml)
    win3.push(tokenValue)
    win5.push(tokenValue)
    boxFused = true;
    checkForWin()
  })}

  if (!boxGUsed) {
  $boxG.click(function() {
    $boxG.html(tokenHtml)
    win1.push(tokenValue)
    win6.push(tokenValue)
    win8.push(tokenValue)
    boxGused = true;
    checkForWin()
  })}

  if (!boxHUsed) {
  $boxH.click(function() {
    $boxH.html(tokenHtml)
    win2.push(tokenValue)
    win6.push(tokenValue)
    boxHused = true;
    checkForWin()
  })}

  if (!boxIUsed) {
  $boxI.click(function() {
    $boxI.html(tokenHtml)
    win3.push(tokenValue)
    win6.push(tokenValue)
    win7.push(tokenValue)
    boxIused = true;
    checkForWin()
  })}

}}


// make the boxes live



// checkForWin()

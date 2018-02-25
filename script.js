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
// make the tokens accessable
var $num1 = $('#num1'); $num2 = $('#num2'); $num3 = $('#num3'); $num4 = $('#num4'); $num5 = $('#num5'); $num6 = $('#num6'); $num7 = $('#num7'); $num8 = $('#num8'); $num9 = $('#num9');

// make the game board accessable
var $boxA = $('#a'); $boxB = $('#b'); $boxC = $('#c'); $boxD = $('#d'); $boxE = $('#e'); $boxF = $('#f'); $boxG = $('#g'); $boxH = $('#h'); $boxI = $('#i');

// win conditions
var win1 = []; win2 = []; win3 = []; win4 = []; win5 = []; win6 = []; win7 = []; win8 = [];

// number use states
// this should just be an object
var num1Used = false; num2Used = false; num3Used = false; num4Used = false; num5Used = false; num6Used = false; num7Used = false; num8Used = false; num9Used = false;

// box use states
// this should also be an object
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

    $('.token').off()
    $('.box').off()
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
      evenTurn()
      console.log("even's turn is next")
    } else if (i === 8 && nextTurn === 1) {
      oddTurn()
      console.log("odd's turn is next")
    }
  }
}


// user selects a number, then selects a box
// place the number selected into the box and array

// make the numbers live

function oddTurn () {

if (nextTurn === 1) {

if (!num1Used) {
  $num1.click(function() {
    $num1.addClass('usedToken')
    boardActive = true
    placeToken(1)
    nextTurn = 2
    num1Used = true
    $num1.off()
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

function evenTurn () {

if (nextTurn === 2) {

if (!num2Used) {
  $num2.click(function() {
    $num2.addClass('usedToken')
    boardActive = true
    placeToken(2)
    nextTurn = 1
    num3Used = true
    $num2.off()
  })}

if (!num4Used){
  $num4.click(function() {
    $num4.addClass('usedToken')
    placeToken(4)
    nextTurn = 1
    num4Used = true;
    $num4.off()
  })}

if (!num6Used) {
  $num6.click(function() {
    $num6.addClass('usedToken')
    placeToken(6)
    nextTurn = 1
    num6Used = true;
    $num6.off()
  })}

if (!num8Used) {
  $num8.click(function() {
    $num8.addClass('usedToken')
    placeToken(8)
    nextTurn = 1
    num8Used = true;
    $num8.off()
  })}

}}


// game board


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
    $boxB.off()
    checkForWin()
  })}

  if (!boxCUsed) {
  $boxC.click(function() {
    $boxC.html(tokenHtml)
    win3.push(tokenValue)
    win4.push(tokenValue)
    win8.push(tokenValue)
    boxCused = true;
    $boxC.off()
    checkForWin()
  })}

  if (!boxDUsed) {
  $boxD.click(function() {
    $boxD.html(tokenHtml)
    win1.push(tokenValue)
    win5.push(tokenValue)
    boxDused = true;
    $boxD.off()
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
    $boxE.off()
    checkForWin()
  })}

  if (!boxFUsed) {
  $boxF.click(function() {
    $boxF.html(tokenHtml)
    win3.push(tokenValue)
    win5.push(tokenValue)
    boxFused = true;
    $boxF.off()
    checkForWin()
  })}

  if (!boxGUsed) {
  $boxG.click(function() {
    $boxG.html(tokenHtml)
    win1.push(tokenValue)
    win6.push(tokenValue)
    win8.push(tokenValue)
    boxGused = true;
    $boxG.off()
    checkForWin()
  })}

  if (!boxHUsed) {
  $boxH.click(function() {
    $boxH.html(tokenHtml)
    win2.push(tokenValue)
    win6.push(tokenValue)
    boxHused = true;
    $boxH.off()
    checkForWin()
  })}

  if (!boxIUsed) {
  $boxI.click(function() {
    $boxI.html(tokenHtml)
    win3.push(tokenValue)
    win6.push(tokenValue)
    win7.push(tokenValue)
    boxIused = true;
    $boxI.off()
    checkForWin()
  })}

}}


// make the boxes live



// checkForWin()

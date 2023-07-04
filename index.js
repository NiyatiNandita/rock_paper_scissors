var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
var count1 = 0;
var count2 = 0;
var winner = document.getElementById("result");

for (var i = 0; i < 3; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var player1 = this.innerHTML;
    console.log(player1);
    gameStart(player1);
  });
}
var k;
function gameStart(k) {
  var player1selected;
  if (k === "Rock") {
    player1selected = 0;
  } else if (k === "Paper") {
    player1selected = 1;
  } else {
    player1selected = 2;
  }
  var player2 = Math.floor(Math.random() * 3) + 1;
  var player2selected;
  if (player2 === 1) {
    player2selected = 3;
  } else if (player2 === 2) {
    player2selected = 4;
  } else {
    player2selected = 5;
  }
  highlight(player2selected);
  highlight(player1selected);
  checkWinner(player1selected, player2selected);
}
// function computerGame(player1) {
//   var player2 = Math.floor(Math.random() * 3) + 1;

//   var player2selected;
//   if (player2 === 1) {
//     player2selected = 3;
//   } else if (player2 === 2) {
//     player2selected = 4;
//   } else {
//     player2selected = 5;
//   }
//   highlight(player2selected);
//   //   console.log(player2);
// }
function highlight(num) {
  document.querySelectorAll("img")[num].classList.add("pressed");
  setTimeout(function () {
    document.querySelectorAll("img")[num].classList.remove("pressed");
  }, 1500);
}
// function checkWinner(player1, player2) {
//   if (player1 > player2) {
//     count1++;
//     count1.innerHTML = count1;
//   }
// }
var a;
var b;

function checkWinner(a, b) {
  if (a === 0 && b === 4) {
    count2 = count2 + 1;
    score2.innerHTML = "Score: " + count2;
    winner.innerHTML = "COMPUTER scored!";
  }
  if (a === 0 && b === 5) {
    count1 = count1 + 1;
    score1.innerHTML = "Score: " + count1;
    winner.innerHTML = "PLAYER scored!";
  }
  if (a === 1 && b === 3) {
    count1 = count1 + 1;
    score1.innerHTML = "Score: " + count1;
    winner.innerHTML = "PLAYER scored!";
  }
  if (a === 1 && b === 5) {
    count2 = count2 + 1;

    score2.innerHTML = "Score: " + count2;
    winner.innerHTML = "COMPUTER scored!";
  }
  if (a === 2 && b === 3) {
    count2 = count2 + 1;

    score2.innerHTML = "Score: " + count2;
    winner.innerHTML = "COMPUTER scored!";
  }
  if (a === 2 && b === 4) {
    count1 = count1 + 1;
    score1.innerHTML = "Score: " + count1;
    winner.innerHTML = "PLAYER scored!";
  }
  if ((a === 0 && b === 3) || (a === 1 && b === 4) || (a === 2 && b === 5)) {
    winner.innerHTML = "It is a DRAW!!!";
  }
}

// Back-End Logic

var dieRoll = function() {
  return 1 + Math.floor(Math.random() * 6);
}
function Player(name, totalScore, turn, runningTally) {
  this.name = name;
  this.totalScore = totalScore;
  this.turn = turn;
  this.runningTally = runningTally;
}

Player.prototype.winCheck = function() {
  if (this.totalScore >= 100)  {
    alert("You Win!");
  }
}



// Front End Logic

$(document).ready(function(){
  var player1 = new Player("Player 1", 0, 0, 0);
  var player2 = new Player("Player 2", 0, 0, 0, false);

  $('#player1roll').click(function() {
    $('#player2roll').hide();
    var roll = dieRoll();
    if (roll === 1) {
      alert("You rolled a 1 pass the mouse")
      player1.runningTally = 0;
      $('#player1Active').html(player1.runningTally);
      $('#player1hold').trigger('click');
    } else {
      player1.runningTally += roll;
      $('#player1Active').html(player1.runningTally);
    }
  }); //End Player 1 Click Event

  $('#player1hold').click(function() {
    player1.totalScore += player1.runningTally; //Prototype
    $('#player1Total').html(player1.totalScore);
    player1.runningTally = 0;
    $('#player1Active').html(player1.runningTally);
    player1.turn += 1;
    $('#player1turn').html(player1.turn);
    $('#player1roll').hide();
    $('#player2roll').show();
    player1.winCheck();

  });


  $('#player2roll').click(function() {
    $('#player1roll').hide();
    var roll = dieRoll();
    if (roll === 1) {
      alert("You rolled a 1 pass the mouse")
      player2.runningTally = 0;
      $('#player2Active').html(player2.runningTally);
      $('#player2hold').trigger('click');
    } else {
      player2.runningTally += roll;
      $('#player2Active').html(player2.runningTally);
    }
  }); //End Player 2 Click Event

  $('#player2hold').click(function() {
    player2.totalScore += player2.runningTally; //Prototype
    $('#player2Total').html(player2.totalScore);
    player2.runningTally = 0;
    $('#player2Active').html(player2.runningTally);
    player2.turn += 1;
    $('#player2turn').html(player2.turn);
    $('#player2roll').hide();
    $('#player1roll').show();
    player2.winCheck();
  });
}); //End Document.Ready Function

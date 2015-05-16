Template.addPlayerForm.events({
  'submit form': function (event) {
    event.preventDefault();
    var playerNameVar = event.target.playerName.value,
        playerScoreVar = event.target.playerScore.value;

    Meteor.call('insertPlayerData', playerNameVar, playerScoreVar)
  }
});

Template.addPlayerForm.events({
  'submit form': function (event) {
    event.preventDefault();
    var playerNameVar = event.target.playerName.value,
        playerScoreVar = event.target.playerScore.value,
        currentUserId = Meteor.userId();

    PlayersList.insert({
      name: playerNameVar,
      score: playerScoreVar,
      createdBy: currentUserId
    });

    event.target.playerName.value = "";
    event.target.playerScore.value = "";
  }
});

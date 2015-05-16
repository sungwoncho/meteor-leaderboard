Meteor.startup(function () {
  Meteor.publish('thePlayers', function () {
    var currentUserId = this.userId;
    return PlayersList.find({createdBy: currentUserId});
  });

  Meteor.methods({
    insertPlayerData: function (playerNameVar, playerScoreVar) {
      var currentUserId = Meteor.userId();
      PlayersList.insert({
        name: playerNameVar,
        score: playerScoreVar,
        createdBy: currentUserId
      });
    },
    removePlayerData: function (selectedPlayer) {
      PlayersList.remove(selectedPlayer)
    }
  })
});

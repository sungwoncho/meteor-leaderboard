Template.leaderboard.helpers({
  player: function () {
    var currentUserId = Meteor.userId();
    return PlayersList.find({createdBy: currentUserId}, {sort: {score: -1, name: 1}});
  },
  playersCount: function () {
    return PlayersList.find({}).count();
  },
  selectedClass: function () {
    var playerId = this._id;
    var selectedPlayer = Session.get('selectedPlayer');
    if (playerId == selectedPlayer) {
      return 'selected';
    }
  },
  showSelectedPlayer: function () {
    var selectedPlayer = Session.get('selectedPlayer');
    return PlayersList.findOne(selectedPlayer);
  }
});

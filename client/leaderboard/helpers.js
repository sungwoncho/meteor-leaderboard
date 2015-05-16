Template.leaderboard.helpers({
  player: function () {
    return PlayersList.find({});
  },
  playersCount: function () {
    return PlayersList.find({}).count();
  },
  selectedClass: function () {
    var playerId = this._id._str;
    var selectedPlayer = Session.get('selectedPlayer');
    if (playerId == selectedPlayer) {
      return 'selected';
    }
  }
});

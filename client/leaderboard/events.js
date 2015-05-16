Template.leaderboard.events({
  'click .player': function () {
    var playerId = this._id
    Session.set('selectedPlayer', playerId);
  },
  'click .increment': function () {
    var selectedPlayer = Session.get('selectedPlayer');
    PlayersList.update(selectedPlayer, {$inc: {score: 5}});
  },
  'click .decrement': function () {
    var selectedPlayer = Session.get('selectedPlayer');
    PlayersList.update(selectedPlayer, {$inc: {score: -5}})
  },
  'click .remove': function () {
    var selectedPlayer = Session.get('selectedPlayer');
    if (confirm('Are you sure?')) {
      PlayersList.remove(selectedPlayer);
    }
  }
});

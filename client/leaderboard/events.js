Template.leaderboard.events({
  'click .player': function () {
    var playerId = this._id
    Session.set('selectedPlayer', playerId);
  },
  'click .increment': function () {
    var selectedPlayer = Session.get('selectedPlayer');
    Meteor.call('modifyPlayerScore', selectedPlayer, 5)
  },
  'click .decrement': function () {
    var selectedPlayer = Session.get('selectedPlayer');
    Meteor.call('modifyPlayerScore', selectedPlayer, -5)
  },
  'click .remove': function () {
    var selectedPlayer = Session.get('selectedPlayer');
    console.log(selectedPlayer);
    if (confirm('Are you sure?')) {
      Meteor.call('removePlayerData', selectedPlayer);
    }
  }
});

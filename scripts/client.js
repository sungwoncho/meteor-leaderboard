if (Meteor.isClient) {
  Template.leaderboard.helpers({
    player: function () {
      return PlayersList.find({});
    },
    playersCount: function () {
      return PlayersList.find({}).count();
    }
  });
}

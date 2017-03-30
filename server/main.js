import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
  Accounts.loginServiceConfiguration.remove({
    service: "facebook"
  });

  Accounts.loginServiceConfiguration.insert({
    service: "facebook",
    appId: '1022565277873552',
    secret: '83d7c5393b7b9387d04c309cac233b9a'
  });
  Accounts.loginServiceConfiguration.remove({
    service: "twitter"
  });

  Accounts.loginServiceConfiguration.insert({
    service: "twitter",
    consumerKey: '3fl1Ci1ezfUKdQHFtegkoxcFd',
    secret: 'jMnaI99wDwHAqo4cZM6DtJVtEqAhYoTDeYdac21wPJzcpRusfs'
  });
});

Meteor.publish('messages', function(limit) {
  check(limit, Match.Optional(Number));
  if (this.userId) {
    return Messages.find({
      chatRoomId: undefined
    }, {
      limit: limit || 5,
      sort: { timestamp: -1 }
    });
  }
  this.ready();
});

Meteor.publish('chatRoomMessages', function(chatRoomId) {
  check(chatRoomId, String);
  return Messages.find({
    chatRoomId: chatRoomId
  }, {
    limit: 20
  });
});

Meteor.publish('userMessages', function(username) {
  check(username, String);
  return Messages.find({
    username: username
  });
});
Meteor.publish('chatRooms', function() {
  return ChatRooms.find({},{sort : {timestamp: -1 }});
});
Meteor.publish('chatRoom', function(id) {
  check(id, String);
  return ChatRooms.find({userId : id});
});

// this is equivalent to the standard node require:


Messages = new Mongo.Collection('messages');
Chatrooms = new Mongo.Collection('Chatrooms');

Chatrooms.schema = new SimpleSchema({
  name: {type: String},
  userId: {type: String}
});
Messages.schema = new SimpleSchema({
  message: {type: String},
  time : {type : Date},
  userId: {type: String}
});


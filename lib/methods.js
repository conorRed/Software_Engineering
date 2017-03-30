//import twitter from 'twitter';
Meteor.methods({
'getTrending' : function () {
		 Twit = require('twit');

            Twit = new Twit({
                consumer_key: '3fl1Ci1ezfUKdQHFtegkoxcFd', // API key
                consumer_secret: 'jMnaI99wDwHAqo4cZM6DtJVtEqAhYoTDeYdac21wPJzcpRusfs', // API secret
                access_token: '103602506-1ZbsaaUbdr7sYmXFLKFomRnN2ZtP6UwPi2bubkL8',
                access_token_secret: 'fivUSMVdS8Rcj0lyJmMr2PbONLfe336Vsm6rdPvGNJUKy'
            });

            //  search twitter for all tweets containing the word 'banana' since Nov. 11, 2011
   var params = {id: 23424803};        
Twit.get ('https://api.twitter.com/1.1/trends/place.json',params,function(error,trends,response){
  if(error){
    return console.log(error);
    
  }
  var trending;
  for(var i =0;i<trends[0].trends.length;i++){
  trending += JSON.stringify(trends[0].trends[i].name)+ "\n";
  }
});
},
addUser : function (user) {
	Accounts.createUser(user);
},
 addMessage: function(data) {
    check(data, {
      message: String,
      chatRoomId: Match.Optional(String)
    });
    //Code used for demonstration of latency compensation
//    if (Meteor.isServer)
//      Meteor._sleepForMs(2000);
    
    if (!data.message) {
      throw new Meteor.Error('required-message', 'Write something!');
    }
    if (!Meteor.userId()) {
      throw new Meteor.Error('required-login', 'You must be logged in to add a message');
    }
    console.log('Adding message: ', new Date());
    if (Meteor.isServer) {
      //Uncomment this line to see what will happen
      //throw new Meteor.Error('msg err', 'An error occured!');
    }
    return Messages.insert({
      username: Meteor.user().username,
      text: data.message,
      timestamp: Date.now(),
      chatRoomId: data.chatRoomId
    });
  },
  createChatRoom: function(name) {
    check(name, String);
    if (!name) {
      throw new Meteor.Error('chat-room-err', 'Name of the room cannot be empty');
    }
    if (!Meteor.userId()) {
      throw new Meteor.Error('required-login', 'You must be logged in to create a chat room');
    }
    return ChatRooms.insert({name: name,userId: Meteor.userId(),timestamp: Date.now()});
  }

});


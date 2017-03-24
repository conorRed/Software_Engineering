import twitter from 'twitter';

// this is equivalent to the standard node require:

var twit = require('twitter'),
 twitter1 = new twit({
	consumer_key: 'gvFEh9sqbmG8ZQujNNPBe25YW',
	consumer_secret: 'ceP1ME5m0S9BttKdpPvPRGamltVWQnYeMLDpV3mnWG6vckSQFB',
	access_token_key: '103602506-1ZbsaaUbdr7sYmXFLKFomRnN2ZtP6UwPi2bubkL8',
	access_token_secret: 'fivUSMVdS8Rcj0lyJmMr2PbONLfe336Vsm6rdPvGNJUKy'
});

var params = {id: 23424803};

twitter1.get	('https://api.twitter.com/1.1/trends/place.json',params,function(error,trends,response){
	if(error){
		return console.log(error);
		
	}
	var trending;
	for(var i =0;i<trends[0].trends.length;i++){
	trending += JSON.stringify(trends[0].trends[i].name)+ "\n";
	}
	
		
});

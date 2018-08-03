//----------- GOOGLE ----------------

// var google = require('google')

// google.resultsPerPage = 1
// var nextCounter = 0

// google('simform', function (err, res){
//   if (err) console.error(err)
// 	console.log('----------- GOOGLE ----------------');
//   	console.log('Title = ',res.links[0].title);
//   	console.log('Link = ',res.links[0].link);
//   	console.log('Description = ',res.links[0].description);
// })

// //----------- DUCKDUCKGO ----------------

// ddg = require('ddg');

// ddg.query("lion", function(err, data){
// 	console.log('----------- DUCKDUCKGO ----------------');
// 	console.log('Text: ',data.RelatedTopics[0].Text) // logs a dictionary with all return fields
// 	console.log('FirstURL: ',data.RelatedTopics[0].FirstURL) // logs a dictionary with all return fields

// });

// setTimeout(exit, 1000);

// function exit(){
// 	console.log('------------- EXIT -----------------');
// 	process.exit(-1)
// }

const Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'ldcZqWf66J6zQk4XdDTo8LGxC',
  consumer_secret: 'a4PnXYSDN9X9D1NNnhA6OqJIfR2UN4laEuk1iYryCVQLLYrCc9',
  access_token_key: '588161115-hbDsW0EpoOHv0uXmzoYrzEYMF0PMDvgO9pHPxsDc',
  access_token_secret: 'LLwnmOcbqFkLzCQSM8niCU2kUbVxluZYIA9K9jMSmx77T'
});
 
var params = {screen_name: 'mayurngajjar'};
client.get('users/show', params, function(error, tweets, response) {
  if (!error) {
	// console.log(response);
	console.log('Date: ',tweets.name);
	console.log('Location: ',tweets.location);
	console.log('Description: ',tweets.description);
	// console.log(tweets);
  }
});
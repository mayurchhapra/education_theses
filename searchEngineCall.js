//----------- GOOGLE ----------------

var google = require('google')

google.resultsPerPage = 1
var nextCounter = 0

google('simform', function (err, res){
  if (err) console.error(err)
	console.log('----------- GOOGLE ----------------');
  	console.log('Title = ',res.links[0].title);
  	console.log('Link = ',res.links[0].link);
  	console.log('Description = ',res.links[0].description);
})

//----------- DUCKDUCKGO ----------------

ddg = require('ddg');

ddg.query("lion", function(err, data){
	console.log('----------- DUCKDUCKGO ----------------');
	console.log('Text: ',data.RelatedTopics[0].Text) // logs a dictionary with all return fields
	console.log('FirstURL: ',data.RelatedTopics[0].FirstURL) // logs a dictionary with all return fields

});

setTimeout(exit, 1000);

function exit(){
	console.log('------------- EXIT -----------------');
	process.exit(-1)
}



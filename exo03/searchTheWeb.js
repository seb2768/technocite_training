const http = require('http');
const crawler = require(`${__dirname}/utils/htmlCrawler`);
const url = process.argv[2];

if (!url) {
	console.log("you must include a url")
} else {
	http.get(url, res =>{
		console.log(`Got response status: ${res.statusCode}`);
		let content= '';
		res.on('data',chunk =>{
			content += chunk;
		});
		res.on('end',() =>{
			crawler.saveTagToFile(content,'title')
		})
	}).on('error',e =>{
		console.log("Got error: "+e.message);
	});
}
const fs = require('fs');
const cheerio = require('cheerio');
module.exports.saveTagToFile = function(data,tagToSave){
	let $=cheerio.load(data);
	let value = `${$(tagToSave).text()}\n`;
	fs.appendFile('log.txt',value,(err) =>{
		if (err) throw err;
		console.log('The "data to append" was append to file!');
	});
};
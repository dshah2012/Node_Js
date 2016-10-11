var express = require('express');
var fs = require('fs');
var request = require('request');
var json2csv = require('json2csv');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
    
    url = "http://www.justdial.com/Bangalore/Caterers-For-Veg-Cuisine-%3Cnear%3E-Veerabhadra-Nagar/ct-586379";
    //url = 'http://www.justdial.com/Bangalore/Transporters/ct-1076';

	 request(url, function(error, response, html){

        // First we'll check to make sure no errors occurred when making the request

        if(!error){
            
            var $ = cheerio.load(html);
			var fields = ['Name', 'Number_and_Address'];//, 'Address'];
            var Name, Number_and_Address,real,arti;
            //var json = { Name : "", Number : "", Address :""}: 
			var json = { Name : "", Number_and_Address : ""};
			 $('.compdt').filter(function(){

                var data = $(this);

                
                Name = data.children().text();
				real = Name.replace(/(\r\n|\r|\t|\n)/gm,'');
				arti = real.split("+");
				//Number = data.children().next().text();
				//Address = data.children().text();

           
                json.Name = arti[0];
				json.Number_and_Address= arti[1];
				//json.Address = arti[0];
				json2csv({ data: json, fields: fields }, function(err, csv) {
				if (err) console.log(err);
				fs.appendFile('file.csv', csv, function(err) {
				if (err) throw err;
				console.log('file saved');
				});
				console.log(real);
				console.log("---------------------Done-----------------------------");
				});
				
				var stream = fs.createWriteStream("my_file.txt");
				stream.on('open', function(fd) {
				stream.write(real);	
				stream.end();
				});
			})
		}
		res.send('The file is being written');
	});
})


app.listen('8080')
exports = module.exports = app;

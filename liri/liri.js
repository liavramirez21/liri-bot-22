require("dotenv").config();
let dataKeys = require("./keys.js");
let Spotify = require('node-spotify-api');
let spotify = new Spotify(dataKeys.spotify);
let request = require('request');
var inquirer = require('inquirer');


const command = process.argv[2];
const query = process.argv[3];
console.log(command);
var cmd = command.toLowerCase();


switch(cmd) {
    
    case "spotify-this-song": {
        console.log(query);
        spotify.search({ type: 'artist', query: query }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
            console.log(data);
        });
    }


        break;
    case "concert-this": {
        console.log(query);
        var bandAPI = "https://rest.bandsintown.com/artists/" + query + "app_id=codingbootcamp";
        request(`https://rest.bandsintown.com/artists/`, function(err, res, body) {
            if (err) {
                console.log('Error occurred: ' + err);
                return;
            } else {
                let jsonData = JSON.parse(body);
            }

        })}
    

        break;
        
    case "movie-this": {
        console.log(query);
        var movieAPI = "http://www.omdbapi.com/" + query +"?apikey=trilogy&t=";
    request("http://www.omdbapi.com", function(err, res, body) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        } else {
            let jsonData = JSON.parse(body);

        }})}
        break;
    case "do-what-it-says": {
           fs.readFile("random.txt", "utf8", function(error, data) {
            getMeSpotify(data);
        });
    }
    
    
}
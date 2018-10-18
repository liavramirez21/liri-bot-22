require("dotenv").config();

/* HE SAID THAT OBJECTS ARE NOT BEING ABLE TO GO FROM OBJECT-STRING*/

let dataKeys = require("./keys.js");
let Spotify = require('node-spotify-api');
let spotify = new Spotify(dataKeys.spotify);
let request = require('request');
var inquirer = require('inquirer');


const command = process.argv[2];
const query = process.argv[3];
console.log(command);
var cmd = command.toLowerCase();
var err;
switch(cmd) {
    
    case "spotify-this-song": {
        console.log(query);
        spotify.search({ type: 'artist', query: query }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
            for (var i=0;i < data.artists.items.length; i++) {
                console.log(data.artists.items[i])
            }
               
        });
    }
    break;
    case "concert-this": {
        console.log(query);
        var bandAPI = "https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp"
        request(bandAPI, function(err, res, body) {
            if (err) {
                console.log('Error occurred: ' + err);
                return;
            } else {
                /*let jsonData = JSON.parse(body);*/
            for (var i=0; i < body.length; i++) {
                 
                console.log(body)

            }
               
        }

        })}
        /*HOW TO MAKE THE API SPIT INFORMATION OUT AND NOT PRINT WHAT IS PUT IN*/
    


     break;
     case "movie-this": {
        console.log(query);
        var movieAPI = "https://www.omdbapi.com/?t=" + query + "&y=&plot=short&apikey=trilogy"
        request(movieAPI, function(error, response, body) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        } else {
            for (var i=0; i < body.length; i++) {
                 
                console.log(body)
            }
        }})}

        break;
        case "do-what-it-says": {
           fs.readFile("random.txt", "utf8", function(error, data) {
            getMeSpotify(data);
            getMeMovie(body);
            getMeOmdb(body);
            getMebBand(body);
        });
    }
    
    
}
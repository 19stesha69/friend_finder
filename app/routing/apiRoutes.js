//require access to the friends.js file
var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        //bestFriend is used to track the difference between the answers
        var bestFriend = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        console.log("We hit it!");
        var userData = req.body;     //req.body comes from the user's input
        var userScores = userData.scores;  //user scores are assigned to its own variable
        console.log('userData',userData);
        //totalDifference is used to calculate the difference between the user's scores 
        //and the scores of the friends in the databas
        var totalDifference = 0;

        //Loop for going through all of the friends in the database.
        for(var i = 0; i < friends.length; i++) {
            totalDifference = 0;

            //console.log("userScores", userData);
            //loop through the scores of each friend
            for (var j = 0; j < friends[i].scores[j]; j++) {
                //calculate the difference between scores and add them to the total Difference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));                                                                                                                                                                                                        8

                //If sum of differences is less than the differences of the current "best match"
                if(totalDifference <= bestFriend.friendDifference) {
                    //set the bestFriend to be the new friend
                    bestFriend.name = friends[i].name;
                    bestFriend.photo = friends[i].photo;
                    bestFriend.friendDifference = totalDifference;
                } 
            }
        }
        //Save user's data to the database
        friends.push(userData);

        //Return json with user's bestFriend
        res.json(bestFriend);
    });
}

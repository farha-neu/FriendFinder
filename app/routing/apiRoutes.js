var friends = require("./../data/friends");
var tvFriends = require("./../data/tv-friends");

module.exports = (function(app) {
    
    app.get('/api/friends', function (req, res) {
         res.json(friends);
    });

    app.get('/api/tv-friends', function (req, res) {
        res.json(tvFriends);
   });

    app.post("/api/friends", function(req, res) {  
         var newFriend = req.body;
         var currentUser = newFriend.scores;
        
         var friend = findMatch(friends, currentUser);
         var tvFriend = findMatch(tvFriends, currentUser);
         var friendArray = [tvFriend, friend];
         friends.push(newFriend);
         res.json(friendArray);
      });
    
});


function findMatch(frnd, currentUser){
    var minDiff = 100;
    var minIndex = -1;
    for(var i = 0; i<frnd.length; i++){
        var totalDiff = 0;
        var otherUser = frnd[i].scores;
        for(var j = 0; j<otherUser.length; j++){
            totalDiff+=Math.abs(otherUser[j]-currentUser[j]);
        }
        if(totalDiff < minDiff){
            minDiff = totalDiff;
            minIndex = i;
        }
    }
  return frnd[minIndex];
} 



// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
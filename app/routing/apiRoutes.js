var friends = require("./../data/friends");

module.exports = (function(app) {
    
    app.get('/api/friends', function (req, res) {
         res.json(friends);
    });

    app.post("/api/friends", function(req, res) {  
         var newFriend = req.body;
         var currentUser = newFriend.scores;
         var minDiff = 100;
         var minIndex = -1;
         console.log("me:"+currentUser);
          for(var i = 0; i<friends.length; i++){
            var totalDiff = 0;
              var otherUser = friends[i].scores;
              console.log("other:"+otherUser);
              for(var j = 0; j<otherUser.length; j++){
                  totalDiff+=Math.abs(otherUser[j]-currentUser[j]);
              }
              console.log(totalDiff);
              if(totalDiff < minDiff){
                  minDiff = totalDiff;
                  minIndex = i;
              }
          } 


          console.log(minDiff, minIndex);
          friends.push(req.body);
          res.json(friends[minIndex]);
      });
    
});


// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
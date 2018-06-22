# F.R.I.E.N.D FINDER
Are you a FRIENDS TV Show fan? Answer a few basic questions. Then find the FRIENDS character and FRIENDS fan with the greatest compatability!
This is a compatibility-based application that will take in results from users' surveys, then compare their answers with those from FRIENDS character and other users who fill up the form. The app will then display the name and picture of the user with the best overall match with a FRIENDS character and FRIENDS fan. 

## Deployment
Check out live website:
https://find-your-friend-now.herokuapp.com/

## Algorithm:
The user's most compatible FRIENDS character and fan have been determined using the following logic:
  * Each user's results were converted into a simple array of numbers ((ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
  * With that done, the difference between current user's scores against those from FRIENDS character and other fans(or users) were compared, question by question. Differences were added up to calculate the `totalDifference`.
     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 5, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 1 =** **_4_** 
   * The closest match will be the character/fan with the least amount of difference.

## Built With
   * node.js
      * Framework : <a href="https://www.npmjs.com/package/express">Express</a>
  

## Survey Question Credit:
<a href="https://www.buzzfeed.com/andrewziegler/joebe-choss-phoss-joenica-randler?utm_term=.ds4E1k1l#.nuA7pkpy">Buzzfeed Personality Test</a><br>
<a href="http://www.playbuzz.com/margottouitou10/which-friends-character-personality-disorder-do-you-have">Playbuzz</a>


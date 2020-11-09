# friend_finder
Friend Finder is an application, utilizing Node.js and Express.js, that pairs a set of user input with stored data that shares the closest compatibility.

Find it here => [Deployed on heroku.com](https://calm-dusk-90430.herokuapp.com/)

# Npm packages in use
* Express - Server framework
* Body-Parser - Body parsing middleware
* Path - Built-in Node module. Allows for access to file and directory paths

# How to use

1. Click the blue "Go to Survey" button.

![Friend Finder Home Page](/images/FriendFinderHomePage.png)

2. Fill in "name" with your name and "link to photo image" with a url to an image. Both are required.   
   An alert box will appear if one or both are omitted.  
   When all of the questions have been answered, click "Submit".
   
![Friend Finder Questions](/images/FriendFinderQuestions1.png) ![Friend Finder More Questions](/images/FriendFinderQuestions2.png)

3. Upon clicking "Submit", a modal will open, displaying an image and name of a friend match from data stored in the app's file of friend objects.

![Friend Finder Match](/images/FriendFinderMatch.png)

# How does the app know who to match the user with?

(The following logic takes place inside the apiRoutes.js file)

This process begins with an object called "bestFriend", containing empty fields for "name", "image", and a "friendDifference" value of 1000.   
I will explain that number in a moment

The way the closest match is found is done like this:
1. The program loops through the list of "friends" contained in the "friends" JSON file.
2. For each "friend", it then loops through each of the "friend"'s answers, comparing them to the user's answers by subtracting the user's number from the friend's numbers.
3. These differences are added up and become the value of the variable "totalDifference".
4. "totalDifference" is then compared to the value of "friendDifference". If "totalDifference" is the smaller integer of the two, then the "friend" that number applies to now        beomes the properties of the "bestFriend" object. 
5. This repeats for each "friend" in the "apiRoutes.js" file until complete.
6. The "friend" who had the overall lowest "totalDifference" value is the one who will be presented to the user as their closest match.

Wait... what about that "friendDifference" of 1000 at the beginning of this? What was that all about?

The number 1000 is chosen because it is so ridiculously high a number, there's no way any of the matches could result in a "totalDifference" that was higher than that starting number. In the case of this particular program, the maximum "totalDifference" possible is 40, so even a starting "friendDifference" of 50 would be enough, but 1000 is so high, it eliminates any question of an error without worrying about a max-difference. 





![Logo](https://github.com/emilohlund-git/musicshare/blob/master/Musicshare.JPG)
Musicshare is a platform where you can add your favourite songs to a library, where other users can see your contributions and up or downvote the songs. The songs in the library gets sorted by the amount of likes they have. 

## UX ##
This website is for anyone who is interested in music, wants to find out about new songs. Or see what people think about their favourite songs. 
I wanted to go with simplicity with the design, having the main page being an inviting hero image with a CTA button leading the user to a page that describes how to navigate around, and how to use the website. 

## Features ##
Pagination component from Materialize changing the text elements on the tutorial page using Javascript.
A form component from Materialize with required fields that allows you to submit the form to a MongoDB database.
A table which loads the data from MongoDB, with two buttons to like or dislike the songs in the table. Aswell as a link to Youtube or Spotify, whichever was provided by the user when uploading the respective song.
Also an input box where you can filter the table by artists.

### Features left to implement ###
I do want to implement a comment section for each song, so you can include your thoughts in a clearer way than liking or disliking the songs.
And along with that user profiles, so that you can log in and manage your uploaded songs and clearly see on other profiles who uploaded what.
And with that include a points system, the more likes your songs have, the more points you as a user have.
Something that gives the page more interactivity than it currently has.

## Technologies used ##
- Flask
- PyMongo
- Python
- HTML
- CSS

I'm using [Materialize](https://materializecss.com/) as the grid system for my website, aswell as it's components. It's a clean and nice looking base to go off I think.
Connecting to the database using PyMongo to MongoDB.
Otherwise it's standard CSS & Javascript

## Testing ##
I've used [Google Chrome's DevTools](https://developers.google.com/web/tools/chrome-devtools) to see if there's any errors in my JavaScript code as I've been adding features. Aswell as manually going through the elements I'm targetting to see if it's working as intended. 

There was a rendering issue with the table on the library page, which you can reach using this button in the navigation bar:
![Librarybutton](https://github.com/emilohlund-git/musicshare/blob/master/Librarybutton.JPG)
Basically the lines seperating the table-cells would duplicate and stick on the screen whenever clicking on a cell in the table to open it. This problem occured when I was using the popout collapsibles by Materialize, I had to change it to the normal extendable collapsibles in order for the issue to be removed.

## Credits ##
### Media ###
I'm using the following images taken from Pexels.com [https://www.pexels.com/].
- From Tom Swinnen on Pexels.com (https://www.pexels.com/photo/white-earphones-beside-orange-music-player-3194469/)
- From Soonios Pro on Pexels.com (https://www.pexels.com/photo/black-microphone-3531990/)
The third blank image I'm using on the 'add song' and 'library' page off the website is basically the second picture with the microphone cut off only using the orange gradient colours.

Rest is icons from Materialize which can all be found here (https://materializecss.com/icons.html)
Hosting images on the website at [Imgbb.com](https://sv.imgbb.com/)

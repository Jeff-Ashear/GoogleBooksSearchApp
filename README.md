# GoogleBooksSearchApp
App demonstrating use of React components and lifecycle, Node, Express,  MongoDB, and the Google Books API.

Portfolio:

    https://jeff-ashear.github.io/UpdatedPortfolio/


google books api key:
AIzaSyCPWHozLBx7coB-2XjvA13alHzllLA_b5c

relevant links:

Heroku deployment:

    https://googlebooksapiapp.herokuapp.com/


GitHub Links: 

    https://github.com/Jeff-Ashear/GoogleBooksSearchApp.git
    https://jeff-ashear.github.io/GoogleBooksSearchApp/


1. The purpose of this app is to allow the user to seach Google Books and save to and recall from the books the wish from a db.

2. This app is organized in the React varient of the MCV model.  The Books.js model simply provides the skelton for the db queries.  The search.component.js handles api calls for a specific searched term and then sends the results to the front end, as well as handling saves to the db.  The saved.component.js queries the db and then renders those results.  App.js holds the elments to be styled and dynamically populated by the back end.

3.  Instructions for using this app:  Load the page and type the name of a book you wish to view in the search field.  You will see the title, authors, description, and a thumbnail of the book.  Clicking the "save" button beneath a book's card will save it in your database.  Clicking the "view" button will take you Google Books' entry for that particular book in a new tab where you can learn more about or purchase it.  To view your saved books, click "Saved" in the navbar.  Clicking "Seach" will take you back to where you started and allow you to search again.

4. There is no video of this app in use yet.

5. Heroku deployment:

    https://googlebooksapiapp.herokuapp.com/


GitHub Links: 

    https://github.com/Jeff-Ashear/GoogleBooksSearchApp.git
    https://jeff-ashear.github.io/GoogleBooksSearchApp/




6. Technologies used in this app:  
    React provides component based functionality and light-weight rendering.
    Mongoose connects the app models to MongoDB, and is hosted on MLab.
    The google books api powers the search function and pipes the results back to the app
    Bootstrap is used for styling the app.
    Heroku was used to deploy the app.

The app was developed by Jeff Ashear.
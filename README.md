![GitHub](https://img.shields.io/badge/license-mit-blue)
# BookSearchEngine

## Deployed link (Heroku): 
https://fast-mountain-02387-77bab3c3ff16.herokuapp.com/

## Table of Contents
 - [Project Description](#project-description)
 - [Features](#features)
 - [Technologies Used](#technologies-used)
 - [Usage](#usage) 

## Project Description

 A fully functioning Google Books API search engine built with GraphQL API and Apollo Server. The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API.


## Features
- **Search for Books**
   - Upon loading the search engine, users are presented with a menu offering two options: "Search for Books" and "Login/Signup."
   - Users can enter a search term in the input field and click the submit button to search for books.

- **Search Results**
   - When not logged in, users can view search results, including book titles, authors, descriptions, images, and links to the corresponding books on the Google Books site.

- **Login/Signup**
   - Clicking on the "Login/Signup" menu option opens a modal with options to log in or sign up.

- **Signup**
   - In the signup mode, users can enter a username, email address, and password.
   - Clicking the signup button creates a user account and logs the user into the site.

- **Login**
   - In the login mode, users can enter their email address and password.
   - Clicking the login button logs the user into the site.

- **User Authentication**
   - When logged in, the menu options change to "Search for Books," "My Saved Books," and "Logout."

- **My Saved Books**
   - Logged-in users can see a list of books they have saved to their account.
   - Each saved book includes the title, author, description, image, and a link to the book on Google Books.
   - Users can also remove books from their account.

- **Save Books**
   - When logged in, users can save books from the search results to their account.

- **Logout**
   - Clicking the "Logout" button logs the user out and returns them to the initial menu.


## Technologies Used

- JavaScript
- React.js
- GraphQL
- Node.js
- MongoDB (or other database system)
- JWT
- express
- Node
- Bootstrap
- Google Books API (for book information)


## Usage

To get started with the Book Search Engine, follow these steps:

1. Load the application.
2. Use the menu to search for books or access the login/signup functionality.
3. Search for books by entering a search term and clicking the submit button.
4. Create an account or log in.
5. Save books to your account.
6. View your saved books and remove them if desired.
7. Log out when you're done.

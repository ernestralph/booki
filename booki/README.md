##### Booki 

Booki Client is the client-side of the application built with react a javascript library. It is well designed user interface with user interactivity

## Tech Stack
JavaScript, React.js

## Dependencies
This are the listed dev dependencies

axios: "^1.6.5",
react: "^18.2.0",
react-dom: "^18.2.0",
react-icons: "^4.12.0",
react-otp-input: "^3.1.1",
react-router-dom: "^6.21.1",
react-scripts: "5.0.1",
react-toastify: "^9.1.3", 

## Features
**Registration Functionality**
User registration is carried out with (name, email, phone, password and confirmation password) fields.

User is redirected to the OTP page for an OTP verification after a successful user registration. 



**Authentication Functionality**
Users can login using their registered credentials ( email and password ), user is redirected to home page

**Search Functionality**
On user Login, user is directed to the home page where there is a search input for user to search their favorite book by name.
on clicking the search button the api end-point is called with option for the single rsult. User can then click the option dropdown to read full book details

**OTP Verification Functionality**
The application has an inbuilt functionality that generates a unique OTP every time a new register user click the (SEND OTP) button

A valid OTP should be sent to user after the (SEND OTP) button
is clicked 

A valid OTP should be entered in order to access the account. If it's correct then

The application provides functionality to verify users through OTP sent via SMS . 

On a successfull OTP verifaction, user is redirected to the home page

## Test
No test yet


# StudyBuddy

Watch a Demo on YouTube:

[![StudyBuddy Demo Video](/server/public/assets/readme/studybuddy-thumb.png)](https://youtu.be/zV7LkxL58pU)

Try Now: [StudyBuddy App](https://study-buddy-9en0.onrender.com/)

## Introduction

StudyBuddy was created within one week as a half-term project at the School of Code software development bootcamp by a team of five junior software developers. 

The project was originally built as two separate [front-end](https://github.com/SchoolOfCode/bc15-w8-project-front-end-tech-gladiators) and [back-end](https://github.com/SchoolOfCode/bc15-w8-project-back-end-tech-gladiators) repos which I joined together into a single repo for ease of deployment.

## Overview

The project was outlined with the following criteria:

"We want to see a full-stack application you’ve designed and built to solve a problem. We’d like this to include a front-end application (HTML, CSS, JS) that calls out to a backend application (Node.js). Your front end should send data to or fetch data from the backend to perform its function. The application should have some tests."

### Problem Statement
With just one day for research and ideation, we surveyed and interviewed our fellow boot campers to discover what we could design to assist them on their boot camp journey. Our research helped us refine our problem statement:

"Improve Isolation of Boot campers and offer learning peer support and accountability."

### Our Solution

Based on market research, surveys, and personal experience, we designed an app that uses social accountability and cooperation, proven tools that help motivate users to better themselves and build new habits together, without distracting from what’s important.

### Technologies

- Vanilla JS, HTML, and CSS

### Dependencies

StudyBuddy uses Bcrypt for password hashing, the Express router, Morgan for middleware, and PG to interact with our PostgreSQL database.

---

## Overview

StudyBuddy is an app that allows users to share resources based on various topics related to web development and programming in a 'Resource Library' under different topic headings like 'back-end', 'front-end UI/UX', and more. On the home page, users can also find links to several 'chat rooms' where users can join to discuss topics with their peers over Google Meet. Each user has an individual user account, and their name and information are tracked with every shared resource.

## Features

Upon visiting the application for the first time, the user can register with the app by providing basic information, including a URL to an image to be saved to their user profile. Once logged in, the user is faced with several buttons, the first of which being the 'Resource Library', where all resources are shared nested under further subheadings such as 'front-end' and 'back-end'. Clicking any of these libraries will display all the resources shared under that topic heading. Each one can be clicked to take the user to the shared resource. To share a resource, visit the Resource Library that most closely matches the type of resource you would like to share and click the '+' button on the bottom right of the window. This will open a popup window where the user can enter a title, description, image URL, and link to the resource. Hitting 'Submit' will add that resource to the database, allowing it to be shared with others.

To visit any of the topical chat rooms, the user can return to the home page and click any of the links to the chat room topics listed there. For example, the 'Open Bar' is intended as an anything-goes chat room where anything can be discussed, 'Back-End' is strictly for backend topics, and so on. A user can also view their personal information by clicking on their user image in the top-right of the page.

---

## Installation

To work with StudyBuddy, follow these steps:

1. Start a new project in your IDE.
2. Clone down the repo:
```
git clone git@github.com:dannykryan/studybuddy.git
```
3. Install the dependencies:
```
npm install
```
4. Create a new `.env` file and add your HOST, PORT and DB_CONNECTION_STRING and Key:
```
HOST=your_host_number
PORT=your_port_number
DB_CONNECTION_STRING=your_database_connection_string
```
Make sure to replace `your_host_number`, `your_port_number` and `your_database_connection_string` with your actual HOST, PORT and CONNECTION STRING.

6. For ease of setup, we have provided some scripts to allow new users to easily set up the required database tables and seed data. simply run the following command in the console:
```
npm run reset-databse
```
This will create all the necessary tables and some data for each resource libraries.

---
7. Start the server by entering the following command into your terminal:
```
npm run dev
```
9. Start the app by visiting http://localhost:7000/login.html (7000 is the default port number unless set in your .env file) and click 'register' to register a new user.
10. Enter all of your details including an image URL to set as your profile image and click 'submit' which will enter you as a user in the databse and return you to the login screen.
11. You can now login with the username and and password you provided in the previous step.
12. Once you have logged in you can view your user information by clicking your profile image in the top right of the screen next to your name.
13. You should be free to browse the application and add resources using the 'plus' button in the bottom right of each 'resource library' page.

## Credits

The original StudyBuddy team:

- Danny Ryan - [GitHub](https://github.com/dannykryan)
- Olivia Johnson - [GitHub](https://github.com/Livi-96)
- Martina Zurli - [GitHub](https://github.com/LuisValrod)
- Jasim Chowdhury - [GitHub](https://github.com/jasimchowdhury)
- Susan Williams - [GitHub](https://github.com/SusanWi)

---

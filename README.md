# Auth-based-Task-Management-application-Mini-Project-

## Overview

TaskFlow is a browser-based task management application built using **HTML, CSS, and JavaScript** with **LocalStorage** as the data storage mechanism.

This project was developed as a **college mini project** to strengthen front-end development skills and practical understanding of client-side data handling. It demonstrates fundamental web development concepts including:

* DOM manipulation
* Form handling and validation
* Client-side authentication flow
* CRUD operations
* State management using LocalStorage
* Layout design using Flexbox

> Note: This is a client-side educational project and does not include a backend server, database, or encrypted authentication system. It is intended for learning purposes only.

---

## Features

### User Authentication

* User registration (Sign Up)
* User login
* Session stored in `localStorage` as `currentuser`
* Dashboard access restricted to logged-in users
* Logout functionality

### Task Management Dashboard

After successful login, users can perform the following actions:

#### Create Tasks

Each task includes:

* Title
* Description
* Due date
* Status (Completed / Pending)

#### View Tasks

Tasks are displayed as individual cards showing:

* Task title
* Description
* Due date
* Current status

#### Edit Tasks

Users can modify:

* Task title
* Description
* Due date

#### Delete Tasks

Users can permanently remove tasks from LocalStorage.

#### Filter Tasks

Tasks can be filtered based on:

* All tasks
* Completed tasks
* Pending tasks

---

## Technologies Used

| Technology   | Purpose                             |
| ------------ | ----------------------------------- |
| HTML         | Page structure                      |
| CSS          | Styling and layout                  |
| JavaScript   | Application logic and interactivity |
| LocalStorage | Data persistence                    |
| Font Awesome | Icons for UI elements               |

---

## Project Structure

```
TaskFlow/
│
├── signup.html
├── login.html
└── dashboard.html
```

Each file contains inline CSS and JavaScript for simplicity and demonstration purposes.

---

## How to Run the Project

1. Download or clone this repository
2. Open `signup.html` in a web browser
3. Create a new user account
4. Log in using your credentials
5. Start creating and managing tasks

Recommended browsers: Google Chrome or Microsoft Edge.

---

## Learning Outcomes

By building this project, the following skills were practiced:

* Handling form submissions
* Validating user input
* Managing application state with LocalStorage
* Dynamically rendering UI components
* Implementing CRUD operations
* Structuring layouts using Flexbox
* Working with event listeners in JavaScript

---

## Limitations

This project has the following constraints:

* No backend server
* No database
* No password encryption
* No multi-device synchronization
* Not suitable for real-world secure usage

---

## Future Enhancements

Potential upgrades include:

* Backend implementation using Node.js
* Database integration with MongoDB or MySQL
* Secure authentication using JWT
* Password hashing
* User-specific cloud storage for tasks
* Fully responsive mobile design

---

## Author

**Kishore Kumar**
CSE Student | Aspiring Software Development Engineer (SDE)
Focused on web development and software engineering fundamentals.

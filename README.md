# M.EVS - MERN Musical Instruments Store

## 1. Project Introduction

M.EVS is a musical instrument store website. The original website was built with
plain HTML and CSS. This project rebuilds the same website as a modern MERN
application:

- The **frontend** is recreated with **React** using the original page content,
  images, and CSS design.
- The **backend** is built with **Node.js and Express**.
- Contact form messages are stored in **MongoDB** using **Mongoose**.

The website has six pages: Home, Guitars, Headless Guitars, Bass, Amplifiers, and
Contact. The Contact Us form is fully connected to the backend and saves every
valid submission in the database.

This project was created for a university MERN stack assignment. It does not use
authentication, email sending, or an admin dashboard.

## 2. Project Objectives

The main objectives of this project are:

1. Recreate the original M.EVS website design using React components.
2. Keep the original HTML/CSS visual design unchanged.
3. Practise building a multi-page website with React Router.
4. Build a REST API with Node.js and Express.
5. Connect the React frontend to the Express backend using `fetch()`.
6. Store form data in MongoDB using a Mongoose model.
7. Validate form data on both the frontend and the backend.
8. Display loading, success, and error messages to the user.
9. Understand the complete MERN request flow from browser to database.
10. Prepare a clean, runnable project for university submission.

## 3. Technologies Used

### Frontend

- **React 19** - builds the user interface with reusable components.
- **React Router 7** - handles navigation between pages without reloading.
- **Vite 8** - development server and production build tool.
- **JavaScript (ES6+)** - programming language used in the frontend.
- **HTML5 and CSS3** - page structure and styling.
- **Oxlint** - checks the frontend code for common mistakes.

### Backend

- **Node.js** - JavaScript runtime used to run the server.
- **Express 5** - web framework used to build the API.
- **MongoDB** - NoSQL database that stores contact messages.
- **Mongoose 9** - library that connects Node.js to MongoDB and defines schemas.
- **dotenv** - loads environment variables from the `.env` file.
- **cors** - allows the React app and Express server to communicate.

### Development Tools

- **npm** - installs packages and runs scripts.
- **MongoDB Compass** - optional graphical tool for viewing local MongoDB data.
- **MongoDB Atlas** - optional cloud-hosted MongoDB database.
- **Visual Studio Code** - recommended code editor.

## 4. Explanation of the MERN Stack

MERN is an acronym for four technologies that work together:

| Letter | Technology | Job in this project |
|--------|------------|---------------------|
| **M** | MongoDB | Stores contact messages as documents. |
| **E** | Express | Receives API requests and sends responses. |
| **R** | React | Displays the website and handles user interaction. |
| **N** | Node.js | Runs the Express server and JavaScript backend. |

The request flow is:

```
User fills the Contact form
        |
        v
React (browser) collects the values
        |
        v
fetch() sends a POST request to Express
        |
        v
Express validates the request and calls Mongoose
        |
        v
Mongoose saves a document in MongoDB
        |
        v
Express sends a response back to React
        |
        v
React shows a success or error message
```

MongoDB is the database, Express is the API layer, React is the user interface,
and Node.js is the runtime that makes the backend work.

## 5. Project Folder Structure

```
Mern Project/
|
|-- client/                         React frontend (Vite)
|   |-- public/
|   |   |-- images/                 Original website images (37 files)
|   |   |-- favicon.svg             Browser tab icon
|   |
|   |-- src/
|   |   |-- components/
|   |   |   |-- Header.jsx          Shared header and navigation
|   |   |   |-- Footer.jsx          Shared footer
|   |   |   |-- Layout.jsx          Header + page + footer wrapper
|   |   |   |-- SectionHeader.jsx   Reusable page title with divider lines
|   |   |   |-- ProductCard.jsx     Reusable product card
|   |   |   |-- BrandSection.jsx    Brand logo plus product grid
|   |   |
|   |   |-- pages/
|   |   |   |-- Home.jsx            Home page
|   |   |   |-- Guitars.jsx         Guitars page
|   |   |   |-- HeadlessGuitars.jsx Headless Guitars page
|   |   |   |-- Basses.jsx          Bass page
|   |   |   |-- Amplifiers.jsx      Amplifiers page
|   |   |   |-- Contact.jsx         Contact form page
|   |   |
|   |   |-- styles/
|   |   |   |-- global.css          Shared header, nav, search, and footer
|   |   |   |-- homepage.css        Home page styles
|   |   |   |-- guitarspage.css     Guitars page styles
|   |   |   |-- headlessguitarspage.css
|   |   |   |-- bassespage.css
|   |   |   |-- amplifierspage.css
|   |   |   |-- contactuspage.css
|   |   |
|   |   |-- App.jsx                 Route definitions
|   |   |-- main.jsx                React entry point and BrowserRouter
|   |
|   |-- index.html                  HTML page that loads React
|   |-- package.json                Frontend packages and scripts
|   |-- package-lock.json           Exact installed package versions
|   |-- vite.config.js              Vite configuration
|   |-- .oxlintrc.json              Linter configuration
|   |-- .gitignore                  Files Git should ignore
|
|-- server/                         Express backend
|   |-- config/
|   |   |-- db.js                   Connects to MongoDB with Mongoose
|   |-- controllers/
|   |   |-- contactController.js    Validation and saving logic
|   |-- models/
|   |   |-- ContactMessage.js       Mongoose schema and model
|   |-- routes/
|   |   |-- contactRoutes.js        POST /api/contact route
|   |-- index.js                    Express app setup and server start
|   |-- .env                        Local environment variables (not committed)
|   |-- .env.example                Safe example environment variables
|   |-- .gitignore                  Files Git should ignore
|   |-- package.json                Backend packages and scripts
|   |-- package-lock.json           Exact installed package versions
|
|-- .gitignore                      Root ignore rules
|-- README.md                       This file
```

`node_modules/` and `client/dist/` are generated folders. They are not source
code and are ignored by Git.

## 6. Installation Requirements

Before running the project, install:

1. **Node.js** (version 20.19 or newer; Node 22 or 24 recommended. This project
   was tested with Node.js 24).
2. **npm** (installed automatically with Node.js).
3. **MongoDB** (choose one):
   - MongoDB Community Server installed locally, or
   - A free MongoDB Atlas account.
4. **A code editor** such as Visual Studio Code (optional but recommended).

Check your versions:

```bash
node --version
npm --version
```

Check that MongoDB is available locally:

```bash
mongod --version
```

If you use MongoDB Atlas, you do not need to install MongoDB locally.

## 7. How to Install Frontend Dependencies

Open a terminal in the project folder and run:

```bash
cd client
npm install
```

This installs React, React Router, Vite, and the other frontend packages listed in
`client/package.json`. It creates the `client/node_modules` folder.

## 8. How to Install Backend Dependencies

Open another terminal in the project folder and run:

```bash
cd server
npm install
```

This installs Express, Mongoose, dotenv, and cors listed in
`server/package.json`. It creates the `server/node_modules` folder.

## 9. How to Configure MongoDB

You can use either a local MongoDB database or MongoDB Atlas.

### Option A: Local MongoDB (recommended for the demonstration)

1. Install MongoDB Community Server.
2. Start MongoDB. On Windows it usually runs automatically as a service. You can
   also start it manually with:

   ```bash
   mongod
   ```

3. The default local connection address is:

   ```
   mongodb://127.0.0.1:27017/mevs
   ```

4. The `mevs` database and `contactmessages` collection are created
   automatically the first time a message is saved.

You can inspect local data with MongoDB Compass by connecting to:

```
mongodb://127.0.0.1:27017
```

### Option B: MongoDB Atlas (cloud database)

1. Go to https://www.mongodb.com/cloud/atlas and create a free account.
2. Create a free M0 cluster.
3. Create a database user with a username and password.
4. Under **Network Access**, allow your current IP address.
5. Click **Connect** and copy the connection string. It looks like:

   ```
   mongodb+srv://<username>:<password>@<cluster>.mongodb.net/mevs?retryWrites=true&w=majority
   ```

6. Replace `<username>`, `<password>`, and `<cluster>` with your own values.
7. Paste the complete string into `server/.env` as `MONGO_URI`.

The database and collection are created automatically when the first message is
saved. The `/mevs` part of the connection string selects the database name.

## 10. How to Configure Environment Variables

Environment variables keep configuration and credentials outside the source
code. The backend reads them from `server/.env`.

1. Open the `server` folder.
2. Copy `.env.example` to `.env`:

   Windows PowerShell:

   ```powershell
   Copy-Item .env.example .env
   ```

   macOS or Linux:

   ```bash
   cp .env.example .env
   ```

3. Open `server/.env` and set the values:

   ```
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/mevs
   ```

   For Atlas, use your Atlas connection string instead.

4. Save the file and restart the backend after changing it.

Important rules:

- Never commit the real `.env` file.
- `.env.example` contains only safe placeholder values and can be committed.
- The root `.gitignore` and `server/.gitignore` both ignore `.env`.
- Do not put real database passwords in the README, source code, or screenshots.

The frontend currently expects the backend at `http://localhost:5000`. If you
change `PORT`, also update the `API_URL` constant in
`client/src/pages/Contact.jsx`.

## 11. How to Start the Frontend

Open a terminal in the `client` folder:

```bash
cd client
npm run dev
```

Vite starts the development server and prints a URL, usually:

```
http://localhost:5173
```

Open that URL in a browser. Other frontend commands:

```bash
npm run build     # Create a production build in client/dist
npm run preview   # Preview the production build locally
npm run lint      # Check the frontend code with Oxlint
```

## 12. How to Start the Backend

Open a terminal in the `server` folder:

```bash
cd server
npm run dev
```

The backend starts at:

```
http://localhost:5000
```

`npm run dev` uses Node.js watch mode, so the server restarts when backend files
change. To run without automatic restart:

```bash
npm start
```

The backend must be running before you submit the Contact form. Open the
frontend and backend in two separate terminals.

Useful checks:

- `GET http://localhost:5000/` returns `M.EVS backend is running.`
- The terminal shows `MongoDB connected: ...` and `Server running at ...` when
  everything is configured correctly.

## 13. How the Contact Us Form Works

The Contact page is in `client/src/pages/Contact.jsx`.

1. **State holds the form values.**  
   `useState` stores six fields: `firstName`, `lastName`, `email`, `phone`,
   `subject`, and `message`.

2. **Typing updates React state.**  
   Every input has a `name` and an `onChange={handleChange}`. `handleChange`
   reads `event.target.name` and `event.target.value`, then updates `formData`
   with `setFormData`. This is called a controlled form because React controls
   the input values.

3. **The browser checks required fields.**  
   Every input has the `required` attribute, and the email input uses
   `type="email"`. The browser blocks empty or invalid submissions before React
   runs `handleSubmit`.

4. **`handleSubmit` sends the data.**  
   The function calls `event.preventDefault()` to stop a page reload. It sets
   `isSubmitting` to `true`, which disables the Send button and changes its text
   to `Sending...`. Then it calls `fetch()`:

   ```js
   fetch('http://localhost:5000/api/contact', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   })
   ```

5. **The backend validates and saves the message.**  
   `express.json()` reads the JSON body. `contactController.js` checks that all
   six fields are non-empty strings and that the email format is valid. Valid
   messages are saved with `ContactMessage.create(...)`.

6. **The user sees feedback.**  
   On success, the page shows `Your message has been submitted successfully!`
   and clears all fields. On failure, it shows
   `Something went wrong. Please try again.` and keeps the entered values.

## 14. How Messages Are Stored in MongoDB

The Mongoose schema is in `server/models/ContactMessage.js`. Each saved message
is one document in the `contactmessages` collection inside the `mevs` database.

A document looks like this:

```json
{
  "_id": "68a1f2c3d4e5f6a7b8c9d0e1",
  "firstName": "Sulav",
  "lastName": "Dyola",
  "email": "sulav@example.com",
  "phone": "9800000000",
  "subject": "Guitar enquiry",
  "message": "Do you have the Ibanez RGA742FM in stock?",
  "createdAt": "2026-11-09T07:30:00.000Z",
  "__v": 0
}
```

Field details:

| Field | Type | Notes |
|-------|------|-------|
| `firstName` | String | Required, trimmed |
| `lastName` | String | Required, trimmed |
| `email` | String | Required, trimmed, lowercased |
| `phone` | String | Required, trimmed |
| `subject` | String | Required, trimmed |
| `message` | String | Required, trimmed |
| `createdAt` | Date | Set automatically with `Date.now` |
| `_id` | ObjectId | Added automatically by MongoDB |
| `__v` | Number | Version key added by Mongoose |

Mongoose `model('ContactMessage', schema)` maps the model to the
`contactmessages` collection. Each submission inserts a new document, so two
submissions create two separate records.

## 15. How to View Submitted Messages in MongoDB Atlas

Important: MongoDB Atlas only shows data stored in the Atlas cluster. If
`MONGO_URI` points to local MongoDB (`127.0.0.1`), the messages are stored on
your computer and will not appear in Atlas.

To view messages in Atlas:

1. Change `server/.env` so `MONGO_URI` is your Atlas connection string with
   `/mevs` as the database name.
2. Restart the backend.
3. Submit a new message through the Contact page.
4. Sign in to https://cloud.mongodb.com.
5. Open your cluster and click **Browse Collections**.
6. Select the `mevs` database.
7. Select the `contactmessages` collection.
8. Your submitted messages appear as documents on the right.

For local MongoDB, open MongoDB Compass, connect to
`mongodb://127.0.0.1:27017`, select `mevs`, then `contactmessages`.

## 16. Pages and Routes

| Page | URL | React component |
|------|-----|-----------------|
| Home | `/` | `pages/Home.jsx` |
| Guitars | `/guitars` | `pages/Guitars.jsx` |
| Headless Guitars | `/headless-guitars` | `pages/HeadlessGuitars.jsx` |
| Bass | `/basses` | `pages/Basses.jsx` |
| Amplifiers | `/amplifiers` | `pages/Amplifiers.jsx` |
| Contact | `/contact` | `pages/Contact.jsx` |

Any unknown URL redirects to the Home page.

## 17. API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/` | Health check. Returns a short text message. |
| POST | `/api/contact` | Validates and saves a contact message. |

### POST /api/contact

Request body:

```json
{
  "firstName": "Sulav",
  "lastName": "Dyola",
  "email": "sulav@example.com",
  "phone": "9800000000",
  "subject": "Guitar enquiry",
  "message": "Do you have this guitar in stock?"
}
```

Successful response: status `201`

```json
{
  "message": "Contact message saved successfully.",
  "contactMessage": {
    "_id": "...",
    "firstName": "Sulav",
    "lastName": "Dyola",
    "email": "sulav@example.com",
    "phone": "9800000000",
    "subject": "Guitar enquiry",
    "message": "Do you have this guitar in stock?",
    "createdAt": "..."
  }
}
```

Missing field response: status `400`

```json
{ "message": "All fields are required." }
```

Invalid email response: status `400`

```json
{ "message": "Please enter a valid email address." }
```

Unexpected server error: status `500`

```json
{ "message": "Failed to save contact message." }
```

## 18. Troubleshooting

### `MONGO_URI is not defined`

Create `server/.env` by copying `.env.example`, and make sure you run the backend
from inside the `server` folder.

### `MongoDB connection failed`

- Make sure the local MongoDB service is running.
- For Atlas, check the username, password, and cluster address.
- For Atlas, allow your IP address under **Network Access**.
- Check that the connection string includes the `/mevs` database name.

### `EADDRINUSE: address already in use :::5000`

Another backend is already running on port 5000. Stop the other process, or
change `PORT` in `server/.env` and update `API_URL` in
`client/src/pages/Contact.jsx` to match.

### The Contact form shows the error message

- Make sure the backend is running at `http://localhost:5000`.
- Check the backend terminal for errors.
- Check that MongoDB is connected.

### The frontend loads but the page is blank

- Open the browser developer console and check for errors.
- Make sure you ran `npm install` inside `client`.
- Make sure you opened the URL printed by Vite, usually
  `http://localhost:5173`.

### Images do not load

All images must stay in `client/public/images`. They are referenced with paths
such as `/images/Ibanez logo.jpg`.

### `npm install` fails

Delete `node_modules` and `package-lock.json`, then run `npm install` again.
Only do this if normal installation fails.

## 19. University Demonstration Guide

### Important files and their purposes

| File | Purpose |
|------|---------|
| `client/index.html` | Loads the React application and Google Fonts. |
| `client/src/main.jsx` | Starts React and sets up `BrowserRouter`. |
| `client/src/App.jsx` | Defines all page routes. |
| `client/src/components/Layout.jsx` | Shows the shared header, page content, and footer. |
| `client/src/components/Header.jsx` | Navigation links and search bar. |
| `client/src/pages/Home.jsx` | Home page content and product data. |
| `client/src/pages/Contact.jsx` | Contact form state, validation display, and `fetch()` call. |
| `client/src/styles/*.css` | Original website styles, scoped per page. |
| `server/index.js` | Creates the Express app, middleware, routes, and server. |
| `server/config/db.js` | Connects to MongoDB using `MONGO_URI`. |
| `server/models/ContactMessage.js` | Mongoose schema and model for messages. |
| `server/controllers/contactController.js` | Validates input and saves messages. |
| `server/routes/contactRoutes.js` | Connects `POST /api/contact` to the controller. |
| `server/.env` | Local settings and MongoDB connection string. |
| `server/.env.example` | Safe template showing required variables. |

### Commands needed to run the project

Frontend:

```bash
cd client
npm install
npm run dev
```

Backend (in a second terminal):

```bash
cd server
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

Other useful commands:

```bash
cd client
npm run build
npm run lint
```

```bash
cd server
npm start
```

### Simple explanation of the whole application

React displays the website and keeps the form values in state. When the Send
button is clicked, React sends the six values as JSON to the Express API using
`fetch()`. Express uses `express.json()` to read the body, then the contact
controller validates the fields. If the data is valid, Mongoose saves it as a new
document in the MongoDB `contactmessages` collection. Express sends back status
`201`, and React shows a success message and clears the form. If anything fails,
React shows an error message.

## 20. Possible Lecturer Questions and Answers

### 1. What does MERN stand for?

MongoDB, Express, React, and Node.js.

### 2. What is React?

React is a JavaScript library for building user interfaces from reusable
components. It updates the page efficiently when state changes.

### 3. What is a React component?

A component is a reusable piece of the user interface. In this project,
`Header`, `Footer`, and `ProductCard` are components.

### 4. What is JSX?

JSX is a syntax that looks like HTML inside JavaScript. React uses it to describe
what the screen should look like.

### 5. What is state in React?

State is data that belongs to a component and can change over time. When state
changes, React re-renders the component. This project uses `useState` for the
form values, the submitting status, and the feedback message.

### 6. What is a controlled component?

A controlled component is a form input whose value comes from React state and
whose changes go through an `onChange` handler. The Contact form inputs are
controlled.

### 7. What is a prop?

A prop is data passed from a parent component to a child component. For example,
`ProductCard` receives `image`, `alt`, `title`, and `price` as props.

### 8. What is React Router?

React Router is a library that changes the displayed page without a full page
reload. It provides `BrowserRouter`, `Routes`, `Route`, and `Link`.

### 9. What is Node.js?

Node.js lets JavaScript run outside the browser. It is used to run the Express
backend server.

### 10. What is Express?

Express is a Node.js web framework for building APIs and handling HTTP requests
and responses.

### 11. What is middleware?

Middleware is a function that runs between the request and the response.
`cors()` allows requests from the React development server, and
`express.json()` reads JSON request bodies.

### 12. What is an API endpoint?

An API endpoint is a URL that accepts requests and returns data. This project has
`GET /` and `POST /api/contact`.

### 13. What is REST?

REST is a common style for designing APIs around resources and HTTP methods such
as GET, POST, PUT, and DELETE.

### 14. What is the difference between GET and POST?

GET retrieves data and should not change it. POST sends data to the server to
create or process something. The Contact form uses POST.

### 15. What is MongoDB?

MongoDB is a NoSQL database that stores data as flexible JSON-like documents
instead of tables and rows.

### 16. What is Mongoose?

Mongoose is a library that connects Node.js to MongoDB. It provides schemas and
models so data is structured and validated before it is saved.

### 17. What is a schema?

A schema describes the shape of a document: its fields, data types, and rules.
`ContactMessage.js` defines the fields and marks them as required.

### 18. How does the form data reach MongoDB?

React stores the values in state. `fetch()` sends them as JSON to
`POST /api/contact`. Express reads the JSON, the controller validates it,
Mongoose creates a document, and MongoDB stores it.

### 19. What is `fetch()`?

`fetch()` is a browser function for making HTTP requests. It is used here to send
the form data to the Express API.

### 20. What is `JSON.stringify()`?

It converts a JavaScript object into a JSON string so it can be sent in an HTTP
request body.

### 21. Why use `async` and `await`?

They let asynchronous code, such as a network request, be written in a readable
top-to-bottom style. `await` pauses the function until the request finishes.

### 22. Why is there a `try...catch` block?

If the network request fails, `catch` runs and shows the error message instead of
crashing the page.

### 23. Where is validation done?

Validation happens twice. The browser checks `required` and `type="email"`. The
backend also checks all six fields and the email pattern, so invalid data cannot
be saved even if someone bypasses the browser.

### 24. What do status codes 201, 400, and 500 mean?

- `201 Created` means the message was saved successfully.
- `400 Bad Request` means the data was missing or invalid.
- `500 Internal Server Error` means the server had an unexpected problem.

### 25. Why is CORS needed?

The frontend runs on port 5173 and the backend on port 5000. Browsers treat
different ports as different origins, so `cors()` allows the frontend to call the
backend.

### 26. Why are environment variables used?

They keep configuration and secrets, such as the MongoDB connection string, out
of the source code. `.env` is ignored by Git, while `.env.example` shows which
variables are needed.

### 27. Why is the Contact form not using authentication?

Authentication was not required for this assignment. The project focuses on the
MERN stack, React forms, Express APIs, and MongoDB storage. Login, email sending,
and an admin dashboard could be added later.

### 28. What are possible future improvements?

Add authentication, an admin page to read messages, email notifications, product
data loaded from the database, and deployment to a hosting service with MongoDB
Atlas.

## 21. Submission Checklist

- [ ] `server/.env` exists locally and is not committed.
- [ ] `server/.env.example` contains only safe example values.
- [ ] `node_modules` folders are not part of the submission.
- [ ] The backend starts with `npm run dev` or `npm start`.
- [ ] The frontend starts with `npm run dev`.
- [ ] All six pages load and navigation works.
- [ ] The Contact form saves a message in MongoDB.
- [ ] Success and error messages work.
- [ ] No authentication or admin files are included.
- [ ] The original HTML/CSS website folder was not modified.

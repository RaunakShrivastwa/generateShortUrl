# URL Shortener Backend

This project is a URL shortener service developed using Node.js, Express.js, and MongoDB. The service allows users to submit lengthy URLs, generates unique short URLs, and provides secure access through user registration and login functionalities.

## Functionalities

1. Users can submit a lengthy URL through a POST request to `/url/shortener`.
2. The API will generate a unique short URL for the submitted original URL and store it in the database.
3. The response includes both the original and shortened URLs.
4. Users can access the original URL by visiting the generated short URL.
5. Basic user registration and login functionalities for secure access.

## Technical Requirements

### Backend

- Node.js (version LTS)
- Express.js
- Mongoose

### Database

- MongoDB

### Security

- Simple authentication mechanism (e.g., username and password)
- Basic data security practices

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/<your_github_username>/<your_project_name>.git
   cd <your_project_name>

2. Install Dependencies:
   npm install

3. Start Server:
   npm start

API Endpoints
URL Shortener Endpoint:

Endpoint: POST /url/shortener
Description: Endpoint description here
Get Original URL Endpoint:

Endpoint: GET /url/get/:short
Description: Endpoint description here
User Registration Endpoint:

Endpoint: POST /user/add
Description: Endpoint description here
Get All Users Endpoint:

Endpoint: GET /user/getAll
Description: Endpoint description here
User Sign In Endpoint:

Endpoint: POST /user/signIn
Description: Endpoint description here
User Sign Out Endpoint:

Endpoint: POST /user/signOut
Description: Endpoint description here


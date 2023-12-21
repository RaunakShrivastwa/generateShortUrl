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

To run this project locally, follow these steps:

1. **Clone Repository:**
git clone (https://github.com/RaunakShrivastwa/generateShortUrl)

2. **Setup Backend:**
- Navigate to the `backend` directory.
- Install dependencies: `npm install`.
- Start the server: `npm start`.

## Usage

- Access the website via `localhost:3000` in your browser.
- Users can log in using their preferred authentication method.
- Explore ShortUrl, GetAllUrl, Getting Original Url
  
## API Endpoint
 - Create User   : `localhost:3000/user/add`
 - GetAll User   : `localhost:3000/user/getAll`
 - SignIn User   : `localhost:3000/user/signIn`
 - SignOut User  : `localhost:3000/user/signOut`
 - Short Url     : `localhost:3000/url/shortner`
 - Get All Url   : `localhost:3000/url/getAll`
 - Get Original  : `localhost:3000/url/:shortner`


   ## Complete Documentation
  (https://documenter.getpostman.com/view/20743504/2s9Ykq7gKL)https://documenter.getpostman.com/view/20743504/2s9Ykq7gKL)

# WanderLust

WanderLust is a full-stack web application inspired by Airbnb. It allows users to create property listings, browse accommodations, upload images, and share reviews through a secure authentication system.

## Features

* User Authentication using Passport.js
* Create, Read, Update, and Delete Listings
* Reviews and Ratings System
* Image Uploads with Cloudinary
* MongoDB Atlas Database Integration
* Session Management
* Flash Messages
* Responsive Design using Bootstrap 5

Live Project Link: https://wanderlust-project-ashmit.onrender.com

## Tech Stack

### Frontend

* EJS
* HTML5
* CSS3
* Bootstrap 5

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* Passport.js (Local Strategy)

### Cloud Storage

* Cloudinary

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Ashmit565/Wanderlust-project.git
```

### 2. Navigate to the Project Directory

```bash
cd Wanderlust-project
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret_key
```

### 5. Seed the Database

```bash
node init/index.js
```

### 6. Start the Application

```bash
npm start
```

### 7. Open in Browser

```text
http://localhost:8080
```

## Author

Ashmit

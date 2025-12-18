# MERN-LMS
MERN-LMS is a web-based Learning Management System (LMS) application built using the MERN stack (MongoDB, Express, React, and Node.js).  
This project was developed as a personal project to learn full stack web application development, covering frontend implementation, backend API development, and database integration.  
MERN-LMS is also designed as a first full stack portfolio project that demonstrates the application of modern web technologies and architecture.


## 📸 Screenshots
*soon*

## 🚀 Features

### 🔐 Authentication & Authorization
- User registration and login
- JWT-based authentication for secure API access
- Secure password hashing using bcrypt
- Protected frontend routes based on authentication state
- Role-based route protection (Manager & Student)
- Protected backend APIs using JWT middleware
- Role-based authorization logic on the backend
- Client-side and server-side validation for authentication forms
- User logout and session handling

### 👨‍🎓 Student Features
- Secure student login access
- View assigned course list
- Access detailed course information and learning materials
- Read-only access to course content
- Protected student routes based on authentication and role


### 👨‍🏫 Manager / Instructor Features
- Secure manager authentication and dashboard access
- Create, update, and manage courses
- Manage course categories
- Create and edit course content
- Rich text editor support for course materials
- Preview courses before publishing
- Manage students (create, update, and view)
- Assign students to courses
- View enrolled students per course

### 🛠 General Features
- RESTful API architecture
- Client-side and server-side request validation
- Secure file upload handling using Multer
- Persistent authentication state using secure local storage


## 🛠 Tech Stack

### Frontend:
- [React (Vite)](https://vite.dev/guide/#scaffolding-your-first-vite-project)
- [Tailwind CSS](https://v3.tailwindcss.com/docs/guides/vite)
- [React Router](https://reactrouter.com/6.30.1/start/tutorial)
- [TanStack Query](https://tanstack.com/query/v5/docs/framework/react/installation)
- [React Hook Form](https://react-hook-form.com/get-started)
- [Axios](https://axios-http.com/docs/intro)
- [Rich Text Editor (CKEditor 5)](https://ckeditor.com/ckeditor-5/react/) {soon be change to tiptap}

### Backend:
- [Node.js](https://nodejs.org/id/blog/release/v22.11.0)
- [express.js](https://www.npmjs.com/package/express/v/4.21.2)
- [MongoDB (Mongoose)](https://www.mongodb.com/try/download/community)
- [JSON Web Token (JWT)](https://www.npmjs.com/package/jsonwebtoken/v/9.0.2)
- [brcyptjs](https://www.npmjs.com/package/bcrypt/v/5.1.1?activeTab=versions)
- [multer V2.0.2](https://www.npmjs.com/package/multer/v/2.0.2)
- [zod v3.25.76](https://www.npmjs.com/package/zod/v/3.25.76)


## 📦 Installation
This project is a full stack MERN application. To run it locally, you need to set up the frontend and backend in separate terminals.

### Clone Repository

```bash
git clone https://github.com/kandikaprima/MERN-LMS.git
cd MERN-LMS
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend application will run at: `http://localhost:5173/`

### Backend Setup
Open a new terminal at the project root and run:
```bash
cd backend
npm install
npm run dev
```
The backend server will run at: `http://localhost:3000/`


## ⚙️ Enviroment Variables
This project uses environment variables for both backend and frontend configuration.

### Backend `.ENV`
```bash
DATABASE_URL=your_mongodb_connection_string
SECRET_KEY_JWT=your_jwt_secret_key
MIDTRANS_URL=your_midtrans_api_url
MIDTRANS_AUTH_STRING=your_midtrans_server_key
APP_URL=http://localhost:3000
```

### Backend Environment Variables
| Variable | Description |
|--------|------------|
| DATABASE_URL | MongoDB connection string |
| SECRET_KEY_JWT | Secret key for JWT authentication |
| MIDTRANS_URL | Midtrans Snap API endpoint |
| MIDTRANS_AUTH_STRING | Midtrans server key (Base64 encoded) |
| APP_URL | Frontend application URL |

### Frontend `.ENV`
```bash
VITE_API_URL=http://localhost:3000/api
VITE_SECURE_LOCAL_STORAGE_HASH_KEY=your_secure_storage_key
```

### Frontend Environment Variables
| Variable | Description |
|--------|------------|
| VITE_API_URL | Backend API base URL |
| VITE_SECURE_LOCAL_STORAGE_HASH_KEY | Encryption key for secure local storage |


## 📄 API Documentation
*soon*
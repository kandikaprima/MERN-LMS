# MERN-LMS
MERN-LMS adalah aplikasi Learning Management System (LMS) berbasis web yang dibangun menggunakan stack MERN (MongoDB, Express, React, dan Node.js).  
Project ini dikembangkan sebagai personal project untuk mempelajari pengembangan aplikasi full stack, mulai dari pengelolaan frontend, backend API, hingga integrasi database.  
MERN-LMS juga dirancang sebagai portofolio full stack pertama yang merepresentasikan penerapan arsitektur dan teknologi modern dalam pengembangan web.

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
- Role-based authorization logic on backend
- Client-side and server-side validation for authentication forms
- User logout and session handling

### 👨‍🎓 Student Features
- Secure student login access
- View list of assign courses
- Access detailed course information and materials
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


## 🛠 Teknologi yang Digunakan

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
Project ini merupakan website MERN full stack. Untuk menjalakan aplikasi secara lokal, Anda perlu menyiapkan frontend dan backend diterminal terpisah.

### Clone Repositori

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
Frontend website akan berjalan pada: `http://localhost:5173/`

### Backend Setup
Buka Terminal baru pada root folder kemudian jalankan:
```bash
cd backend
npm install
npm run dev
```
Backend server akan berjalan pada: `http://localhost:3000/`


## ⚙️ Enviroment Variables
Project ini menggunakan enviroment variable untuk konfigurasi backend dan frontend

### Backend .ENV
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

### Frontend .ENV
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
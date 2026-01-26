# 🧾 Mini CRM – Client Lead Management System

A full-stack **Client Lead Management System (Mini CRM)** built using the MERN stack. This application simulates how real businesses collect customer enquiries from a website and manage them through an admin dashboard.

---

## 🚀 Features

### 🌐 Public Side
- Contact form for customers
- Lead data stored in MongoDB
- Simulates real website enquiries

### 🔐 Admin Panel
- Secure admin login (JWT authentication)
- View all leads
- Update lead status:
  - New
  - Contacted
  - Converted
- Add follow-up notes
- Delete leads
- Protected admin routes

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- JavaScript
- CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs

---

## 📁 Project Structure

```
FUTURE_FS_02
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend
│   ├── src
│   ├── public
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **backend** folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

⚠️ `.env` is ignored from GitHub for security.

---

## ▶️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/mini-crm.git
cd mini-crm
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

### 3️⃣ Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

### 4️⃣ Access the Application

- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:5000

---

## 🌐 Routes

### Frontend Routes

| Route        | Description     |
|-------------|-----------------|
| `/`         | Contact form    |
| `/login`    | Admin login     |
| `/dashboard`| Admin dashboard |

### Backend API Endpoints

| Method | Endpoint               | Description        |
|--------|------------------------|--------------------|
| POST   | `/api/admin/login`     | Admin login        |
| POST   | `/api/leads`           | Create lead        |
| GET    | `/api/leads`           | Get all leads      |
| PUT    | `/api/leads/:id`       | Update lead status |
| PUT    | `/api/leads/:id/notes` | Update notes       |
| DELETE | `/api/leads/:id`       | Delete lead        |

---

## 📊 Lead Status Flow

```
New → Contacted → Converted
```

---

## 🔐 Security

- JWT-based authentication
- Protected admin routes
- Passwords hashed using bcrypt
- MongoDB Atlas cloud database

---

## 🧠 Learning Outcomes

- REST API development
- CRUD operations
- MongoDB schema design
- Authentication & authorization
- Frontend–backend integration
- Real-world CRM workflow
- GitHub project structuring

---

## 📸 Screenshots (Optional)

- Contact Form
- Admin Login
- Dashboard
- Lead notes & status updates

---

## 💼 Internship Task

This project was built as part of:

**Future Interns – Full Stack Development**  
**Task 2: Client Lead Management System (Mini CRM)**

---

## 👨‍💻 Author

**Ryan John**

---

## ✅ Final Notes

This Mini CRM demonstrates how real businesses:

- Collect enquiries
- Manage potential clients
- Track conversions
- Store and secure customer data

It closely reflects real-world agency and startup workflows.

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

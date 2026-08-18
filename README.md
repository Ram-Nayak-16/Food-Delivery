# 🍔 CrazyBite - Full Stack Food Delivery Platform

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Render](https://img.shields.io/badge/Render-Deployed-46E3B7?style=for-the-badge&logo=render&logoColor=black)](https://render.com/)

**CrazyBite** is a feature-rich, full-stack food delivery application built using the MERN stack (MongoDB, Express, React, Node.js). It offers a seamless customer online food ordering experience paired with a robust administrative dashboard for menu management and real-time order tracking.

---

## 🚀 Live Demo

### Render Deployment (Multi-Service)
- 🛒 **Customer Storefront**: [https://food-delivery-frontend-s7vr.onrender.com/](https://food-delivery-frontend-s7vr.onrender.com/)
- 🛡️ **Admin Dashboard**: [https://food-delivery-admin-qlk2.onrender.com/](https://food-delivery-admin-qlk2.onrender.com/)
- ⚙️ **Backend API**: [https://food-delivery-backend-da29.onrender.com](https://food-delivery-backend-da29.onrender.com)

### Vercel & Render Deployment
- 🌐 **Customer Storefront (Vercel)**: [food-delivery-frontend.vercel.app](https://food-delivery-frontend.vercel.app)
- ⚙️ **Backend API (Render)**: [food-delivery-backend.onrender.com](https://food-delivery-backend.onrender.com)

---

## ✨ Highlights & Features

### 🛒 Customer Storefront (Frontend)
- **Interactive Menu & Category Filtering**: Easily filter food items by category (Salads, Rolls, Desserts, Sandwiches, Cakes, Pure Veg, Pasta, Noodles).
- **Dynamic Cart Management**: Real-time quantity selection, subtotal calculation, delivery fee addition, and promo code support.
- **User Authentication**: Secure Login & Signup modal with JWT token management and password hashing via Bcrypt.
- **Stripe Payment Gateway**: Smooth online payment processing integration.
- **Order History & Tracking**: Dedicated page for users to view order history and real-time order fulfillment status.

### 🛡️ Admin Dashboard (Management Portal)
- **Product Management**: Add new menu items with image uploads (handled via Multer) and delete existing items.
- **Order Administration**: Monitor incoming orders and update delivery status (*Food Processing*, *Out for Delivery*, *Delivered*).

### ⚡ Backend API & Database
- **Zero-Config Local Run**: Automatic fallback to `MongoMemoryServer` (in-memory MongoDB) if no remote database string is provided.
- **Automatic Data Seeding**: Automatically seeds 32 default menu items upon first database initialization.
- **RESTful Endpoints**: Clean, modular API routes for authentication, food CRUD, cart synchronization, and order management.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite, React Router DOM, React Toastify, Axios, CSS3 |
| **Admin Portal** | React 18, Vite, React Router DOM, React Toastify, Axios, CSS3 |
| **Backend API** | Node.js, Express.js, Mongoose, JWT, Bcrypt, Multer, Stripe SDK |
| **Database** | MongoDB / MongoMemoryServer |
| **Hosting** | Vercel (Frontend Client), Render (Backend API) |

---

## 📂 Repository Structure

```text
Food-Delivery/
├── frontend/             # Customer web app (React + Vite)
│   ├── src/
│   │   ├── components/  # Reusable UI components (Navbar, Header, FoodItem, etc.)
│   │   ├── pages/       # Page views (Home, Cart, PlaceOrder, MyOrders)
│   │   └── context/     # React Context for global state (Cart, Auth, API URL)
│   └── package.json
├── admin/                # Admin management dashboard (React + Vite)
│   ├── src/
│   │   ├── pages/       # Admin pages (Add, List, Orders)
│   │   └── components/  # Admin UI components (Sidebar, Navbar)
│   └── package.json
├── backend/              # Node.js Express API server
│   ├── config/          # Database configuration & seeding logic
│   ├── controllers/     # API request handlers (food, user, cart, order)
│   ├── middleware/      # Auth & file upload middlewares
│   ├── models/          # Mongoose database schemas
│   ├── routes/          # Express route declarations
│   ├── uploads/         # Static storage for uploaded product images
│   └── package.json
├── start-all.bat         # 1-click startup script for Windows local development
└── README.md
```

---

## ⚡ Quick Start & Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/Ram-Nayak-16/Food-Delivery.git
cd Food-Delivery
```

### 2. Install Dependencies
Run `npm install` inside each of the three project directories:

```bash
# Backend
cd backend && npm install

# Frontend
cd ../frontend && npm install

# Admin
cd ../admin && npm install
```

### 3. Environment Variables Setup
Create a `.env` file inside the `backend` folder:

```env
PORT=4000
JWT_SECRET=your_jwt_secret_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here
# Optional: MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/food-del
```

> **Note**: If `MONGO_URL` is omitted, the backend will automatically spin up a local **MongoMemoryServer** and seed initial menu items!

### 4. Run the Application

#### Option A: Using the Windows 1-Click Script
On Windows, double-click `start-all.bat` or run:
```cmd
start-all.bat
```

#### Option B: Manual Terminal Launch
Start each service in a separate terminal window:

- **Backend API (Port 4000)**:
  ```bash
  cd backend
  npm run server
  ```

- **Frontend Client (Port 5173)**:
  ```bash
  cd frontend
  npm run dev
  ```

- **Admin Portal (Port 5174)**:
  ```bash
  cd admin
  npm run dev
  ```

---

## 📡 API Endpoints Overview

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| **POST** | `/api/user/register` | Register a new user | ❌ |
| **POST** | `/api/user/login` | Authenticate user & get JWT | ❌ |
| **GET** | `/api/food/list` | Fetch all menu items | ❌ |
| **POST** | `/api/food/add` | Add a new food item with image | ❌ |
| **POST** | `/api/food/remove` | Delete a food item by ID | ❌ |
| **POST** | `/api/cart/add` | Add item to user cart | ✅ |
| **POST** | `/api/cart/remove` | Remove item from user cart | ✅ |
| **POST** | `/api/cart/get` | Retrieve user cart data | ✅ |
| **POST** | `/api/order/place` | Create order & Stripe session | ✅ |
| **POST** | `/api/order/verify` | Verify Stripe payment status | ❌ |
| **POST** | `/api/order/userorders` | Get user order history | ✅ |
| **GET** | `/api/order/list` | List all orders for admin | ❌ |
| **POST** | `/api/order/status` | Update order delivery status | ❌ |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have suggestions for improvement.

---

## 👨‍💻 Author & Feedback

Developed with ❤️ by **Ram Chandra Nayak**

- 💼 **LinkedIn**: [Ram Chandra Nayak](https://www.linkedin.com/in/ram-chandra-nayak-7594a121a/)
- 🐙 **GitHub**: [@Ram-Nayak-16](https://github.com/Ram-Nayak-16)


# Render Deployment Guide for CrazyBite Food Delivery App

This document provides step-by-step instructions for deploying the **backend**, **frontend**, and **admin** services on [Render](https://render.com/).

---

## 🚀 Option 1: Blueprint Deployment (Recommended)

Render Blueprints automatically parse the included `render.yaml` file to set up all 3 components at once.

### Steps:
1. **Push Changes to GitHub**:
   Ensure your latest code and `render.yaml` are pushed to your GitHub repository (`Ram-Nayak-16/Food-Delivery`).

2. **Create New Blueprint on Render**:
   - Go to [Render Dashboard](https://dashboard.render.com/).
   - Click **New +** in the top right corner and select **Blueprint**.
   - Connect your GitHub repository (`Ram-Nayak-16/Food-Delivery`).

3. **Configure Environment Variables**:
   - `MONGO_URL`: Add your MongoDB Atlas connection string (e.g., `mongodb+srv://<user>:<password>@cluster0.mongodb.net/food-del`).
   - `VITE_BACKEND_URL`: Enter your deployed backend URL once generated (e.g., `https://food-delivery-backend.onrender.com`).

4. **Deploy**:
   - Click **Apply**. Render will automatically provision and deploy:
     - `food-delivery-backend` (Node Web Service)
     - `food-delivery-frontend` (Static Site)
     - `food-delivery-admin` (Static Site)

---

## 🛠️ Option 2: Manual Deployment (Service-by-Service)

If you prefer to configure each service manually on Render, follow these steps:

### 1. Backend Web Service (`food-delivery-backend`)
- **Type**: Web Service
- **Environment**: Node
- **Root Directory**: `backend`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment Variables**:
  - `NODE_ENV`: `production`
  - `JWT_SECRET`: `your_jwt_secret_key`
  - `MONGO_URL`: `your_mongodb_atlas_connection_string`

---

### 2. Frontend Static Site (`food-delivery-frontend`)
- **Type**: Static Site
- **Root Directory**: `frontend`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Redirects/Rewrites**:
  - **Source**: `/*`
  - **Destination**: `/index.html`
  - **Action**: Rewrite
- **Environment Variables**:
  - `VITE_BACKEND_URL`: `https://food-delivery-backend.onrender.com`

---

### 3. Admin Static Site (`food-delivery-admin`)
- **Type**: Static Site
- **Root Directory**: `admin`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Redirects/Rewrites**:
  - **Source**: `/*`
  - **Destination**: `/index.html`
  - **Action**: Rewrite
- **Environment Variables**:
  - `VITE_BACKEND_URL`: `https://food-delivery-backend.onrender.com`

---

## 🔑 Post-Deployment Checklist

- [ ] Update `VITE_BACKEND_URL` in both `frontend` and `admin` settings on Render to point to your live backend URL (`https://<your-backend>.onrender.com`).
- [ ] If using MongoDB Atlas, ensure Network Access allows `0.0.0.0/0` (Anywhere) so Render IP addresses can connect.

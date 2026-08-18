@echo off
echo Starting CrazyBite Food Delivery Local Services...

start "Backend Server (Port 4000)" cmd /k "cd backend && npm start"
start "Frontend Store (Port 5173)" cmd /k "cd frontend && npm run dev"
start "Admin Dashboard (Port 5174)" cmd /k "cd admin && npm run dev"

echo All services launched in separate terminal windows!

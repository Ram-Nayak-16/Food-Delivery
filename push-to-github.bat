@echo off
echo ========================================================
echo   Pushing CrazyBite UI Enhancements to GitHub Repository
echo ========================================================
echo.

git add .
git commit -m "Upgrade UI design system, glassmorphism components, and local scratch setup"
git push -u origin main --force

echo.
echo ========================================================
echo SUCCESS! All UI enhancements pushed to GitHub!
echo ========================================================
pause

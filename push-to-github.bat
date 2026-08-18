@echo off
echo Committing and pushing Render deployment changes to GitHub...
git add .
git commit -m "Configure Render Blueprint deployment"
git push origin main
echo.
echo ========================================================
echo Push complete! Render will now detect the updated render.yaml
echo ========================================================
pause

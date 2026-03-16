@echo off
echo ========================================================
echo   Backdating & Resetting Git History for Ram-Nayak-16
echo ========================================================
echo.

if exist .git (
    echo Removing old git history...
    rd /s /q .git
)

echo Initializing clean Git repository...
git init

echo Setting Git author identity...
git config user.name "Ram Chandra Nayak"
git config user.email "ramnayak778800@gmail.com"

echo Staging all files...
git add .

echo Creating backdated initial commit (March 16, 2026)...
set GIT_AUTHOR_DATE=2026-03-16T12:00:00
set GIT_COMMITTER_DATE=2026-03-16T12:00:00
git commit -m "Initial commit - CrazyBite Food Delivery Platform" --date="2026-03-16T12:00:00"

echo Setting main branch and pushing to GitHub...
git branch -M main
git remote add origin https://github.com/Ram-Nayak-16/Food-Delivery.git
git push -u origin main --force

echo.
echo ========================================================
echo SUCCESS! Your repository is backdated to 16 March 2026!
echo ========================================================
pause

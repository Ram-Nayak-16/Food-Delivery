@echo off
echo Pushing README updates to GitHub...
git add .
git commit -m "Add Render and Vercel live links to README"
git push -u origin main --force
echo Push completed successfully!
pause

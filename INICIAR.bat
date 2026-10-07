@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Necesitas Node.js o abrir index.html con Live Server en Visual Studio Code.
  pause
  exit /b 1
)
start "UniDash - servidor" cmd /k "node server.mjs"
timeout /t 2 /nobreak >nul
start "" "http://localhost:5500"

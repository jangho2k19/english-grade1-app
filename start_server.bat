@echo off
title Tieng Anh 1 - Global Success Web Server
cd /d "%~dp0"
echo ========================================================
echo   🌟 Dang khoi dong may chu Tieng Anh 1 - Global Success
echo   👉 Vui long truy cap: http://localhost:3000
echo ========================================================
python -m http.server 3000
if %errorlevel% neq 0 (
    python3 -m http.server 3000
)
pause

@echo off
rem Serves the exported site in .\out\ over HTTP.
rem Lives here, NOT inside out\, because `next build` wipes that folder.
cd /d "%~dp0out"
set PORT=8898

if not exist "index.html" (
  echo.
  echo   out\index.html not found. Run:  npx next build
  echo.
  pause
  exit /b 1
)

where py >nul 2>nul
if %errorlevel%==0 (set PY=py) else (set PY=python)

echo ============================================
echo   practice1 - Local Preview
echo   http://localhost:%PORT%/
echo ============================================
echo.
echo   Browser opens in 2 seconds.
echo   CLOSE THIS WINDOW to stop the server.
echo.

start /min "" cmd /c "ping -n 3 127.0.0.1 >nul && explorer http://localhost:%PORT%/"
%PY% -m http.server %PORT% --bind 127.0.0.1

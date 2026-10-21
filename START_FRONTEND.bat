@echo off
cd /d "%~dp0frontend"
if not exist node_modules call npm install
echo Starting ProofBeforePay frontend...
npm run dev
pause

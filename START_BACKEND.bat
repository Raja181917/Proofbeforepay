@echo off
cd /d "%~dp0backend"
echo Starting ProofBeforePay backend...
mvn spring-boot:run
pause

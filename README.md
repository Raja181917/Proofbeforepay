# ProofBeforePay

ProofBeforePay is a full-stack web application for organizing payment requests and tracking supporting proof/review status.

## Technology stack
- **Frontend:** React, JavaScript, CSS, Vite
- **Backend:** Java, Spring Boot, Spring Web
- **Persistence:** Spring Data JPA, Hibernate
- **Database:** Oracle Database
- **Build tools:** npm and Maven

## Repository structure
```text
ProofBeforePay/
├── backend/                 # Spring Boot API and database configuration
├── frontend/                # React + Vite application
├── database/                # Oracle setup notes
├── docs/                    # API examples
├── .env.example             # Safe environment-variable template
├── .gitignore
├── START_BACKEND.bat        # Windows helper
└── START_FRONTEND.bat       # Windows helper
```

## Prerequisites
- Java 17 or the version specified in `backend/pom.xml`
- Maven
- Node.js LTS and npm
- An Oracle database and valid credentials

## Configure Oracle
The application reads its database settings from environment variables. Set these values in your terminal or IDE before starting the backend:

- `SPRING_DATASOURCE_URL`
- `SPRING_DATASOURCE_USERNAME`
- `SPRING_DATASOURCE_PASSWORD`
- Optional: `SPRING_JPA_HIBERNATE_DDL_AUTO`
- Optional: `PORT`

The default URL in the configuration is `jdbc:oracle:thin:@//localhost:1522/orcldeee`; update it to match your own Oracle listener and service name. Never commit real passwords or secrets to GitHub.

## Run the backend
Open a terminal in `backend/`:

```bash
mvn spring-boot:run
```

The backend is configured for port `8080` by default. If the health endpoint is enabled, check `http://localhost:8080/api/health`.

## Run the frontend
Open another terminal in `frontend/`:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173` or another available port.

## Windows helper scripts
From the project root, you can use `START_BACKEND.bat` and `START_FRONTEND.bat` in separate terminal windows. Configure Oracle environment variables first.

## Current functionality
The project source includes account registration/login, payment-request and proof/review workflows, and profile password-change functionality. Check the running application and source before relying on a feature.

## Security note
The current implementation does not provide a complete authenticated session / authorization model for every protected operation. Do not deploy it publicly with real user data until authentication, authorization, HTTPS, rate limiting and production configuration have been reviewed and tested.

## Upload to GitHub
1. Extract this ZIP.
2. Create a new **empty** repository on GitHub.
3. In the extracted project folder, open a terminal and run:

```bash
git init
git add .
git status
git commit -m "Initial ProofBeforePay project"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your own repository URL. Before `git add .`, confirm no real credentials, `.env` files, database exports or private data are included.

See `docs/API_EXAMPLES.md` and `database/ORACLE_SETUP.md` for additional notes.

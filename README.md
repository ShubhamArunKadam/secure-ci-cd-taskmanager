# 🚀 Secure CI/CD Task Manager

A beginner-friendly, full-stack task manager app built with a complete DevSecOps pipeline — featuring Docker, GitHub Actions, Trivy, and AWS deployment.

---

## 🧩 Tech Stack

| Layer      | Tech                       |
|------------|----------------------------|
| Frontend   | React                      |
| Backend    | Node.js + Express          |
| Database   | MongoDB Atlas              |
| Container  | Docker + Docker Compose    |
| CI/CD      | GitHub Actions             |
| Security   | Trivy, npm audit, ESLint   |
| Hosting    | AWS EC2 (Ubuntu)           |

---

## 📁 Folder Structure

```
secure-ci-cd-taskmanager/
├── client/             # React frontend
├── server/             # Express backend
├── .github/workflows/  # GitHub Actions CI/CD
├── docker-compose.yml  # Docker orchestration
```

---

## ✅ Features

- 🐳 Dockerized React + Express app
- 🔁 GitHub Actions pipeline with linting, audits, and security scans
- 🔍 Trivy scans file system and Docker images
- ☁️ Deployed to AWS EC2 using Docker Compose
- 🔐 Uses GitHub PAT for secure repo push

---

## 🧠 How to Run (Locally)

1. Clone the repo:
   ```bash
   git clone https://github.com/YOUR_USERNAME/secure-ci-cd-taskmanager.git
   cd secure-ci-cd-taskmanager
   ```

2. Create `.env` inside `/server/` with:
   ```
   MONGO_URI=your_mongodb_atlas_connection_string
   ```

3. Build and run using Docker:
   ```bash
   docker-compose up --build
   ```

4. Visit `http://localhost:3000` to use the app

---

## 🔧 GitHub Actions CI

Every push to `main` will:

- 🔍 Lint frontend with ESLint
- 📦 Audit packages with `npm audit`
- 🛡️ Run Trivy file system scan
- 🐳 Build Docker images
- 🔐 Run Trivy Docker image scan
- ☁️ Push images to Docker Hub (using secrets)

---

## ☁️ Deploy to AWS EC2

1. Launch EC2 Ubuntu instance
2. Install Docker & Docker Compose
3. Clone the repo
4. Add your `.env` to `server/`
5. Run:

```bash
docker-compose up --build -d
```

Make sure ports 22, 3000, and 5000 are open.

---

## 🛡️ Security Tools Used

| Tool      | Purpose                    |
|-----------|----------------------------|
| ESLint    | JavaScript code quality    |
| npm audit | Node package vulnerability |
| Trivy     | CVE scan for FS + images   |

---

## 📌 Author

Developed by **Shubhztechwork — Simplifying Tech, Amplifying Growth**  


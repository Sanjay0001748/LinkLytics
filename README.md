# 🔗 LinkLytics – Custom URL Shortener

LinkLytics is a custom-built URL shortener web application that allows users to shorten long URLs, manage their links, and track usage. It comes with user authentication (JWT), a sleek frontend UI, and is hosted on a custom domain using AWS EC2 and NGINX.

🌐 **Live Demo**: [https://projectex.xyz](https://projectex.xyz)

---

## 🚀 Features

- 🔐 **JWT Authentication** (Login / Register)
- ✂️ **Custom URL Shortening**
- 👤 **User Dashboard** to manage & view created links
- 🌍 **Public and Private Routes**
- 💡 **Protected URL creation & history tracking**
- 🛡️ **Hosted with HTTPS on a custom domain**
- ☁️ **Backend deployed on AWS EC2 with NGINX + SSL (Let's Encrypt)**

---

## 🛠️ Tech Stack

### Frontend
- **ReactJS** (with Vite)
- **Tailwind CSS** & **Framer Motion** for styling & animations
- Axios for API calls
- React Router DOM

### Backend
- **Spring Boot** (Java)
- JWT for authentication
- PostgreSQL for database
- CORS configuration for domain-level access

### Deployment
- AWS EC2 (Amazon Linux 2)
- NGINX as reverse proxy server
- Let’s Encrypt for SSL certification
- Custom domain via Freenom

---

## 📁 Project Structure
LinkLytics/ │ ├── frontend/ (React) │ ├── public/ │ └── src/ │ ├── components/ │ ├── pages/ │ └── main.jsx │ ├── backend/ (Spring Boot) │ └── src/ │ ├── controller/ │ ├── service/ │ ├── config/ │ └── model/ │ ├── nginx/ │ └── nginx.conf │ └── README.md
Frontend
cd frontend
npm install
npm run dev
Deployment (AWS + NGINX + HTTPS)
EC2 instance setup (Amazon Linux 2)

Open ports 80, 443, and 8080 in AWS Security Group

Installed Certbot and NGINX

Linked domain to EC2 public IP

Configured NGINX reverse proxy with SSL

Setup HTTPS using Let’s Encrypt

 Authentication Flow
Users register/login via frontend

JWT is generated and stored securely (HttpOnly cookie)

Authenticated users can access /shorten and view their URLs

Unauthorized access is restricted via backend filters

Author
Sanjay KC

GitHub: @Sanjay0001748

Portfolio: Coming Soon 🚀

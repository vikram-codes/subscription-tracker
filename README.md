<p align="center">
  <img src="./banner.png" alt="SubDub Banner" width="40%" />
</p>

# 📬 SubDub - My Backend Learning Journey

Manage recurring subscriptions with ease.  
Built with Node.js, Express, and MongoDB, SubDub is a RESTful API that helps users track renewals, receive email reminders, and stay on top of payments.

> **Note:** This is a learning project focused on backend development - no frontend included!

---

## 🔧 Tech Stack

- **Node.js** + **Express.js** – Backend server & API routing
- **MongoDB** + **Mongoose** – NoSQL database with schema validation
- **JWT Auth** – Secure authentication & authorization
- **Nodemailer** – Send real-time reminder emails
- **Upstash QStash** – Serverless workflows for email automation
- **Arcjet** – Middleware for rate limiting & bot protection
- **Day.js** – Elegant date management
- **dotenv** – Configurable environments
- **cookie-parser** – Handle cookies with ease

---

## ✨ Features

- ✅ User Registration & Login (with hashed passwords)
- 🔐 JWT-based Auth with protected routes
- 📅 Smart Subscription Management (status, renewal dates, etc.)
- 📬 Automated Email Reminders via QStash
- 🛡️ Arcjet Security Middleware Integration
- 🔥 Global Error Handling & Custom Middlewares
- 🧪 Clean, modular architecture

---

## 🚀 Getting Started

### 🛠️ Prerequisites

- **Node.js** + **Express.js** – Core backend framework
- **MongoDB** + **Mongoose** – Database and ODM
- **JWT** – Authentication tokens
- **bcryptjs** – Password hashing
- **Nodemailer** – Email functionality
- **Upstash QStash** – Background job scheduling
- **Arcjet** – Rate limiting and bot protection
- **Day.js** – Date manipulation

---

## 🚀 Quick Start

```bash
# Clone and setup
git clone https://github.com/vikram-codes/subscription-tracker.git
cd subscription-tracker
npm install

# Start development server
npm run dev
```

**Prerequisites for local testing:**

- Node.js v18+
- MongoDB Atlas account
- Gmail app password (for email features)
- Upstash account (for background jobs)

---

## � Project Structure

```
subscription-tracker/
├── config/              # Environment & service configurations
├── controllers/         # Business logic (auth, subscriptions, workflows)
├── database/            # MongoDB connection setup
├── middlewares/         # Custom middleware (auth, errors, security)
├── models/              # Mongoose schemas
├── routes/              # API route definitions
├── utils/               # Helper functions (email templates, etc.)
└── app.js               # Application entry point
```

---

## � What I Built

### Core Features

- **User Management** – Registration, login, profile updates
- **Subscription Tracking** – CRUD operations for subscription data
- **Email Reminders** – Automated notifications before renewal dates
- **JWT Authentication** – Secure, stateless user sessions
- **Input Validation** – Mongoose schemas with proper validation
- **Error Handling** – Centralized error middleware

### API Endpoints

- `POST /api/v1/auth/register` – User registration
- `POST /api/v1/auth/login` – User authentication
- `GET /api/v1/subscriptions` – Get user subscriptions
- `POST /api/v1/subscriptions` – Create new subscription
- `PUT /api/v1/subscriptions/:id` – Update subscription
- `DELETE /api/v1/subscriptions/:id` – Delete subscription
- `POST /api/v1/workflows/subscription/reminder` – Manual reminder trigger

---

## 🔧 Environment Setup

Create `.env.development.local` file:

```env
PORT=5500
NODE_ENV=development
DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
EMAIL_PASSWORD=your_gmail_app_password
QSTASH_TOKEN=your_upstash_token
ARCJET_KEY=your_arcjet_key
```

---

## 📚 Key Learning Outcomes

### Database Design

- Learned to model relationships between users and subscriptions
- Implemented proper indexing and validation rules
- Used Mongoose middleware for data preprocessing

### Security Implementation

- JWT token generation and verification
- Password hashing with bcrypt
- Rate limiting and bot protection with Arcjet
- Input sanitization and validation

### Asynchronous Operations

- Email sending with Nodemailer
- Background job scheduling with Upstash QStash
- Proper error handling for async operations

### Code Organization

- Modular architecture with separation of concerns
- Custom middleware for reusable functionality
- Environment-based configuration management

---

## 🎓 Challenges & Solutions

**Challenge:** Managing subscription renewal dates and timely reminders  
**Solution:** Integrated Upstash QStash for reliable background job scheduling

**Challenge:** Securing API endpoints without sessions  
**Solution:** Implemented JWT-based authentication with middleware protection

**Challenge:** Email delivery reliability  
**Solution:** Used Nodemailer with Gmail SMTP and proper error handling

---

## 🔮 Future Learning Goals

- [ ] Add comprehensive unit and integration tests
- [ ] Implement API documentation with Swagger
- [ ] Explore containerization with Docker
- [ ] Add logging with Winston
- [ ] Implement database migrations
- [ ] Add GraphQL endpoints
- [ ] Explore microservices architecture

---

## 🚀 About Me

I'm Vikram, passionate about backend development and always learning new technologies.

**Connect with me:**

- [LinkedIn](https://www.linkedin.com/in/vikramjit-saini/)
- [GitHub](https://github.com/vikram-codes/)

---

## 📝 License

This project is for educational purposes. Feel free to explore, learn, and adapt!

---

_Built with ❤️ as part of my backend development learning journey_

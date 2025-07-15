<p align="center">
  <img src="./banner.png" alt="SubDub Banner" width="100%" />
</p>

# 📬 SubDub - Subscription Tracker API

Manage recurring subscriptions with ease.  
Built with Node.js, Express, and MongoDB, SubDub is a RESTful API that helps users track renewals, receive email reminders, and stay on top of payments.

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

- Node.js v18+ installed
- MongoDB Atlas cluster & URI
- Gmail App Password (for Nodemailer)
- Upstash account for QStash
- Arcjet account (optional but recommended)

---

### 🧑‍💻 Local Setup

```bash
# Clone the repo
git clone https://github.com/vikram-codes/subscription-tracker.git
cd subscription-tracker

# Install dependencies
npm install

# Run the dev server
npm run dev
🛠️ Environment Variables
Create a .env.development.local file in the root directory with the following variables.
Replace the placeholders with your actual credentials.

<details> <summary>Click to expand environment variables example</summary>
env
Copy
Edit
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV="development"

# DATABASE
DB_URI="mongodb+srv://vikram:VikramMongoDB69@cluster0.shevzb5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# JWT AUTH
JWT_SECRET="secret"
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY="ajkey_01k03wy38hff2v0en7sredmr7a"
ARCJET_ENV="development"

# QSTASH (Upstash Local Dev)
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN="eyJVc2VySUQiOiJkZWZhdWx0VXNlciIsIlBhc3N3b3JkIjoiZGVmYXVsdFBhc3N3b3JkIn0="

# NODEMAILER (Gmail App Password)
EMAIL_PASSWORD="icmzdqkpjcthyvnp"
</details>
📬 Reminder Email Testing (Local)
You can manually test email reminders by making a POST request:

POST /api/v1/workflows/subscription/reminder

JSON Body:

json
Copy
Edit
{
  "subscriptionId": "your_subscription_id_here"
}
Make sure the subscription:

Is active

Has a valid renewal date

Belongs to a user with a valid email

🧪 Folder Structure
pgsql
Copy
Edit
subscription-tracker/
│
├── config/              # Env vars, nodemailer, upstash
├── controllers/         # Logic for auth, users, subscriptions, workflows
├── database/            # MongoDB connection
├── middlewares/         # Error handler, Arcjet, auth check
├── models/              # User and Subscription schemas
├── routes/              # All API routes
├── utils/               # send-email helper
├── app.js               # Main entry point
└── .env.development.local (excluded from Git)
📎 Notes
Reminder emails are scheduled using Upstash QStash.

This is a backend-only API, no frontend UI provided.

For instant reminder testing, set REMINDERS = [0] in workflow.controller.js and trigger manually.

📚 License
This project is open source under the MIT License.

🔗 Project Link
View on GitHub
```

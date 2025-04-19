
# eCommerce Web Application

A fully deployable full-stack eCommerce web application built with Next.js, React, Tailwind CSS, and PostgreSQL.

## Features

- **Frontend Pages**:
  - Landing Page
  - Products Page
  - Cart Page
  - Checkout Page

- **Admin Section**:
  - Admin Login/Logout
  - Admin Dashboard
  - Product Management (Add, Edit, Delete)
  - Order Management

- **Backend & API**:
  - REST API endpoints
  - Authentication with JWT
  - Database integration with Prisma ORM

## Tech Stack

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Node.js (integrated with Next.js API routes)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Custom JWT-based authentication

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- PostgreSQL database

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/ecommerce-app.git
   cd ecommerce-app
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Update the values with your database credentials and JWT secret

4. Set up the database:
   \`\`\`bash
   npx prisma migrate dev --name init
   \`\`\`

5. Seed the database with initial data:
   \`\`\`bash
   npm run seed
   \`\`\`

6. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

7. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Admin Access

After seeding the database, you can log in to the admin panel with:
- Email: admin@example.com
- Password: admin123

Access the admin panel at [http://localhost:3000/admin](http://localhost:3000/admin)

## Deployment

1. Set up your PostgreSQL database on your preferred provider.
2. Configure the environment variables on your hosting platform.
3. Deploy the application.


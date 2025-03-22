# Krumalabs Better Auth Next.js Starter

<div align="center">
  <img src="public/svg-logo/Logo (black).svg" alt="Krumalabs Logo" width="200" />
</div>

A production-ready Next.js starter template with authentication, user management, and admin features built with [Better Auth](https://github.com/theodenanyoh/better-auth).

## Features

- 🔐 Authentication with email/password and social providers
- 👥 User management with roles (admin/user)
- 🛡️ Protected routes and middleware
- 📧 Email verification and password reset
- 👤 User impersonation for admins
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 📱 Fully responsive design
- 🔒 Type-safe with TypeScript
- 🗄️ PostgreSQL database with Prisma ORM

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Krumalabs-better-auth-nextjs-starter.git
cd Krumalabs-better-auth-nextjs-starter
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up your environment variables:
```bash
cp .env.example .env
```

4. Update the `.env` file with your database and email service credentials.

5. Set up the database:
```bash
pnpm prisma db push
```

6. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

- [Better Auth Documentation](https://github.com/theodenanyoh/better-auth) - Learn about Better Auth features and API
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Prisma Documentation](https://www.prisma.io/docs) - Learn about Prisma ORM

## License

MIT

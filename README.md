# BhoomiKart - Real Estate Platform

![BhoomiKart Logo](public/logo.png)

BhoomiKart is a modern real estate platform built with Next.js, TypeScript, and Tailwind CSS. It provides a seamless experience for property buyers, sellers, and agents to connect and transact.

## 🚀 Features

- **Property Listings**
  - Advanced search and filtering
  - Detailed property information
  - High-quality property images
  - Location-based search

- **User Authentication**
  - Email/Phone login and registration
  - Social login (Google, Facebook)
  - Secure password handling
  - User role management (Buyer, Seller, Agent)

- **User Dashboard**
  - Property management
  - Saved properties
  - Inquiries and messages
  - Profile management

- **Modern UI/UX**
  - Responsive design
  - Dark mode support
  - Loading states and animations
  - Form validation and error handling

## 🛠️ Tech Stack

- **Frontend**
  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - Shadcn UI Components
  - React Hook Form
  - Zod Validation

- **Backend**
  - Next.js API Routes
  - Prisma ORM
  - PostgreSQL Database

- **Authentication**
  - NextAuth.js
  - JWT Tokens
  - OAuth Providers

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bhoomikart.git
   cd bhoomikart
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Fill in the required environment variables in `.env.local`.

4. Run the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/bhoomikart"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
FACEBOOK_CLIENT_ID="your-facebook-client-id"
FACEBOOK_CLIENT_SECRET="your-facebook-client-secret"
```

## 📁 Project Structure

```
bhoomikart/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── (auth)/            # Authentication pages
│   ├── (dashboard)/       # Dashboard pages
│   └── (properties)/      # Property pages
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── features/         # Feature components
├── lib/                  # Utility functions
├── prisma/              # Database schema
└── public/              # Static assets
```

## 🎨 UI Components

The project uses Shadcn UI components with custom styling:

- Button
- Input
- Form
- Card
- Dialog
- Dropdown Menu
- Toast
- Tabs
- Radio Group
- Checkbox
- Separator

## 🔐 Authentication

The authentication system includes:

- Email/Phone registration and login
- Social authentication (Google, Facebook)
- Password reset functionality
- Session management
- Role-based access control

## 📱 Responsive Design

The application is fully responsive and works on:

- Desktop
- Tablet
- Mobile devices

## 🎯 Features in Development

- [ ] Property comparison tool
- [ ] Virtual property tours
- [ ] Mortgage calculator
- [ ] Property valuation tool
- [ ] Agent rating system
- [ ] Property alerts
- [ ] Document management
- [ ] Payment integration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)

## 📞 Support

For support, email support@bhoomikart.com or join our Slack channel.

## 📊 Analytics

The project includes:

- Google Analytics integration
- Performance monitoring
- Error tracking
- User behavior analytics

## 🔒 Security

Security features include:

- CSRF protection
- XSS prevention
- SQL injection prevention
- Rate limiting
- Secure password hashing
- HTTPS enforcement

## 🧪 Testing

The project includes:

- Unit tests
- Integration tests
- End-to-end tests
- Performance tests
- Security tests

## 📈 Performance Optimization

Optimizations include:

- Image optimization
- Code splitting
- Lazy loading
- Caching strategies
- Bundle size optimization

## 🌐 Internationalization

The application supports:

- Multiple languages
- RTL layouts
- Localized content
- Currency conversion
- Timezone handling

## 🚀 Deployment

Deployment options:

- Vercel
- AWS
- Docker
- Kubernetes

## 📚 Documentation

Additional documentation:

- [API Documentation](docs/api.md)
- [Database Schema](docs/database.md)
- [Component Library](docs/components.md)
- [Authentication Guide](docs/auth.md)
- [Deployment Guide](docs/deployment.md) 
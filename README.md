# Restate - Property Management System

A comprehensive full-stack property management solution built with Django REST Framework backend and React frontend. The application provides property owners and managers with tools to manage rental properties, tenants, payments, and maintenance requests efficiently.

## 🏠 Features

### Core Functionality
- **Property Management**: Add, edit, and manage rental properties with detailed information
- **Tenant Management**: Track tenant information, lease agreements, and contact details
- **Rental Collection**: Monitor rent payments, generate receipts, and track payment history
- **Maintenance Requests**: Handle property maintenance and repair requests
- **Dashboard Analytics**: View property performance metrics and financial summaries
- **Document Management**: Store and organize lease agreements, receipts, and property documents

### Technical Features
- RESTful API with Django REST Framework
- JWT-based authentication and authorization
- Responsive React frontend with modern UI components
- Multi-database support (PostgreSQL + MongoDB)
- Docker containerization for easy deployment
- Production-ready configuration with Nginx reverse proxy

## 🛠️ Tech Stack

### Backend
- **Framework**: Django 4.x + Django REST Framework
- **Database**: PostgreSQL (primary), MongoDB (documents/logs)
- **Authentication**: JWT (djangorestframework-simplejwt)
- **API Documentation**: Django REST Framework browsable API

### Frontend
- **Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: CSS3 with responsive design
- **HTTP Client**: Axios for API communication

### Infrastructure
- **Containerization**: Docker & Docker Compose
- **Web Server**: Nginx (reverse proxy)
- **Database**: PostgreSQL 16, MongoDB 7
- **Environment**: Production & Development configurations

## 📋 Prerequisites

Before running the application, ensure you have:

- **Docker Desktop** (recommended) or Docker Engine + Docker Compose
- **Node.js** 16+ and **npm** (for local development)
- **Python** 3.9+ (for local development)
- **Git** for version control

## 🚀 Quick Start with Docker

### 1. Clone the Repository
```bash
git clone https://github.com/syedzeeeshan/restatefend.git
cd restatefend
```

### 2. Environment Configuration
Create a `.env.prod` file in the root directory:
```bash
# Django Core
SECRET_KEY=your-super-secret-django-key-change-me
DEBUG=0
ALLOWED_HOSTS=localhost,127.0.0.1,your-domain.com

# PostgreSQL Database
POSTGRES_DB=realestate
POSTGRES_USER=realuser
POSTGRES_PASSWORD=your-secure-password
POSTGRES_HOST=postgres
POSTGRES_PORT=5432

# MongoDB Database
MONGO_URI=mongodb://mongo:27017
MONGO_DB=realestate

# CORS / CSRF Configuration
CORS_ALLOWED_ORIGINS=http://localhost,http://127.0.0.1,http://localhost:80
CSRF_TRUSTED_ORIGINS=http://localhost,http://127.0.0.1,http://localhost:80
```

### 3. Build and Run with Docker Compose
```bash
# Build and start all services
docker-compose -f docker-compose.prod.yml up --build

# Run in background (detached mode)
docker-compose -f docker-compose.prod.yml up -d --build
```

### 4. Initialize the Database
```bash
# Run Django migrations
docker-compose exec backend python manage.py makemigrations
docker-compose exec backend python manage.py migrate

# Create a superuser account
docker-compose exec backend python manage.py createsuperuser

# Collect static files
docker-compose exec backend python manage.py collectstatic --noinput
```

### 5. Access the Application
- **Frontend**: http://localhost
- **Backend API**: http://localhost/api/
- **Django Admin**: http://localhost/admin/

## 🐳 Docker Services Architecture

The application runs on multiple interconnected Docker containers:

### Services Overview
```
┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │
│   (React)       │    │   (Django)      │
│   Port: 3000    │    │   Port: 8000    │
└─────────────────┘    └─────────────────┘
         │                       │
         └───────────┬───────────┘
                     │
┌─────────────────────────────────────────┐
│            Nginx Proxy                  │
│            Port: 80                     │
└─────────────────────────────────────────┘
         │                       │
┌─────────────────┐    ┌─────────────────┐
│   PostgreSQL    │    │   MongoDB       │
│   Port: 5432    │    │   Port: 27017   │
└─────────────────┘    └─────────────────┘
```

### Container Details

#### 1. **Frontend Container**
- **Image**: Custom React build
- **Context**: `./f/csc-app`
- **Purpose**: Serves the React application
- **Network**: Connected to `appnet`

#### 2. **Backend Container**
- **Image**: Custom Django build
- **Context**: `./b/restate`
- **Port**: 8000 (internal)
- **Dependencies**: PostgreSQL, MongoDB
- **Volumes**: `static_volume` for Django static files
- **Environment**: Loads from `.env.prod`

#### 3. **PostgreSQL Database**
- **Image**: `postgres:16`
- **Volume**: `postgres_data` for data persistence
- **Configuration**: Environment variables from `.env.prod`

#### 4. **MongoDB Database**
- **Image**: `mongo:7`
- **Volume**: `./db/mongo/data` for data persistence
- **Purpose**: Document storage and logging

#### 5. **Nginx Proxy**
- **Context**: `./b/restate/reverse-proxy`
- **Port**: 80 (exposed to host)
- **Purpose**: Routes traffic between frontend and backend
- **Dependencies**: Frontend and Backend services

## 🔧 Docker Commands

### Essential Docker Operations

#### Start Services
```bash
# Start all services
docker-compose -f docker-compose.prod.yml up

# Start in background
docker-compose -f docker-compose.prod.yml up -d

# Rebuild and start
docker-compose -f docker-compose.prod.yml up --build
```

#### Stop Services
```bash
# Stop all services
docker-compose -f docker-compose.prod.yml down

# Stop and remove volumes
docker-compose -f docker-compose.prod.yml down -v

# Stop and remove images
docker-compose -f docker-compose.prod.yml down --rmi all
```

#### Service Management
```bash
# View running containers
docker-compose -f docker-compose.prod.yml ps

# View logs
docker-compose -f docker-compose.prod.yml logs

# Follow logs for specific service
docker-compose -f docker-compose.prod.yml logs -f backend

# Execute commands in running container
docker-compose exec backend python manage.py shell
docker-compose exec postgres psql -U realuser -d realestate
```

#### Database Operations
```bash
# Django database operations
docker-compose exec backend python manage.py makemigrations
docker-compose exec backend python manage.py migrate
docker-compose exec backend python manage.py createsuperuser

# PostgreSQL operations
docker-compose exec postgres createdb -U realuser additional_db
docker-compose exec postgres pg_dump -U realuser realestate > backup.sql

# MongoDB operations
docker-compose exec mongo mongosh realestate
```

## 🛠️ Local Development Setup

### Backend Development
```bash
# Navigate to backend directory
cd b/restate

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Start development server
python manage.py runserver
```

### Frontend Development
```bash
# Navigate to frontend directory
cd f/csc-app

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/login/` - User login
- `POST /api/auth/register/` - User registration
- `POST /api/auth/refresh/` - Refresh JWT token
- `POST /api/auth/logout/` - User logout

### Property Management
- `GET /api/properties/` - List all properties
- `POST /api/properties/` - Create new property
- `GET /api/properties/{id}/` - Get property details
- `PUT /api/properties/{id}/` - Update property
- `DELETE /api/properties/{id}/` - Delete property

### Tenant Management
- `GET /api/tenants/` - List all tenants
- `POST /api/tenants/` - Add new tenant
- `GET /api/tenants/{id}/` - Get tenant details
- `PUT /api/tenants/{id}/` - Update tenant information

### Payment Tracking
- `GET /api/payments/` - List all payments
- `POST /api/payments/` - Record new payment
- `GET /api/payments/{id}/` - Get payment details

## 🗂️ Project Structure

```
restatefend/
├── b/restate/              # Django Backend
│   ├── apps/               # Django applications
│   ├── config/             # Django settings
│   ├── requirements.txt    # Python dependencies
│   ├── Dockerfile         # Backend container config
│   └── reverse-proxy/     # Nginx configuration
├── f/csc-app/             # React Frontend
│   ├── src/               # React source code
│   ├── public/            # Static assets
│   ├── package.json       # Node.js dependencies
│   └── Dockerfile         # Frontend container config
├── db/                    # Database files
│   └── mongo/data/        # MongoDB data (gitignored)
├── docker-compose.prod.yml # Docker Compose configuration
├── .env.prod             # Environment variables
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## 🔒 Security Considerations

- **Environment Variables**: Never commit `.env.prod` to version control
- **Secret Key**: Generate a new Django SECRET_KEY for production
- **Database Passwords**: Use strong, unique passwords
- **CORS Settings**: Configure allowed origins appropriately
- **CSRF Protection**: Ensure CSRF_TRUSTED_ORIGINS matches your domain

## 🚀 Deployment

### Production Deployment Steps
1. **Server Setup**: Ensure Docker and Docker Compose are installed
2. **Domain Configuration**: Update `ALLOWED_HOSTS` and `CORS_ALLOWED_ORIGINS`
3. **SSL Certificate**: Configure HTTPS with Let's Encrypt or similar
4. **Environment Variables**: Secure your `.env.prod` file
5. **Database Backups**: Implement regular backup strategies
6. **Monitoring**: Set up logging and monitoring solutions

### Environment-Specific Configurations
- **Development**: Use `DEBUG=1` and localhost settings
- **Production**: Use `DEBUG=0`, proper domain names, and secure settings
- **Staging**: Mirror production settings with staging-specific domains

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact: [your-email@example.com]

## 🙏 Acknowledgments

- Django and Django REST Framework communities
- React and Vite development teams
- Docker and containerization technologies
- PostgreSQL and MongoDB database systems

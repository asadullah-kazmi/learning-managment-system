# LMS Backend API

A modular Node.js/Express backend for the Learning Management System with MongoDB database.

## 🏗️ Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js          # Database connection configuration
│   ├── controllers/
│   │   ├── academyController.js  # Academy business logic
│   │   ├── studentController.js  # Student business logic
│   │   ├── teacherController.js  # Teacher business logic
│   │   ├── courseController.js   # Course business logic
│   │   └── authController.js     # Authentication logic
│   ├── middleware/
│   │   ├── auth.js              # Authentication middleware
│   │   ├── errorHandler.js      # Error handling middleware
│   │   ├── notFound.js          # 404 handler
│   │   └── upload.js            # File upload middleware
│   ├── models/
│   │   ├── Academy.js           # Academy model
│   │   ├── Student.js           # Student model
│   │   ├── Teacher.js           # Teacher model
│   │   ├── Course.js            # Course model
│   │   └── index.js             # Model exports
│   ├── routes/
│   │   ├── academyRoutes.js     # Academy routes
│   │   ├── studentRoutes.js     # Student routes
│   │   ├── teacherRoutes.js     # Teacher routes
│   │   ├── courseRoutes.js      # Course routes
│   │   └── authRoutes.js        # Authentication routes
│   ├── utils/
│   │   ├── asyncHandler.js      # Async error handler
│   │   └── errorResponse.js     # Error response class
│   ├── server.js                # Express app configuration
│   └── index.js                 # Server entry point
├── uploads/                     # File upload directory
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/lms_db
   JWT_SECRET=your_jwt_secret_here
   JWT_EXPIRE=30d
   FRONTEND_URL=http://localhost:3000
   EMAIL_SERVICE=gmail
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   ```

4. **Start the server**

   ```bash
   # Development
   npm run dev

   # Production
   npm start
   ```

## 📚 API Endpoints

### Authentication

- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/logout` - User logout
- `GET /api/v1/auth/me` - Get current user
- `PUT /api/v1/auth/password` - Update password
- `POST /api/v1/auth/forgot-password` - Forgot password
- `POST /api/v1/auth/reset-password/:token` - Reset password
- `POST /api/v1/auth/verify-email/:token` - Verify email

### Academies

- `POST /api/v1/academies` - Register new academy
- `GET /api/v1/academies` - Get all academies
- `GET /api/v1/academies/:id` - Get single academy
- `PUT /api/v1/academies/:id` - Update academy
- `DELETE /api/v1/academies/:id` - Delete academy
- `GET /api/v1/academies/:id/stats` - Get academy statistics
- `POST /api/v1/academies/:id/administrators` - Add administrator
- `DELETE /api/v1/academies/:id/administrators/:adminId` - Remove administrator
- `POST /api/v1/academies/:id/logo` - Upload academy logo

### Students

- `POST /api/v1/students` - Register new student
- `GET /api/v1/students` - Get all students (Academy only)
- `GET /api/v1/students/:id` - Get single student
- `PUT /api/v1/students/:id` - Update student
- `DELETE /api/v1/students/:id` - Delete student
- `GET /api/v1/students/profile` - Get student profile
- `PUT /api/v1/students/profile` - Update student profile
- `GET /api/v1/students/stats` - Get student statistics
- `POST /api/v1/students/enroll/:academyId` - Enroll in academy
- `POST /api/v1/students/purchase/:courseId` - Purchase course
- `PUT /api/v1/students/progress/:courseId` - Update course progress

### Teachers

- `POST /api/v1/teachers` - Register new teacher
- `GET /api/v1/teachers` - Get all teachers (Academy only)
- `GET /api/v1/teachers/:id` - Get single teacher
- `PUT /api/v1/teachers/:id` - Update teacher
- `DELETE /api/v1/teachers/:id` - Delete teacher
- `GET /api/v1/teachers/profile` - Get teacher profile
- `PUT /api/v1/teachers/profile` - Update teacher profile
- `GET /api/v1/teachers/stats` - Get teacher statistics
- `POST /api/v1/teachers/join/:academyId` - Join academy
- `POST /api/v1/teachers/courses` - Create course
- `POST /api/v1/teachers/resume` - Upload resume

### Courses

- `GET /api/v1/courses` - Get all courses
- `GET /api/v1/courses/:id` - Get single course
- `POST /api/v1/courses` - Create course (Teacher only)
- `PUT /api/v1/courses/:id` - Update course (Teacher only)
- `DELETE /api/v1/courses/:id` - Delete course (Teacher only)
- `PUT /api/v1/courses/:id/publish` - Publish course (Teacher only)
- `POST /api/v1/courses/:id/modules` - Add module (Teacher only)
- `POST /api/v1/courses/:id/lessons` - Add lesson (Teacher only)
- `GET /api/v1/courses/:id/stats` - Get course statistics (Academy only)
- `POST /api/v1/courses/:id/thumbnail` - Upload thumbnail (Teacher only)
- `POST /api/v1/courses/:id/video` - Upload video (Teacher only)
- `GET /api/v1/courses/purchased` - Get purchased courses (Student only)

## 🔐 Authentication & Authorization

### User Types

- **Academy**: Can manage their academy, students, teachers, and courses
- **Teacher**: Can create and manage courses, join academies
- **Student**: Can enroll in academies, purchase courses, track progress

### JWT Token Structure

```json
{
  "id": "user_id",
  "userType": "academy|teacher|student",
  "iat": "issued_at",
  "exp": "expires_at"
}
```

## 🛡️ Security Features

- **Helmet**: Security headers
- **Rate Limiting**: API rate limiting
- **CORS**: Cross-origin resource sharing
- **Input Validation**: Request validation
- **File Upload Security**: File type and size restrictions
- **Password Hashing**: bcryptjs for password security

## 📊 Database Models

### Academy Model

- Basic information (name, email, phone, password)
- Address information
- Business details
- Administrator management
- Statistics tracking

### Student Model

- Personal information
- Academy enrollments (many-to-many)
- Course purchases (many-to-many)
- Learning progress tracking
- Preferences and settings

### Teacher Model

- Professional information
- Academy memberships (many-to-many)
- Course creation and management
- Teaching statistics
- Availability settings

### Course Model

- Course details and structure
- Module and lesson management
- Pricing and enrollment
- Statistics and analytics
- SEO and marketing features

## 🚀 Deployment

### Environment Variables

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb://your-mongodb-uri
JWT_SECRET=your-secure-jwt-secret
FRONTEND_URL=https://your-frontend-domain.com
```

### Production Commands

```bash
npm install --production
npm start
```

## 🧪 Testing

```bash
npm test
```

## 📝 License

This project is licensed under the ISC License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

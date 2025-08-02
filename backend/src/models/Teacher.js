import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    // Basic Information
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      maxlength: [50, "First name cannot exceed 50 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      maxlength: [50, "Last name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },

    // Personal Information
    dateOfBirth: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: [true, "Gender is required"],
    },
    profilePicture: {
      type: String, // URL to stored image
      default: null,
    },

    // Address Information
    address: {
      street: String,
      streetLine2: String,
      city: String,
      state: String,
      postalCode: String,
      country: {
        type: String,
        default: "Pakistan",
      },
    },

    // Professional Information
    qualification: {
      type: String,
      required: [true, "Qualification is required"],
    },
    specialization: [
      {
        type: String,
        required: [true, "At least one specialization is required"],
      },
    ],
    experience: {
      years: {
        type: Number,
        required: [true, "Years of experience is required"],
        min: [0, "Experience cannot be negative"],
      },
      description: String,
    },
    bio: {
      type: String,
      maxlength: [1000, "Bio cannot exceed 1000 characters"],
    },
    resume: {
      type: String, // URL to stored file
      default: null,
    },

    // Academy Relationships (Many-to-Many)
    academies: [
      {
        academy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Academy",
          required: true,
        },
        joinDate: {
          type: Date,
          default: Date.now,
        },
        status: {
          type: String,
          enum: ["active", "inactive", "suspended", "terminated"],
          default: "active",
        },
        role: {
          type: String,
          enum: [
            "teacher",
            "senior_teacher",
            "head_teacher",
            "coordinator",
            "admin",
          ],
          default: "teacher",
        },
        permissions: [
          {
            type: String,
            enum: [
              "create_courses",
              "edit_courses",
              "delete_courses",
              "manage_students",
              "view_analytics",
              "manage_teachers",
            ],
          },
        ],
        salary: {
          type: Number,
          default: 0,
        },
        isActive: {
          type: Boolean,
          default: true,
        },
      },
    ],

    // Course Management
    createdCourses: [
      {
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
          required: true,
        },
        academy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Academy",
          required: true,
        },
        creationDate: {
          type: Date,
          default: Date.now,
        },
        status: {
          type: String,
          enum: ["draft", "published", "archived", "deleted"],
          default: "draft",
        },
        isActive: {
          type: Boolean,
          default: true,
        },
      },
    ],

    // Teaching Statistics
    teachingStats: {
      totalCoursesCreated: {
        type: Number,
        default: 0,
      },
      totalStudentsTaught: {
        type: Number,
        default: 0,
      },
      averageRating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },
      totalReviews: {
        type: Number,
        default: 0,
      },
      totalEarnings: {
        type: Number,
        default: 0,
      },
      certificatesIssued: {
        type: Number,
        default: 0,
      },
    },

    // Schedule and Availability
    availability: {
      workingDays: [
        {
          type: String,
          enum: [
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
          ],
        },
      ],
      workingHours: {
        start: {
          type: String,
          default: "09:00",
        },
        end: {
          type: String,
          default: "17:00",
        },
      },
      timezone: {
        type: String,
        default: "Asia/Karachi",
      },
      isAvailable: {
        type: Boolean,
        default: true,
      },
    },

    // Preferences and Settings
    preferences: {
      language: {
        type: String,
        default: "en",
      },
      notifications: {
        email: {
          type: Boolean,
          default: true,
        },
        push: {
          type: Boolean,
          default: true,
        },
        sms: {
          type: Boolean,
          default: false,
        },
      },
      privacy: {
        profileVisibility: {
          type: String,
          enum: ["public", "private", "academy_only"],
          default: "academy_only",
        },
        showContactInfo: {
          type: Boolean,
          default: false,
        },
      },
    },

    // Status and Verification
    status: {
      type: String,
      enum: ["active", "inactive", "suspended", "deleted"],
      default: "active",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    phoneVerified: {
      type: Boolean,
      default: false,
    },
    backgroundVerified: {
      type: Boolean,
      default: false,
    },

    // Timestamps
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for full name
teacherSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// Virtual for age
teacherSchema.virtual("age").get(function () {
  if (!this.dateOfBirth) return null;
  const today = new Date();
  const birthDate = new Date(this.dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
});

// Virtual for active academies count
teacherSchema.virtual("activeAcademiesCount").get(function () {
  return this.academies.filter(
    (academy) => academy.isActive && academy.status === "active"
  ).length;
});

// Virtual for active courses count
teacherSchema.virtual("activeCoursesCount").get(function () {
  return this.createdCourses.filter(
    (course) => course.isActive && course.status === "published"
  ).length;
});

// Virtual for total earnings
teacherSchema.virtual("totalEarningsFormatted").get(function () {
  return `$${this.teachingStats.totalEarnings.toFixed(2)}`;
});

// Indexes for better query performance
teacherSchema.index({ status: 1 });
teacherSchema.index({ "academies.academy": 1 });
teacherSchema.index({ "createdCourses.course": 1 });
teacherSchema.index({ specialization: 1 });

// Pre-save middleware to update timestamps
teacherSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Static method to find active teachers
teacherSchema.statics.findActive = function () {
  return this.find({ status: "active" });
};

// Static method to find teachers by specialization
teacherSchema.statics.findBySpecialization = function (specialization) {
  return this.find({
    specialization: specialization,
    status: "active",
  });
};

// Instance method to join academy
teacherSchema.methods.joinAcademy = function (
  academyId,
  role = "teacher",
  permissions = []
) {
  const existingMembership = this.academies.find(
    (academy) => academy.academy.toString() === academyId.toString()
  );

  if (existingMembership) {
    existingMembership.isActive = true;
    existingMembership.status = "active";
    existingMembership.role = role;
    existingMembership.permissions = permissions;
  } else {
    this.academies.push({
      academy: academyId,
      role: role,
      permissions: permissions,
      joinDate: Date.now(),
    });
  }

  return this.save();
};

// Instance method to create course
teacherSchema.methods.createCourse = function (courseId, academyId) {
  const existingCourse = this.createdCourses.find(
    (course) =>
      course.course.toString() === courseId.toString() &&
      course.academy.toString() === academyId.toString()
  );

  if (!existingCourse) {
    this.createdCourses.push({
      course: courseId,
      academy: academyId,
      creationDate: Date.now(),
    });

    this.teachingStats.totalCoursesCreated += 1;
  }

  return this.save();
};

// Instance method to update teaching stats
teacherSchema.methods.updateTeachingStats = function (stats) {
  Object.assign(this.teachingStats, stats);
  return this.save();
};

// Instance method to calculate average rating
teacherSchema.methods.calculateAverageRating = function () {
  // This would typically be calculated from reviews
  return this.teachingStats.averageRating;
};

export default mongoose.model("Teacher", teacherSchema);

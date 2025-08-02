import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
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

    // Academic Information
    educationLevel: {
      type: String,
      enum: [
        "primary",
        "secondary",
        "high_school",
        "college",
        "university",
        "graduate",
        "other",
      ],
      required: [true, "Education level is required"],
    },
    currentInstitution: String,
    grade: String,
    major: String,

    // Academy Relationships (Many-to-Many)
    academies: [
      {
        academy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Academy",
          required: true,
        },
        enrollmentDate: {
          type: Date,
          default: Date.now,
        },
        status: {
          type: String,
          enum: ["active", "inactive", "suspended", "graduated"],
          default: "active",
        },
        role: {
          type: String,
          enum: ["student", "premium_student", "vip_student"],
          default: "student",
        },
        isActive: {
          type: Boolean,
          default: true,
        },
      },
    ],

    // Course Purchases (Many-to-Many)
    purchasedCourses: [
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
        purchaseDate: {
          type: Date,
          default: Date.now,
        },
        price: {
          type: Number,
          required: true,
        },
        paymentMethod: {
          type: String,
          enum: [
            "credit_card",
            "debit_card",
            "bank_transfer",
            "mobile_payment",
            "cash",
          ],
          required: true,
        },
        paymentStatus: {
          type: String,
          enum: ["pending", "completed", "failed", "refunded"],
          default: "pending",
        },
        transactionId: String,
        isActive: {
          type: Boolean,
          default: true,
        },
        progress: {
          type: Number,
          default: 0,
          min: 0,
          max: 100,
        },
        lastAccessed: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    // Learning Progress
    learningStats: {
      totalCoursesEnrolled: {
        type: Number,
        default: 0,
      },
      completedCourses: {
        type: Number,
        default: 0,
      },
      totalStudyTime: {
        type: Number, // in minutes
        default: 0,
      },
      averageScore: {
        type: Number,
        default: 0,
      },
      certificatesEarned: {
        type: Number,
        default: 0,
      },
    },

    // Preferences and Settings
    preferences: {
      language: {
        type: String,
        default: "en",
      },
      timezone: {
        type: String,
        default: "Asia/Karachi",
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
        showProgress: {
          type: Boolean,
          default: true,
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
studentSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// Virtual for age
studentSchema.virtual("age").get(function () {
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
studentSchema.virtual("activeAcademiesCount").get(function () {
  return this.academies.filter(
    (academy) => academy.isActive && academy.status === "active"
  ).length;
});

// Virtual for active courses count
studentSchema.virtual("activeCoursesCount").get(function () {
  return this.purchasedCourses.filter((course) => course.isActive).length;
});

// Indexes for better query performance
studentSchema.index({ status: 1 });
studentSchema.index({ "academies.academy": 1 });
studentSchema.index({ "purchasedCourses.course": 1 });

// Pre-save middleware to update timestamps
studentSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Static method to find active students
studentSchema.statics.findActive = function () {
  return this.find({ status: "active" });
};

// Instance method to enroll in academy
studentSchema.methods.enrollInAcademy = function (academyId, role = "student") {
  const existingEnrollment = this.academies.find(
    (academy) => academy.academy.toString() === academyId.toString()
  );

  if (existingEnrollment) {
    existingEnrollment.isActive = true;
    existingEnrollment.status = "active";
  } else {
    this.academies.push({
      academy: academyId,
      role: role,
      enrollmentDate: Date.now(),
    });
  }

  return this.save();
};

// Instance method to purchase course
studentSchema.methods.purchaseCourse = function (
  courseId,
  academyId,
  price,
  paymentMethod
) {
  const existingPurchase = this.purchasedCourses.find(
    (purchase) =>
      purchase.course.toString() === courseId.toString() &&
      purchase.academy.toString() === academyId.toString()
  );

  if (!existingPurchase) {
    this.purchasedCourses.push({
      course: courseId,
      academy: academyId,
      price: price,
      paymentMethod: paymentMethod,
      purchaseDate: Date.now(),
    });
  }

  return this.save();
};

// Instance method to update course progress
studentSchema.methods.updateCourseProgress = function (courseId, progress) {
  const course = this.purchasedCourses.find(
    (purchase) => purchase.course.toString() === courseId.toString()
  );

  if (course) {
    course.progress = progress;
    course.lastAccessed = Date.now();
    return this.save();
  }

  return Promise.reject(new Error("Course not found in purchased courses"));
};

export default mongoose.model("Student", studentSchema);

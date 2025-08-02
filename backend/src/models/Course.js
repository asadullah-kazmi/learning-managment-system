import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    // Basic Information
    title: {
      type: String,
      required: [true, "Course title is required"],
      trim: true,
      maxlength: [200, "Course title cannot exceed 200 characters"],
    },
    description: {
      type: String,
      required: [true, "Course description is required"],
      maxlength: [2000, "Course description cannot exceed 2000 characters"],
    },
    shortDescription: {
      type: String,
      maxlength: [500, "Short description cannot exceed 500 characters"],
    },

    // Course Details
    category: {
      type: String,
      required: [true, "Course category is required"],
      enum: [
        "academic",
        "professional",
        "skill_development",
        "language",
        "technology",
        "arts",
        "sports",
        "other",
      ],
    },
    subcategory: {
      type: String,
      required: [true, "Course subcategory is required"],
    },
    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced", "expert"],
      required: [true, "Course level is required"],
    },
    language: {
      type: String,
      default: "English",
    },

    // Academy and Teacher Information
    academy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Academy",
      required: [true, "Academy is required"],
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: [true, "Teacher is required"],
    },

    // Media and Content
    thumbnail: {
      type: String, // URL to stored image
      default: null,
    },
    previewVideo: {
      type: String, // URL to stored video
      default: null,
    },
    banner: {
      type: String, // URL to stored image
      default: null,
    },

    // Course Structure
    modules: [
      {
        title: {
          type: String,
          required: [true, "Module title is required"],
        },
        description: String,
        order: {
          type: Number,
          required: true,
        },
        lessons: [
          {
            title: {
              type: String,
              required: [true, "Lesson title is required"],
            },
            description: String,
            type: {
              type: String,
              enum: ["video", "text", "quiz", "assignment", "live_session"],
              default: "video",
            },
            content: {
              videoUrl: String,
              textContent: String,
              duration: Number, // in minutes
              fileUrl: String,
            },
            order: {
              type: Number,
              required: true,
            },
            isFree: {
              type: Boolean,
              default: false,
            },
          },
        ],
        isActive: {
          type: Boolean,
          default: true,
        },
      },
    ],

    // Pricing and Enrollment
    price: {
      type: Number,
      required: [true, "Course price is required"],
      min: [0, "Price cannot be negative"],
    },
    originalPrice: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
      min: [0, "Discount cannot be negative"],
      max: [100, "Discount cannot exceed 100%"],
    },
    currency: {
      type: String,
      default: "USD",
    },

    // Course Statistics
    stats: {
      totalEnrollments: {
        type: Number,
        default: 0,
      },
      totalStudents: {
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
      completionRate: {
        type: Number,
        default: 0,
        min: 0,
        max: 100,
      },
      totalRevenue: {
        type: Number,
        default: 0,
      },
    },

    // Course Features
    features: {
      certificate: {
        type: Boolean,
        default: false,
      },
      lifetimeAccess: {
        type: Boolean,
        default: true,
      },
      downloadable: {
        type: Boolean,
        default: false,
      },
      liveSupport: {
        type: Boolean,
        default: false,
      },
      groupChat: {
        type: Boolean,
        default: false,
      },
      assignments: {
        type: Boolean,
        default: false,
      },
      quizzes: {
        type: Boolean,
        default: false,
      },
    },

    // Course Requirements
    requirements: [
      {
        type: String,
        maxlength: [200, "Requirement cannot exceed 200 characters"],
      },
    ],
    whatYouWillLearn: [
      {
        type: String,
        maxlength: [200, "Learning outcome cannot exceed 200 characters"],
      },
    ],
    targetAudience: {
      type: String,
      maxlength: [500, "Target audience cannot exceed 500 characters"],
    },

    // Course Duration
    duration: {
      totalHours: {
        type: Number,
        default: 0,
      },
      totalLessons: {
        type: Number,
        default: 0,
      },
      totalModules: {
        type: Number,
        default: 0,
      },
    },

    // Status and Visibility
    status: {
      type: String,
      enum: ["draft", "published", "archived", "deleted"],
      default: "draft",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    approvalDate: {
      type: Date,
      default: null,
    },

    // SEO and Marketing
    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String],
      slug: {
        type: String,
        unique: true,
        required: [true, "Course slug is required"],
      },
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
    publishedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for discounted price
courseSchema.virtual("discountedPrice").get(function () {
  if (this.discount > 0) {
    return this.price - (this.price * this.discount) / 100;
  }
  return this.price;
});

// Virtual for total duration in hours
courseSchema.virtual("totalDurationHours").get(function () {
  return this.duration.totalHours;
});

// Virtual for total lessons count
courseSchema.virtual("totalLessonsCount").get(function () {
  return this.modules.reduce((total, module) => {
    return total + module.lessons.length;
  }, 0);
});

// Virtual for free lessons count
courseSchema.virtual("freeLessonsCount").get(function () {
  return this.modules.reduce((total, module) => {
    return total + module.lessons.filter((lesson) => lesson.isFree).length;
  }, 0);
});

// Indexes for better query performance
courseSchema.index({ academy: 1 });
courseSchema.index({ teacher: 1 });
courseSchema.index({ status: 1 });
courseSchema.index({ category: 1, subcategory: 1 });
courseSchema.index({ isFeatured: 1, status: 1 });
courseSchema.index({ price: 1 });
courseSchema.index({ "stats.averageRating": -1 });

// Pre-save middleware to update timestamps and calculate stats
courseSchema.pre("save", function (next) {
  this.updatedAt = Date.now();

  // Calculate duration stats
  this.duration.totalModules = this.modules.length;
  this.duration.totalLessons = this.totalLessonsCount;

  // Update published date if status changes to published
  if (
    this.isModified("status") &&
    this.status === "published" &&
    !this.publishedAt
  ) {
    this.publishedAt = Date.now();
  }

  next();
});

// Static method to find published courses
courseSchema.statics.findPublished = function () {
  return this.find({
    status: "published",
    isActive: true,
    isApproved: true,
  });
};

// Static method to find courses by category
courseSchema.statics.findByCategory = function (category) {
  return this.find({
    category: category,
    status: "published",
    isActive: true,
  });
};

// Static method to find featured courses
courseSchema.statics.findFeatured = function () {
  return this.find({
    isFeatured: true,
    status: "published",
    isActive: true,
  }).sort({ "stats.averageRating": -1 });
};

// Instance method to update course stats
courseSchema.methods.updateStats = function (stats) {
  Object.assign(this.stats, stats);
  return this.save();
};

// Instance method to add module
courseSchema.methods.addModule = function (moduleData) {
  moduleData.order = this.modules.length + 1;
  this.modules.push(moduleData);
  return this.save();
};

// Instance method to add lesson to module
courseSchema.methods.addLesson = function (moduleIndex, lessonData) {
  if (this.modules[moduleIndex]) {
    lessonData.order = this.modules[moduleIndex].lessons.length + 1;
    this.modules[moduleIndex].lessons.push(lessonData);
    return this.save();
  }
  return Promise.reject(new Error("Module not found"));
};

// Instance method to calculate completion rate
courseSchema.methods.calculateCompletionRate = function () {
  // This would typically be calculated from student progress data
  return this.stats.completionRate;
};

export default mongoose.model("Course", courseSchema);

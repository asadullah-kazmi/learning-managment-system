import mongoose from "mongoose";

const academySchema = new mongoose.Schema(
  {
    // Basic Information
    name: {
      type: String,
      required: [true, "Academy name is required"],
      trim: true,
      maxlength: [100, "Academy name cannot exceed 100 characters"],
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

    // Address Information
    address: {
      street: {
        type: String,
        required: [true, "Street address is required"],
      },
      streetLine2: String,
      city: {
        type: String,
        required: [true, "City is required"],
      },
      state: {
        type: String,
        required: [true, "State/Province is required"],
      },
      postalCode: {
        type: String,
        required: [true, "Postal/Zip code is required"],
      },
      country: {
        type: String,
        default: "Pakistan",
      },
    },

    // Business Information
    businessType: {
      type: String,
      required: [true, "Business type is required"],
      enum: [
        "primary",
        "secondary",
        "college",
        "university",
        "training",
        "tutoring",
        "online",
        "other",
      ],
    },
    description: {
      type: String,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    message: {
      type: String,
      maxlength: [1000, "Message cannot exceed 1000 characters"],
    },

    // Media
    logo: {
      type: String, // URL to stored image
      default: null,
    },
    verificationVideo: {
      type: String, // URL to stored video
      default: null,
    },

    // Status and Verification
    status: {
      type: String,
      enum: ["pending", "active", "suspended", "inactive"],
      default: "pending",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationDate: {
      type: Date,
      default: null,
    },

    // Administrators
    administrators: [
      {
        name: {
          type: String,
          required: [true, "Administrator name is required"],
        },
        lastName: {
          type: String,
          required: [true, "Administrator last name is required"],
        },
        email: {
          type: String,
          required: [true, "Administrator email is required"],
          lowercase: true,
        },
        phone: {
          type: String,
          required: [true, "Administrator phone is required"],
        },
        isRegistered: {
          type: Boolean,
          default: false,
        },
        registrationDate: {
          type: Date,
          default: null,
        },
      },
    ],

    // Statistics
    totalStudents: {
      type: Number,
      default: 0,
    },
    totalTeachers: {
      type: Number,
      default: 0,
    },
    totalCourses: {
      type: Number,
      default: 0,
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
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for full address
academySchema.virtual("fullAddress").get(function () {
  const addr = this.address;
  return `${
    addr.street
  }${addr.streetLine2 ? ", " + addr.streetLine2 : ""}, ${addr.city}, ${addr.state} ${addr.postalCode}, ${addr.country}`;
});

// Virtual for administrator count
academySchema.virtual("adminCount").get(function () {
  return this.administrators.length;
});

// Index for better query performance
academySchema.index({ status: 1 });
academySchema.index({ "address.city": 1, "address.state": 1 });

// Pre-save middleware to update timestamps
academySchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Static method to find active academies
academySchema.statics.findActive = function () {
  return this.find({ status: "active", isVerified: true });
};

// Instance method to add administrator
academySchema.methods.addAdministrator = function (adminData) {
  this.administrators.push(adminData);
  return this.save();
};

// Instance method to remove administrator
academySchema.methods.removeAdministrator = function (adminEmail) {
  this.administrators = this.administrators.filter(
    (admin) => admin.email !== adminEmail
  );
  return this.save();
};

export default mongoose.model("Academy", academySchema);

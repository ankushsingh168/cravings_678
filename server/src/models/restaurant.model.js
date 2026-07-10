import mongoose from "mongoose";

const RestaurantSchema = mongoose.Schema(
  {
    managerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number],
        default: [0, 0],
      },
    },
    cuisines: [String],
    photo: {
      url: { type: String },
      publicId: { type: String },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
    },
    openingHours: {
      type: Object,
    },
    avgRating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

// Create 2dsphere index for geo queries
RestaurantSchema.index({ location: "2dsphere" });

const Restaurant = mongoose.model("restaurant", RestaurantSchema);

export default Restaurant;
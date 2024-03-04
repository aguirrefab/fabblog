import mongoose from "mongoose";

import { USER_ROL } from "@/interfaces/Rol";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true, max: 80 },
    image: { type: String },
    author: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String },
    category: { type: String, required: true },
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    meta: {
      votes: { type: Number },
      favs: { type: Number }
    }
  },
  { timestamps: true }
);

const userSchema = new Schema(
  {
    name: { type: String },
    lastName: { type: String },
    userName: { type: String, required: true, unique: true },
    identify: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String },
    password: { type: String, required: true, min: 6 },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
    role: {
      type: Number,
      default: USER_ROL.USER,
      required: true
    },
    dateOfBirth: { type: Date },
    active: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);

export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

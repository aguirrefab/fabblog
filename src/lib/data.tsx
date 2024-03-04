import { FilterQuery } from "mongoose";

import { Post, User } from "./models";
import { connectDB } from "./utils";

export const getPosts = async () => {
  try {
    await connectDB(); // Correctly call conectDB function
    const posts = await Post.find();

    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Cannot get data of posts");
  }
};

export const getPost = async (slug: FilterQuery<string>) => {
  try {
    await connectDB(); // Correctly call conectDB function
    const post = await Post.findOne(slug);

    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Cannot get data of post");
  }
};

export const getUsers = async () => {
  try {
    await connectDB(); // Correctly call conectDB function
    const users = await User.find();

    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Cannot get data of users");
  }
};

export const getUser = async (id: FilterQuery<string>) => {
  try {
    await connectDB(); // Correctly call conectDB function
    const user = await User.findById(id);

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Cannot get data of user");
  }
};

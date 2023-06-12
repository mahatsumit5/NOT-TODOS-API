import mongoose from "mongoose";
// using moongoose to connect to the database
export const mongoConnect = async () => {
  try {
    const con = await mongoose.connect("mongodb://127.0.0.1:27017/nottododb");
    con && console.log("Mongo is connected");
  } catch (error) {
    console.log(error);
  }
};

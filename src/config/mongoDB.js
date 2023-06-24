import mongoose from "mongoose";
// using moongoose to connect to the database
export const mongoConnect = async () => {
  try {
    const dbLink = process.env.MONGO_CLIENT;
    const con = await mongoose.connect(dbLink);
    con && console.log("Mongo is connected");
  } catch (error) {
    console.log(error);
  }
};

import mongoose from "mongoose";
// using moongoose to connect to the database
export const mongoConnect = async () => {
  try {
    const dbLink =
      process.env.NODE_ENV !== "production"
        ? "mongodb://localhost:27017/nottododb"
        : process.env.MONGO_CLIENT;
    const con = await mongoose.connect(dbLink);
    // const con = await mongoose.connect("mongodb://127.0.0.1:27017/nottododb");
    con && console.log("Mongo is connected");
    return true;
  } catch (error) {
    throw new Error(error);
    console.log(error);
  }
};

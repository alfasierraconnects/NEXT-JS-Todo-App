import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://alfasierraconnects:Yahooash%40369@cluster0.irhd03i.mongodb.net/nextjsTodo"
    );
    console.log("DB Connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

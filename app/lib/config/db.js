import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://alfasierraconnects:Yahooash@369@cluster0.qv53prz.mongodb.net/todo-app"
  );
  console.log("DB Connected");
};

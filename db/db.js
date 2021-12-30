import mongoose from "mongoose";

const MongoDb = process.env.MONGODB_URI;
/*
export const connectDb = async () => {
  // La configuración es una por defecto que he visto que evita que salte warnings.
  try {
    await mongoose.connect(MongoDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("db success connect");
  } catch (error) {
    console.log("error connecting to database: ");
    console.log(err);
  }
};*/

mongoose
  .connect(MongoDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db success connect");
  })
  .catch((error) => {
    console.log("error connecting to database: ");
    console.log(error.message);
  });

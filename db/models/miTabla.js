import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const miTablaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  material: {
    type: String,
  },
  medidas: {
    type: String,
  },
});

miTablaSchema.index({ name: "name" });
miTablaSchema.plugin(uniqueValidator);

export default mongoose.model("MiTabla", miTablaSchema);

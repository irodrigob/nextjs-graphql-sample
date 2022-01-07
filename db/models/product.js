import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

mongoose.Promise = global.Promise;

const ProductSchema = new mongoose.Schema({
  mueble: {
    type: String,
    required: true,
    unique: true,
  },
  material: {
    type: String,
  },
  medidas: {
    altura: Number,
    anchura: Number,
    unidad: String,
  },
});

ProductSchema.index({ name: "mueble" });
ProductSchema.plugin(uniqueValidator);

let Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
export default Product;

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
    type: String,
  },
});

ProductSchema.index({ name: "mueble" });
ProductSchema.plugin(uniqueValidator);

let Product;
/*try {
  Product = mongoose.model("Product", ProductSchema);
} catch (error) {
  Product = mongoose.model.Product;
}*/
Product = mongoose.model("Product", ProductSchema);
export default Product;

import Product from "db/models/product.js";

export const resolvers = {
  Query: {
    // products
    getAll: async (root, args) => {
      return await Product.find({});
    },
  },
  Mutation: {
    newProduct: (root, args) => {
      const row = new Product({ ...args });
      return row.save();
    },
  },
};

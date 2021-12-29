import MiTabla from "db/models/miTabla";

const resolvers = {
  Query: {
    // products
    getAll: async (root, args) => {
      MiTabla.find({});
    },
  },
};

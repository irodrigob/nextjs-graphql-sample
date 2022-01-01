import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Medidas {
    altura: Int
    anchura: Int
    unidad: String
  }
  type Product {
    _id: ID
    mueble: String!
    material: String
    medidas: Medidas
  }
  input ProductInput {
    mueble: String!
    material: String!
  }

  type Query {
    getAll: [Product]
    getMuebles(mueble: String!): [Product]
    getSingleMueble(mueble: String!): Product
  }

  type Mutation {
    newProduct(mueble: String!, material: String): Product
  }
`;

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
  input InputMedidas {
    altura: Int
    anchura: Int
    unidad: String
  }
  input InputProduct {
    mueble: String!
    material: String
    medidas: InputMedidas
  }
  type Query {
    getAll: [Product]
    getMuebles(mueble: String!): [Product]
    getSingleMueble(mueble: String!): Product
  }

  type Mutation {
    newProduct(mueble: String!, material: String): Product
    newCompleteProduct(input: InputProduct): Product
  }
`;

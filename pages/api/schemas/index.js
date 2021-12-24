import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Medidas {
    altura: Int
    anchura: Int
    unidad: String
  }
  type Mitabla {
    _id: ID
    mueble: String!
    material: String
    medidas: Medidas
  }

  type Query {
    getAll: [Mitabla]
    getMuebles(mueble: String!): [Mitabla]
    getSingleMueble(mueble: String!): Mitabla
  }
`;

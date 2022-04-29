import { gql } from "apollo-server-micro";

export const typeDefsSAPGeneral = gql`
  type userInfo {
    username: String
    username_desc: String
  }
  type Metadata {
    content: String
  }
  type appsList {
    app: String
    appDesc: String
  }
  type Query {
    getUserInfo(
      system: String!
      sap_user: String!
      sap_password: String!
    ): userInfo
    getMetadata(
      system: String!
      sap_user: String!
      sap_password: String!
    ): Metadata
    getAppsList(langu: String!): [appsList]
  }
`;

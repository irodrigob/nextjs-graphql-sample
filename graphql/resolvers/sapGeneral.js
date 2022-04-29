import { ApolloError } from "apollo-server-errors";
import axios from "axios";

export const sapGeneralResolvers = {
  Query: {
    getMetadata: async (root, args) => {
      // try {
      let servicio = await axios
        .create({
          auth: {
            username: args.sap_user,
            password: args.sap_password,
          },
          withCredentials: true,
        })
        .get(`${args.system}$metadata`);

      return { content: servicio.data };
      /*  } catch (oError) {
        //console.log(oError.response.status);
        //console.log(oError.response.data);
        //console.log(oError.response.statusText);
        throw new ApolloError(
          oError.response.statusText,
          oError.response.status,
          {
            invalidArgs: Object.keys(args),
            backendResponse: oError.response.data,
          }
        );
      }*/
    },
    getUserInfo: async (root, args) => {},
    getAppsList: async (root, args) => {},
  },
};

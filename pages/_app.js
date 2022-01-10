import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import { useApollo } from "graphql/client";
function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;

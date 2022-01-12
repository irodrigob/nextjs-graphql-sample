import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "graphql/client";
import styles from "../styles/Home.module.css";

const QUERY = gql`
  query Query {
    getAll {
      _id
      mueble
      material
    }
  }
`;

export default function Home(props) {
  const { getAll } = props;
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Pruebas de GraphQL en modo servidor</h1>

      <div className={styles.grid}>
        <ul>{!loading && getAll.map((row) => <li>{row.mueble}</li>)}</ul>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: gql`
      query Query {
        getAll {
          _id
          mueble
          material
        }
      }
    `,
  });

  return {
    props: {
      getAll: data.getAll,
    },
  };
}

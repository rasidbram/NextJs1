import Layout from "../components/Layout";
import Head from 'next/head';

function HomePage() {
  return (
    <Layout>
        <Head>
            <title> About Page</title>
        </Head>
      <h1>Hello</h1>
    </Layout>
  );
}

export default HomePage;

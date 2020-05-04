import Layout from "../components/Layout";
import Head from 'next/head'

function HomePage() {
  return (
    <Layout>
        <Head>
            <title> Main Page</title>
        </Head>
      <h1 className="title">Welcome to Next.js!</h1>
      <style jsx>{``}</style>

        

    </Layout>
  );
}

export default HomePage;

import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'

const defaultEndpoint = 'https://fedeperin-harry-potter-api-en.herokuapp.com/characters';

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

export default function Home({data}) {
  
  return (
    <div>
      <Head>
        <title>Harry Potter Universe</title>
        <meta name="description" content="Made by Chris Shim" />
        <link rel="icon" href="/thunder.ico" />
      </Head>

      <Navbar />
      <Searchbar data={data} />
      <Footer />
    </div>
  );
}

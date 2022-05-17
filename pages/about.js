import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import React from 'react'

function about() {
  return (
    <div>
      <Head>
        <title>Harry Potter Universe</title>
        <meta name="description" content="Made by Chris Shim" />
        <link rel="icon" href="/thunder.ico" />
      </Head>
      <Navbar />
      <div className='py-[20vh] md:py-[25vh] px-[10vw] min-h-[85vh] sm:min-h-[87vh] lg:min-h-[80vh]'>
        <h1 className='text-center text-2xl font-harryp sm:text-3xl pb-[2vw]'>This website was built with the React.js library, the Next.js framework and styled with Tailwind.css</h1>
        <h1 className='text-center text-2xl font-harryp sm:text-3xl pb-[2vw]'>The purpose of this site is to test out pulling data from APIs using the getServerSideProps function and then be able to filter the data via a searchbar and map the data to different points on the site.</h1>
        <h1 className='text-center text-2xl font-harryp sm:text-3xl pb-[2vw]'>This site pulls data from the Harry Potter API that can be found on github here:
        <a href='https://github.com/fedeperin/harry-potter-api-english#harry-potter-api' target="_blank" className='hover:text-red-600'> Github Link</a></h1>
        <h1 className='text-center text-2xl font-harryp sm:text-3xl pb-[2vw]'>This site also uses a custom font that is stored locally on the hosting server.</h1>
      </div>
      <div className='inset-x-0 bottom-0 fixed'>
      <Footer />
      </div>
      
    </div>
  );
}

export default about
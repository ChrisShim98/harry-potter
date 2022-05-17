import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaTwitter, FaYoutube  } from 'react-icons/fa'

import React from 'react'

function contact() {
  return (
    <div>
      <Head>
        <title>Harry Potter Universe</title>
        <meta name="description" content="Made by Chris Shim" />
        <link rel="icon" href="/thunder.ico" />
      </Head>
      <Navbar />
      <div className="py-[25vh] px-[10vw] min-h-[85vh] sm:min-h-[87vh] lg:min-h-[80vh]">
        <h1 className="text-center text-2xl font-harryp sm:text-3xl pb-[2vw]">
          The developer can be contacted via:
        </h1>
        <div className="flex justify-center">
          <a href='https://twitter.com/ChrisShim_' target='_blank' rel='noopener' className="text-2xl sm:text-3xl px-[2vw] hover:text-red-600">
            <FaTwitter />
          </a>
          <a href='https://www.youtube.com/channel/UCild7pbBT8Zalh9s349rmrQ' target='_blank' rel='noopener' className="text-2xl sm:text-3xl px-[2vw] hover:text-red-600">
            <FaYoutube />
          </a>
        </div>
        
      </div>
      <div className='inset-x-0 bottom-0 fixed'>
      <Footer />
      </div>
    </div>
  );
}

export default contact
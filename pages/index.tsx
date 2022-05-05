import type { NextPage } from 'next'
import Head from 'next/head'


import Headvid from '../components/headvid'
import Aboutme from '../components/aboutme'
import Skills from '../components/skills'
import Works from '../components/works'
import Tools from '../components/tools'
import Footer from '../components/footer'



const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>PEDEV</title>
                <meta name="description" content="Dev Blog" />
                
          <link rel="shortcut icon" href="/images/favicon.ico" />
   
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>

            </Head>
            <Headvid />
            <Aboutme />
            <Skills />
            <Works /> 
     
            <Tools />
            <Footer />
        </div>
    )
}

export default Home

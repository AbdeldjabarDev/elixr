import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { sliderData } from '../components/sliderData'
export default function Home() {
  return (
    <>
     <Head>
        <title>Elixr</title>
        <meta name="description" content="Real Estate Website template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
     <Nav ></Nav>
     <Hero data={sliderData}></Hero>
     <About></About>
     <Footer></Footer>
    </>
  )
}

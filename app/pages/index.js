// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// // > styles/ – for your app styles, obviously.
// //> public/ – for static content 
// //> pages/ – page routes.
// //> pages/api – API routes
// const Index = () => (
//   <div>
//     <p>Thank u, next</p>
//   </div>
// );

// export default Index;


//SSR > server side rendering 

import Head from 'next/head'
import Link from 'next/link'

import colors from '../data/colors.json'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Colors!</title>
        <meta name="description" content="App that displays pretty colors to learn Next!" />
      </Head>
      {colors.map(color => (
        <Link href={`/${color.name}`}>
        <h2>{color.name}</h2>
        </Link>
      ))}
    </div>
  )
}
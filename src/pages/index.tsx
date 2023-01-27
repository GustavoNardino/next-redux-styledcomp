// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'

import CardsPanel from '../components/CardsPanel'
import Header from '../components/header'
import { S } from '../styles/teste'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <Header />
      <CardsPanel />

    </>
  )
}
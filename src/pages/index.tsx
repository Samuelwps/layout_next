import React from 'react'
import Head from 'next/head'

import World from "../assets/World.svg"

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <World width={400} height={400}/>
      <h1>World </h1>
    </Container>
  )
}

export default Home

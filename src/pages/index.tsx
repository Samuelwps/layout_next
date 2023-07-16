import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepae</title>
      </Head>

      <h1>Portifólio com NEXT</h1>
    </Container>
  )
}

export default Home

import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Timeline'

const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>PWA v2</title>
            </Head>
        </Container>
    )
}

export default Home

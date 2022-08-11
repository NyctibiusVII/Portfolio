/* Import --------------------------------------------------------------- */

import type { NextPage } from 'next'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import Head from 'next/head'

import styles from '../styles/pages/explore.module.scss'

/* ---------------------------------------------------------------------- */

const Explore: NextPage = () => {
    return (
        <>
            <Head><title>Portfolio | Explore</title></Head>

            <Header />
            <div className={styles.container}>

                <h1>Explore</h1>
                <h2>Home / Explore</h2>

            </div>
            <Footer />
        </>
    )
}

export default Explore
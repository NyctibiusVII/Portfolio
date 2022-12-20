/* Import --------------------------------------------------------------- */

import type { NextPage } from 'next'

import { Header }       from '../components/Header'
import { Hero }         from '../components/Hero'
import { Stack }        from '../components/Stack'
import { Technologies } from '../components/Technologies'
import { Footer }       from '../components/Footer'

import Head from 'next/head'

import styles from '../styles/pages/home.module.scss'

/* ---------------------------------------------------------------------- */

const Home: NextPage = () => {
    return (
        <>
            <Head><title>Portfolio | Home</title></Head>

            <Header />
            <div className={styles.container}>
                <div id={styles.bg} />

                <Hero />
                <Stack />
                <section>
                    <h2>Projects</h2>
                </section>
                <Technologies />
            </div>
            <Footer />
        </>
    )
}

export default Home
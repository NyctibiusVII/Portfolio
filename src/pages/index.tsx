/* Import --------------------------------------------------------------- */

import type { NextPage } from 'next'

import { Header }       from '../components/Header'
import { Hero }         from '../components/Hero'
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
                    <main className={styles.main}>
                        <h1>HI, I&apos;m Matheus Vidigal</h1>
                    </main>

                <Hero />
                <section id='stack' translate='no'>
                    <h2>Stack</h2>
                </section>
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
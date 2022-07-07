/* Import ---------------------------------------------------------------------- */ // - x70

import type { NextPage } from 'next'

import { Header } from '../components/Header'

import Head from 'next/head'

import styles from '../styles/pages/home.module.scss'

/* ---------------------------------------------------------------------- */

const Home: NextPage = () => {
    return (
        <>
            <Head><title>Portfolio | Home</title></Head>

            <div className={styles.container}>
                <Header />

                <button className={`${styles.abc} line`}>B U T T O N</button>
            </div>
        </>
    )
}

export default Home
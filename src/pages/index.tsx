import type { NextPage } from 'next'

import Head from 'next/head'

import styles from '../styles/pages/home.module.scss'

const Home: NextPage = () => {
    return (
        <>
            <Head><title>Create Next App</title></Head>

            <div className={styles.container}>
            </div>
        </>
    )
}

export default Home

import type { NextPage } from 'next'

import Head from 'next/head'

import styles from '../styles/pages/home.module.scss'

const Home: NextPage = () => {
    return (
        <>
            <Head><title>Create Next App</title></Head>

            <div className={styles.container}>
                <h1>Hello World!</h1>

                <button className={`${styles.abc} line`}>B U T T O N</button>
            </div>
        </>
    )
}

export default Home
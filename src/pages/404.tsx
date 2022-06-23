import type { NextPage } from 'next'

// import _404HeadlightImage from '../../public/assets/404/Headlight.svg'
// import _404PersonageImage from '../../public/assets/404/Personage3D.png'
// import _404FlagImage      from '../../public/assets/404/Flag3D.png'

import Head  from 'next/head'
import Link  from 'next/link'

import styles from '../styles/pages/404.module.scss'

const _404: NextPage = () => {
    return (
        <>
            <Head><title>Portfolio | 404</title></Head>

            <div className={styles.container}>
                <h1>Page Not Found</h1>

                <span>4</span>
                <span>0</span>
                <span>4</span>

                <Link href='/'><a className={styles.backHome}>Go Home</a></Link>
            </div>
        </>
    )
}

export default _404
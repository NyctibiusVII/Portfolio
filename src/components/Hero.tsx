/* Import --------------------------------------------------------------- */

import { useEffect } from 'react'

import { Button } from './ui/Button'

import Image  from 'next/image'
import Link  from 'next/link'

import styles from '../styles/components/Hero.module.scss'

/* ---------------------------------------------------------------------- */

export const Hero = () => {
    useEffect(() => {
        const typeWriter = () => {
            let tag = document.getElementById('typeWriter')
            if (!tag) return

            const txt = tag.innerHTML
            const speed = 170
            let counter = 0

            const __writing__ = () => {
                if (!tag) return

                if (counter <= txt.length) {
                    tag.innerHTML = txt.slice(0, counter + 1)

                    counter++

                    setTimeout(__writing__, speed)
                }
            }
            __writing__()
        }

        return typeWriter()
    }, [])

    return (
        <>
            <main className={`${styles.container} containerWidthLimitation`}>
                <h1 id='typeWriter'><span>HI</span>, <br/>I&apos;m Matheus <br/>Vidigal</h1>
                <p>Front End Web Developer</p>

                <div className={styles.devStack}>
                    <Link href='/#stack'><a><Button styleBtn='line' translate='no'>Dev Stack</Button></a></Link>
                    <Image
                        src='/assets/hero/HandPointing.png'
                        alt='Hand pointing to Dev Stack section'
                        width={78.45}
                        height={40}
                        layout='fixed'
                        loading='eager'
                    />
                </div>
            </main>

            <div id={styles.bg}>
                <span id={styles.card} className={styles.obj} />
                <span id={styles.spring_1} className={styles.obj} />
                <span id={styles.spring_2} className={styles.obj} />
            </div>
        </>
    )
}
/* Import --------------------------------------------------------------- */

import { Key } from 'react'

import type { TechnologiesType } from '../interfaces/componentProps'

import Image  from 'next/image'

import styles from '../styles/components/Technologies.module.scss'

/* ---------------------------------------------------------------------- */

const technologies: Array<TechnologiesType> = [
    { fileName: 'vercel',  width: 88.4 },
    { fileName: 'motion',  width: 62.9 },
    { fileName: 'yarn',    width: 44.6 },
    { fileName: 'nextjs',  width: 33.3 },
    { fileName: 'reactjs', width: 60.2 },
    { fileName: 'mongodb', width: 70.2 },
    { fileName: 'prisma',  width: 50.9 },
    { fileName: 'npm',     width: 62.4 },
    { fileName: 'axios',   width: 137.2 },
    /*    Part1 ↑     |     Part2 ↓    */
    { fileName: 'heroku',  width: 71.2 },
    { fileName: 'auth0',   width: 56.2 },
    { fileName: 'prismic', width: 77.8 },
    { fileName: 'chakra',  width: 77.7 },
    { fileName: 'github',  width: 73.8 },
    { fileName: 'git',     width: 47.9 },
    { fileName: 'sass',    width: 26.7 },
    { fileName: 'nodejs',  width: 31.5 },
    { fileName: 'jest',    width: 42 }
]

export const Technologies = () => {
    const partitioningTechnologies = (tech: TechnologiesType[], maxLength: number) => {
        const partitionedTechnologies = maxLength / 2

        return [tech.slice(0, partitionedTechnologies), tech.slice(partitionedTechnologies, maxLength)]
    }

    let [technologiesFirst, technologiesSecond] = partitioningTechnologies(technologies, technologies.length)

    const duplicatingTechnologies = (tech: TechnologiesType[]) => [...tech, ...tech]

    technologiesFirst = duplicatingTechnologies(technologiesFirst)
    technologiesSecond = duplicatingTechnologies(technologiesSecond)

    return (
        <section className={`${styles.container} containerWidthLimitation`}>
            <h2>Most Used Technologies</h2>

            <div className={styles.slider}>
                <div className={`${styles.slideTrack} ${styles.slideTrackOne}`}>
                    { technologiesFirst.map((value: TechnologiesType, key: Key) => {
                        return (
                            <div className={`${styles.slide} ${styles.slideOne}`} key={key}>
                                <Image
                                    src={`/assets/technologies/${value.fileName}.svg`}
                                    alt={`Logo ${value.fileName}`}
                                    width={value.width}
                                    height={20}
                                    layout='fixed'
                                    loading='lazy'
                                />
                            </div>
                        )
                    }) }
                </div>

                <div className={`${styles.slideTrack} ${styles.slideTrackTwo}`}>
                    { technologiesSecond.map((value: TechnologiesType, key: Key) => {
                        return (
                            <div className={`${styles.slide} ${styles.slideTwo}`} key={key}>
                                <Image
                                    src={`/assets/technologies/${value.fileName}.svg`}
                                    alt={`Logo ${value.fileName}`}
                                    width={value.width}
                                    height={20}
                                    layout='fixed'
                                    loading='lazy'
                                />
                            </div>
                        )
                    }) }
                </div>
            </div>
        </section>
    )
}
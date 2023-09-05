/* Import --------------------------------------------------------------- */

import type { ProjectDataType } from '../../../interfaces/componentProps'

import { Button } from '../Button'

import Image  from 'next/image'

import styles from './index.module.scss'


/* ---------------------------------------------------------------------- */

interface CardProps { data: ProjectDataType }

export const Card = ({
    data: {
        name,
        updated,
        starred,
        language,
        color,
        image,
        github,
        online
    }
}: CardProps) => {

    const handleView = (link: string) =>  window.open(link, '_blank')

    return (
        <div className={styles.container}>
            <div className={styles.picture}>
                <Image
                    src={image}
                    alt={`${name} project image`}
                    width={1200}
                    height={600}
                    layout='responsive'
                    loading='lazy'
                />
            </div>

            <div className={styles.content}>
                <>
                    <h3>{name}</h3>
                    <p>Updated on <span>{updated}</span></p>
                </>

                <div className={styles.status}>
                    <span className={styles.starred}>
                        <Image
                            src='/assets/projects/star.svg'
                            alt='Star icon'
                            width={10}
                            height={10}
                            loading='lazy'
                        />
                        &nbsp;{starred}
                    </span>

                    { language === '-' && color === '#F2B4B0' ? null :
                        <span className={styles.language}>
                            <span className={styles.repoLanguageColor} style={{ backgroundColor: color }} />
                            &nbsp;{language}
                        </span>
                    }
                </div>

                <div className={styles.view}>
                    <Button styleBtn='line' onClick={() => handleView(github)}>View in Github</Button>
                    { online && <Button styleBtn='gradient' onClick={() => handleView(online)}>View Online</Button> }
                </div>
            </div>
        </div>
    )
}
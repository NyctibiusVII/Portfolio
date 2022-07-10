/* Import --------------------------------------------------------------- */

import { Logo }   from './ui/Logo'
import { Button } from './ui/Button'

import Link   from 'next/link'
import Image  from 'next/image'

import styles from '../styles/components/Footer.module.scss'

/* ---------------------------------------------------------------------- */

const currentYear = new Date().getFullYear()

export const Footer = () => {
    const myInfos = {
        phone:   '+55 (11) 97132-1587',
        email:   'matheus.dev.07@gmail.com',
        address: 'Brazil, São Paulo | SP',
        social: {
            github:    'https://github.com/NyctibiusVII',
            linkedin:  'https://www.linkedin.com/in/matheus-vidigal-nyctibiusvii',
            instagram: 'https://www.instagram.com/nyctibius_vii'
        }
    }

    return (
        <footer id='contact' className={styles.container}>
            <div>
                <Logo styleColor='2' />

                <div className={styles.content}>
                    <div className={styles.contact}>
                        <div className={styles.phone}>
                            <Button styleBtn='social' disabled>
                                <Image
                                    src={`/assets/footer/phone.svg`}
                                    alt={`phone icon`}
                                    width={12}
                                    height={12}
                                />
                            </Button>

                            <div className={styles.info}>
                                <h6>Phone</h6>
                                <p>{myInfos.phone}</p>
                            </div>
                        </div>

                        <div className={styles.mail}>
                            <Button styleBtn='social' disabled>
                                <Image
                                    src={`/assets/footer/email.svg`}
                                    alt={`email icon`}
                                    width={12}
                                    height={12}
                                />
                            </Button>

                            <div className={styles.info}>
                                <h6>Mail</h6>
                                <p>{myInfos.email}</p>
                            </div>
                        </div>

                        <div className={styles.address}>
                            <Button styleBtn='social' disabled>
                                <Image
                                    src={`/assets/footer/map_pin.svg`}
                                    alt={`address icon`}
                                    width={12}
                                    height={12}
                                />
                            </Button>

                            <div className={styles.info}>
                                <h6>Address</h6>
                                <p>{myInfos.address}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.social}>
                        <Link href={myInfos.social.github}>
                            <a>
                                <Button styleBtn='social'>
                                    <Image
                                        src={`/assets/footer/github.svg`}
                                        alt={`github icon`}
                                        width={12}
                                        height={12}
                                    />
                                </Button>
                            </a>
                        </Link>

                        <Link href={myInfos.social.linkedin}>
                            <a>
                                <Button styleBtn='social'>
                                    <Image
                                        src={`/assets/footer/linkedin.svg`}
                                        alt={`linkedin icon`}
                                        width={12}
                                        height={12}
                                    />
                                </Button>
                            </a>
                        </Link>

                        <Link href={myInfos.social.instagram}>
                            <a>
                                <Button styleBtn='social'>
                                    <Image
                                        src={`/assets/footer/instagram.svg`}
                                        alt={`instagram icon`}
                                        width={12}
                                        height={12}
                                    />
                                </Button>
                            </a>
                        </Link>
                    </div>

                    <small className={styles.rightsReserved}>© 2022-{currentYear}, All Rights Reserved</small>
                </div>
            </div>
        </footer>
    )
}
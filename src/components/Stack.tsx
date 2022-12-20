/* Import --------------------------------------------------------------- */

import { useState } from 'react'

import type { devLanguageType } from '../interfaces/componentProps'

import { Button } from './ui/Button'

import Image  from 'next/image'

import styles from '../styles/components/Stack.module.scss'

/* ---------------------------------------------------------------------- */

export const Stack = () => {
    const codeHeader = `
    export const Header = () => {
        const headerLinks = useHeaderLinks
        const [scrolled, setScrolled] = useState(false)
        const [currentPath, setCurrentPath] = useState('')

        const handleScroll = () => window.scrollY > 0
            ? setScrolled(true) : setScrolled(false)

        useEffect(() => {
            setCurrentPath(Router.pathname)

            return () => setCurrentPath(Router.pathname)
        }, [currentPath])

        return <>...</>
    }`
    const codeLines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    const devLanguages: Array<devLanguageType> = [
        {
            title: 'NextJS',
            description: 'SSR and SSG, image optimization, code splitting, SEO, performance and processing.',
            color: '#fff',
            imageSrc: 'nextjs.svg',
            imageAlt: 'NextJS framework icon'
        },
        {
            title: 'ReactJS',
            description: 'Use of Native Hooks, Context API, creation of Custom Hooks, Routes, Back-end Integration, Components creation.',
            color: '#61dafb',
            imageSrc: 'reactjs.svg',
            imageAlt: 'ReactJS library icon'
        },
        {
            title: 'MongoDB',
            description: 'Creating documents, inserting, updating and deleting. Works with large volumes of data.',
            color: '#4caf50',
            imageSrc: 'mongodb.svg',
            imageAlt: 'MongoDB icon'
        },
        {
            title: 'JavaScript',
            description: 'DOM manipulation, Fetch API, use of ES6+ resources such as Destructuring, Async/Await and more.',
            color: '#ffd600',
            imageSrc: 'javascript.svg',
            imageAlt: 'JavaScript language icon'
        },
        {
            title: 'TypeScript',
            description: 'Superset that leverages JavaScript with static, strong, and automatic typing, object orientation, and more.',
            color: '#1976D2',
            imageSrc: 'typescript.svg',
            imageAlt: 'TypeScript language icon'
        },
        {
            title: 'Sass',
            description: 'It offers special features like variables, mixins, functions, operations and other miscellaneous options.',
            color: '#f06292',
            imageSrc: 'sass.svg',
            imageAlt: 'Sass icon'
        },
        {
            title: 'Css',
            description: 'Creation of fluid and responsive layouts with Flexbox, Grid and Media Queries.',
            color: '#039be5',
            imageSrc: 'css.svg',
            imageAlt: 'Css icon'
        },
        {
            title: 'Html',
            description: 'Construction of websites and the insertion of new contents, with images and videos, through hypertexts.',
            color: '#ff6d00',
            imageSrc: 'html.svg',
            imageAlt: 'Html icon'
        },
        {
            title: 'Git',
            description: 'Versioning and Project Control, commands for creating and merging branches, reversing commits, among others.',
            color: '#f4511e',
            imageSrc: 'git.svg',
            imageAlt: 'Git icon'
        }
    ]

    const [devLanguage, setDevLanguage] = useState<devLanguageType>(devLanguages[0])
    const [devColorLanguage, setColorDevLanguage] = useState<devLanguageType['color']>('#fff')
    const [devButtonActive, setDevButtonActive] = useState(0)

    const handleDevLanguage = (index: number, hex: string) => {
        setDevLanguage(devLanguages[index])
        setColorDevLanguage(hex)

        // Cleaner
        document.getElementById(`devButtonCard${devButtonActive}`)?.classList.remove(styles.active)
        // Add active class
        document.getElementById(`devButtonCard${index}`)?.classList.add(styles.active)
        // Update active button
        setDevButtonActive(index)
    }

    return (
        <section id='stack' className={`${styles.container} containerWidthLimitation`}>
            <h2 translate='no'>Stack</h2>

            <div className={styles.around}>
                <div id={styles.bgBlack} />
                <div id={styles.bgColored} style={{ backgroundImage: `linear-gradient(275.64deg, var(--blue-600) 40.05%, ${devColorLanguage} 85.33%)` }} />

                <div className={styles.content}>
                    <div className={styles.devStackCard} style={{ borderColor: devColorLanguage }}>
                        <h3 translate='no'>{devLanguage.title}</h3>
                        <p>{devLanguage.description}</p>

                        <div className={styles.devGroup}>
                            { devLanguages.map((devLanguage, index) => {
                                return <Button
                                        id={'devButtonCard' + String(index)}
                                        key={index}
                                        onClick={() => handleDevLanguage(index, devLanguage.color)}
                                        styleBtn='devLanguages'
                                        className={index === 0 ? styles.active : ''}
                                    >
                                    <Image
                                        src={`/assets/stack/${devLanguage.imageSrc}`}
                                        alt={devLanguage.imageAlt}
                                        width={32}
                                        height={32}
                                        layout='fixed'
                                        loading='lazy'
                                    />
                                </Button>
                            }) }
                        </div>
                    </div>

                    <div className={styles.codeEditor}>
                        <header>
                            <span id={styles.red}    />
                            <span id={styles.yellow} />
                            <span id={styles.green}  />
                        </header>

                        <aside> { codeLines.map(line => <span key={line}>{line}</span>) } </aside>

                        <main><pre><code>{codeHeader}</code></pre></main>
                    </div>
                </div>
            </div>
        </section>
    )
}
/* Import --------------------------------------------------------------- */

import {
    useEffect,
    useState
} from 'react'

import { useHeaderLinks } from '../hooks/useHeaderLinks'

import { Logo }        from './ui/Logo'
import { PopoverMenu } from './ui/Popover/Menu'

import Link from 'next/link'

import styles from '../styles/components/Header.module.scss'

/* ---------------------------------------------------------------------- */

export const Header = () => {
    const headerLinks = useHeaderLinks
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => window.scrollY > 0 ? setScrolled(true) : setScrolled(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`${styles.container}${scrolled ? (' ' + styles.scrolled) : ''}`}>
            <div className={styles.content}>
                <Logo />

                {/* Mobile */}
                <div className={styles.options}>
                    <PopoverMenu />
                </div>

                {/* Desktop */}
                <nav className={styles.links}>
                    <ul>
                        { headerLinks.map((item, index) => {
                            return (
                                <li key={index} translate={`${index === 0 ? 'no' : 'yes'}`}>
                                    <Link href={item.href}>
                                        <a>{item.content}</a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
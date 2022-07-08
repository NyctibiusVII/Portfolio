/* Import ---------------------------------------------------------------------- */ // - x70

import { Key, useEffect, useState } from 'react'

import { useHeaderLinks } from '../hooks/useHeaderLinks'

import { Logo }          from './ui/Logo'
import { Search }        from './ui/Popover/Search/Search'
import { PopoverMenu }   from './ui/Popover/Menu'
import { PopoverSearch } from './ui/Popover/Search'

import Link   from 'next/link'
import Router from 'next/router'

import styles from '../styles/components/Header.module.scss'

/* ---------------------------------------------------------------------- */

export const Header = () => {
    const headerLinks = useHeaderLinks
    const [currentPath, setCurrentPath] = useState('')

    useEffect(() => setCurrentPath(Router.pathname), [currentPath])

    return (
        <header className={styles.container}>
            <Logo />

            {/* Mobile */}
            <div className={styles.options}>
                <PopoverSearch />
                <PopoverMenu />
            </div>

            {/* Desktop */}
            <div className={styles.search}>
                <Search isPopover={false} />
            </div>
            <nav className={styles.links}>
                <ul>
                    { headerLinks.map((item, index: Key) => {
                        return (
                            <li key={index}>
                                <Link href={item.href}>
                                    <a className={currentPath === item.href ? styles.active : undefined}>{item.content}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}
/* Import --------------------------------------------------------------- */

import { Fragment, Key } from 'react'

import { useHeaderLinks } from '../../../../hooks/useHeaderLinks'

import Link   from 'next/link'
import Router from 'next/router'

/* ---------------------------------------------------------------------- */

export const Menu = () => {
    const menuItens = useHeaderLinks
    const currentPath = Router.pathname

    return (
        <nav>
            <ul>
                { menuItens.map((item, index: Key) => {
                    return (
                        <Fragment key={index}>
                            <li>
                                <Link href={item.href}>
                                    <a className={currentPath === item.href ? 'active' : undefined}>{item.content}</a>
                                </Link>
                            </li>
                            { index === 0 && <div className='divider' /> }
                        </Fragment>
                    )
                })}
            </ul>

            <style jsx>{`
                nav {
                    background-color: var(--popover-menu-bg);

                    padding: 0.25rem 0;

                    border-radius: 0.313rem;
                    -webkit-border-radius: 0.313rem;
                    -moz-border-radius: 0.313rem;
                    -ms-border-radius: 0.313rem;
                    -o-border-radius: 0.313rem;
                }
                li { display: flex; padding: 0.25rem 1rem; }

                a { color: var(--popover-menu-text); font-size: 0.75rem; font-weight: 100; }
                a.active { color: var(--white); font-weight: 400; }
                a:hover  { color: var(--pink-200); text-decoration: none; }

                .divider {
                    width: 100%;
                    height: 0.031rem;

                    background-color: var(--popover-menu-divider);

                    margin: 0.25rem 0;
                }
            `}</style>
        </nav>
    )
}
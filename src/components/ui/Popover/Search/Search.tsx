/* Import ---------------------------------------------------------------------- */ // - x70

import { Key, useEffect, useState } from 'react'

import { usePreventDefault } from '../../../../hooks/usePreventDefault'
import { SearchItensType }   from '../../../../interfaces/componentProps'

import { Loading } from '../../Loading'

import Image from 'next/image'
import Link  from 'next/link'

/* ---------------------------------------------------------------------- */

interface SearchProps { isPopover?: boolean }

export const Search = ({ isPopover = true }: SearchProps) => {
    //const [search] = useContext(searchContext)
    const [userSearch, setUserSearch] = useState('')

    const [isOpenResponse, setIsOpenResponse] = useState(false)
    const [isSearching,       setIsSearching] = useState(false)
    const [searchResults,   setSearchResults] = useState([''])

    const handleParam = (setValue: any) => (e: any) => setValue(e.target.value)
    const handleSubmit = usePreventDefault(() => {
        // Cookies.set('search', String(userSearch))

        // search()
        console.log('Searching for: ', userSearch)
        setIsOpenResponse(true)
    })

    const searchItens: Array<SearchItensType> = [
        { href: '/',        content: 'Home › #Projects ›',          response: 'MoveIt' },
        { href: '/explore', content: 'Home / Explore › #Explore ›', response: 'MoveIt' }
    ]

    useEffect(() => { !userSearch && setIsOpenResponse(false) }, [userSearch])

    return (
        <div className='containerSearch'>
            <form onSubmit={handleSubmit}>
                <input
                    id='search'
                    name='search'
                    type='text'
                    value={userSearch}
                    onChange={handleParam(setUserSearch)}
                    placeholder='Search'
                    required
                />

                <button type='submit' className='options'>
                    <Image
                        src='/assets/header/search.svg'
                        alt='search icon'
                        width={14}
                        height={14}
                    />
                </button>
            </form>

            { isOpenResponse &&
                <div className='response'>
                    { isSearching ? <Loading /> :
                        <>
                            { !searchResults.length ?
                                <div className='notFound'>
                                    <span>Sorry, but nothing was found.</span>
                                    <p>Check that the term you entered is correct or try using a different search term.</p>
                                </div>
                            :
                                <nav className='hasContent'>
                                    <ul>
                                        { searchItens.map((item: SearchItensType, index: Key) => {
                                            return (
                                                <li key={index}>
                                                    <Link href={item.href}>
                                                        <a>{item.content}&nbsp;<span>{item.response}</span></a>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </nav>
                            }
                        </>
                    }
                </div>
            }

            <style jsx>{`
                .containerSearch {
                    max-width: ${isPopover ? 'initial' : '14.91rem'};
                    width: ${isPopover ? 'initial' : '100%'};

                    position: relative;
                }

                @media (min-width: 1480px) { .containerSearch { max-width: ${isPopover ? 'initial' : '21.3rem'}; } }

                /* ------------------------------------------------- */

                form {
                    background-color: var(--popover-search-bg);

                    padding: 0.21rem;

                    display: flex;
                    flex-direction: row-reverse;
                    align-items: center;
                    justify-content: flex-end;

                    border-radius: ${isPopover ? '0 0 0.5rem 0.5rem' : '0.35rem'};
                }

                form input {
                    max-width: calc(320px - 10.96rem);
                    width: ${isPopover ? 'initial' : '100%'};
                    height: 1.4rem;

                    background-color: transparent;
                    color: var(--popover-search-text);
                    border: none;
                    outline: none;
                    font-size: 0.8rem;
                }
                form input::placeholder { color: var(--blue-200); }

                form button {
                    width: 1.488rem;
                    height: 1.488rem;

                    filter:
                        invert(61%)
                        sepia(21%)
                        saturate(408%)
                        hue-rotate(179deg)
                        brightness(140%)
                        contrast(86%);
                }
                form input:not(:placeholder-shown) ~ button { filter: none; }

                @media (min-width: 338px) { form input { max-width: ${isPopover ? 'initial' : '18.75rem'}; } }
                @media (min-width: 1480px) {
                    form {
                        padding: 0.3rem;

                        border-radius: ${isPopover ? '0 0 0.5rem 0.5rem' : '0.5rem'};
                    }
                    form input { height: 2rem; font-size: 1rem; }
                    form button { width: 2.125rem; height: 2.125rem; }
                }

                /* ------------------------------------------------- */

                .response {
                    width: 100%;
                    min-height: 4.75rem;

                    background-color: var(--popover-search-bg);

                    margin-top: 0.438rem;

                    position: absolute;

                    border-radius: 0.5rem;
                    -webkit-border-radius: 0.5rem;
                    -moz-border-radius: 0.5rem;
                    -ms-border-radius: 0.5rem;
                    -o-border-radius: 0.5rem;

                    overflow: hidden;
                }
                .response span { color: var(--pink-200); }

                .response .hasContent ul li {
                    font-size: 0.75rem;
                    line-height: 1.5rem;

                    padding: 0.438rem 0.875rem;
                }
                .response .hasContent ul li:hover { background-color: var(--luminosity-5p); }

                .response .notFound {
                    min-height: 4.75rem;

                    background-color: var(--popover-search-bg);
                    background-image: url(/assets/header/Hand3D.png);
                    background-repeat: no-repeat;
                    background-blend-mode: luminosity;
                    background-position: center bottom;

                    padding: 0 0.9rem;

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .response .notFound span,
                .response .notFound p {
                    font-size: 0.625rem;
                    font-weight: 100;
                    text-align: center;
                }
                .response .notFound p {
                    max-width: 14.375rem;

                    color: var(--luminosity-70p);
                }
            `}</style>
        </div>
    )
}
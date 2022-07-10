/* Import --------------------------------------------------------------- */

import { useContext } from 'react'

import { TogglePopoverItemsContext } from '../../../../contexts/TogglePopoverItemsContext'

import { Arrow }  from '../Arrow'
import { Search } from './Search'
import { Button } from '../../Button'

import Image from 'next/image'

/* ---------------------------------------------------------------------- */

interface PopoverSearchProps { arrow?: boolean }

export const PopoverSearch = ({ arrow = true }: PopoverSearchProps) => {
    const { handleOpen, isOpenSearch } = useContext(TogglePopoverItemsContext)

    return (
        <>
            <div className='popoverContainer'>
                <Button styleBtn='options' onClick={() => handleOpen({ type: 'search' })}>
                    <Image
                        src={`/assets/header/search.svg`}
                        alt={`search icon`}
                        width={14}
                        height={14}
                    />
                </Button>

                { isOpenSearch &&
                    <div className='popoverItem'>
                        { arrow && <Arrow /> }
                        <Search />
                    </div>
                }
            </div>

            <style jsx>{`
                .popoverContainer { position: relative; }
                .popoverItem {
                    padding-top: ${arrow ? '0' : '0.531rem'};

                    position: absolute;
                    right: calc(100% - 100%);

                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }
            `}</style>
        </>
    )
}
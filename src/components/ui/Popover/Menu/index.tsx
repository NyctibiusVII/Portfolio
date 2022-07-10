/* Import ---------------------------------------------------------------------- */ // - x70

import { useContext } from 'react'

import { TogglePopoverItemsContext } from '../../../../contexts/TogglePopoverItemsContext'

import { Menu }   from './Menu'
import { Arrow }  from '../Arrow'
import { Button } from '../../Button'

import Image from 'next/image'

/* ---------------------------------------------------------------------- */

interface PopoverMenuProps { arrow?: boolean }

export const PopoverMenu = ({ arrow = true }: PopoverMenuProps) => {
    const { handleOpen, isOpenMenu } = useContext(TogglePopoverItemsContext)

    return (
        <>
            <div className='popoverContainer'>
                <Button styleBtn='options' onClick={() => handleOpen({ type: 'menu' })}>
                    <Image
                        src={`/assets/header/menu.svg`}
                        alt={`menu icon`}
                        width={14}
                        height={14}
                    />
                </Button>

                { isOpenMenu &&
                    <div className='popoverItem'>
                        { arrow && <Arrow /> }
                        <Menu />
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
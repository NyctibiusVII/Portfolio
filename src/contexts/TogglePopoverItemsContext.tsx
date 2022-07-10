/* Import --------------------------------------------------------------- */

import {
    useState,
    ReactNode,
    createContext
} from 'react'

import { PopoverItemsTypes } from '../interfaces/componentProps'

/* ---------------------------------------------------------------------- */

interface TogglePopoverItemsData {
    handleOpen:   ({ type }: PopoverItemsTypes) => void
    isOpenMenu:   boolean
    isOpenSearch: boolean
}
interface  TogglePopoverItemsProviderProps {
    children: ReactNode
}

export const TogglePopoverItemsContext = createContext({} as TogglePopoverItemsData)

export function TogglePopoverItemsProvider({ children }: TogglePopoverItemsProviderProps) {
    const [isOpenMenu,     setIsOpenMenu] = useState(false)
    const [isOpenSearch, setIsOpenSearch] = useState(false)

    function handleOpen({ type }: PopoverItemsTypes) {
        const
            toggleMenu   = () => setIsOpenMenu(!isOpenMenu),
            toggleSearch = () => setIsOpenSearch(!isOpenSearch)

        switch (type) {
            case 'menu':
                if (isOpenSearch) {
                    toggleSearch()
                    toggleMenu()
                } else toggleMenu()
                break

            case 'search':
                if (isOpenMenu) {
                    toggleMenu()
                    toggleSearch()
                } else toggleSearch()
                break

            default: break
        }
    }

    return (
        <TogglePopoverItemsContext.Provider
            value={{
                handleOpen,
                isOpenMenu,
                isOpenSearch
            }}
        >
            { children }
        </TogglePopoverItemsContext.Provider>
    )
}
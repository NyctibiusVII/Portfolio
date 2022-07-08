export interface PopoverItemsTypes {
    type: 'menu' | 'search'
}

export interface MenuItensType {
    href:    string
    content: string
}

export interface SearchItensType {
    href:     string
    content:  string
    response: string
}

export interface LogoProps {
    styleColor?: '1' | '2'
}

export interface LoadingProps {
    color?:   string
    width?:   string
    height?:  string
    percent?: boolean
}
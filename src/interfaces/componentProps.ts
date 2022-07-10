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
    width?:   number
    height?:  number
    percent?: boolean
}



/**
 * Defines the type of style and design that the Button component will receive.
 */
type StyleButtonType = 'line' | 'normal' | 'social' | 'options' | 'gradient' | 'devLanguages'
/**
 * Defines style and content, @interface ButtonProps extends `React.ButtonHTMLAttributes<HTMLButtonElement>`
 *
 * @param styleBtn default { `"normal"` }
 * @type { StyleButtonType }
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    styleBtn?: StyleButtonType
}
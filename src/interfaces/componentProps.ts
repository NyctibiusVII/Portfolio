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



/**
 * Set a style to the component
 *
 * @value { `"1"` } : Purple and pink color
 * @value { `"2"` } : Purple and transparent color
 */
type StyleColorType = '1' | '2'
/**
 * Defines the type of style and design that the Logo component will receive.
 *
 * @param styleColor default { `"1"` } - The logo style
 *
 * @type { StyleColorType }
 */
export interface LogoProps { styleColor?: StyleColorType }



/**
 * Defines the color and size that the Loading component will receive.
 *
 * @param color default { `"#FF80B5"` } - Only hexadecimal colors are allowed.
 * @param width default { `30` }
 * @param height default { `30` }
 * @param percent default { `true` }
 *
 * @alias ReactLoading
 * @see https://github.com/fakiolinho/react-loading
 */
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



/**
 * Defines the type of properties that the Most Used Technologies list will receive.
 */
export type TechnologiesType = {
    fileName: string
    width:    number
}
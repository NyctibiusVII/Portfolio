/* Import --------------------------------------------------------------- */

import {
    BC_Line,
    BC_Normal,
    BC_Social,
    BC_Options,
    BC_Gradient,
    BC_DevLanguages
} from './BC'

import { ButtonProps } from '../../../interfaces/componentProps'

/* ---------------------------------------------------------------------- */

/**
 * The `Button` component is an HTML button element with various styles suitable for each purpose.
 * @see https://github.com/NyctibiusVII/Portfolio/blob/main/README.md#bcs---button-components-
 * @returns `JSX.Element` - { `button` }
 *
 * ![BCs](https://user-images.githubusercontent.com/52816125/178158259-83549818-b37e-41a5-90b2-8ca247c9a175.png)
 */
export const Button = (props: ButtonProps) => ButtonComponent(props)

const ButtonComponent = ({ styleBtn = 'normal', ...rest }: ButtonProps) => {
    switch (styleBtn) {
        case 'line':         return <BC_Line         {...rest} />
        case 'normal':       return <BC_Normal       {...rest} />
        case 'social':       return <BC_Social       {...rest} />
        case 'options':      return <BC_Options      {...rest} />
        case 'gradient':     return <BC_Gradient     {...rest} />
        case 'devLanguages': return <BC_DevLanguages {...rest} />

        default: return <Button>E R R O R _ 5 0 0</Button>
    }
}
/* Import --------------------------------------------------------------- */

import { ButtonProps } from '../../../../../interfaces/componentProps'

import styles from './index.module.scss'

/* ---------------------------------------------------------------------- */

/**
 * `BC_DevLanguages` is styled for the purpose of using them as mini-cards.
 *
 * @param children - Only icons - { `svg` | `img` | `next/Image` }
 */
export const BC_DevLanguages = ({ children, className, ...rest }: ButtonProps) =>
<>
    <button className={`${styles.container}${className ? ' ' + className : ''}`} {...rest}>{ children }</button>

    <style jsx>{`
        /* Tablet / Desktop */
        .activeCard {
            width: 5rem;
            height: 5rem;

            backdrop-filter: blur(1rem);

            border-radius: 1rem;
            -webkit-border-radius: 1rem;
            -moz-border-radius: 1rem;
            -ms-border-radius: 1rem;
            -o-border-radius: 1rem;
        }
    `}</style>
</>
/* Import --------------------------------------------------------------- */

import type { ButtonProps } from '../../../../../interfaces/componentProps'

import styles from './index.module.scss'

/* ---------------------------------------------------------------------- */

/**
 * `BC_Social` is styled for the purpose of using it with social links.
 *
 * @param children - Only icons - { `svg` | `img` | `next/Image` }
 */
export const BC_Social = ({ children, className, ...rest }: ButtonProps) =>
    <button className={`${styles.container}${className ? ' ' + className : ''}`} {...rest}>{ children }</button>
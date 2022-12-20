/* Import --------------------------------------------------------------- */

import type { ButtonProps } from '../../../../../interfaces/componentProps'

import styles from './index.module.scss'

/* ---------------------------------------------------------------------- */

/**
 * `BC_Options` is styled for the purpose of using it as a `Menu Button`.
 *
 * @param children - Only icons - { `svg` | `img` | `next/Image` }
 */
export const BC_Options = ({ children, className, ...rest }: ButtonProps) =>
    <button className={`${styles.container}${className ? ' ' + className : ''}`} {...rest}>{ children }</button>
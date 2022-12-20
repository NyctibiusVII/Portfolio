/* Import --------------------------------------------------------------- */

import type { ButtonProps } from '../../../../../interfaces/componentProps'

import styles from './index.module.scss'

/* ---------------------------------------------------------------------- */

/**
 * `BC_Normal` is styled for the purpose of using it as a standard multi-function button.
 *
 * @param children - Recommended `text`
 */
export const BC_Normal = ({ children, className, ...rest }: ButtonProps) =>
    <button className={`${styles.container}${className ? ' ' + className : ''}`} {...rest}>{ children }</button>
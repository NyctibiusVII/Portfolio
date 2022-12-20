/* Import --------------------------------------------------------------- */

import type { ButtonProps } from '../../../../../interfaces/componentProps'

import styles from './index.module.scss'

/* ---------------------------------------------------------------------- */

/**
 * `BC_Line` is styled for the purpose of using it as an alternative multifunctional button.
 *
 * @param children - Recommended `text`
 */
export const BC_Line = ({ children, className, ...rest }: ButtonProps) =>
    <>
        <button className={`${styles.container}${className ? ' ' + className : ''}`} {...rest}>{ children }</button>

        <style jsx>{`
            /* Mobile */
            .inCard {
                max-width: 30rem;
                width: 100%;

                font-size: 0.625rem;
                font-weight: 600;

                padding: 0.625rem;

                border-radius: 0.5rem;
                -webkit-border-radius: 0.5rem;
                -moz-border-radius: 0.5rem;
                -ms-border-radius: 0.5rem;
                -o-border-radius: 0.5rem;
            }



            /* Tablet / Desktop */
            @media (min-width: 780px) {
                .inCard {
                    font-size: 0.7rem;

                    padding: 0.7rem;
                }
            }

            /* Desktop */
            @media (min-width: 1480px) {
                .inCard {
                    font-size: 1rem;
                    font-weight: 700;

                    padding: 1rem;
                }
            }
        `}</style>
    </>
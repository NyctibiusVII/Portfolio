/* Import --------------------------------------------------------------- */

import { LogoProps } from '../../interfaces/componentProps'

import Image  from 'next/image'

/* ---------------------------------------------------------------------- */

export const Logo = ({ styleColor = '1' }: LogoProps) => {
    const logoStyleColor = `var(--gradient-logo-${styleColor})`

    return (
        <div className='logo'>
            <div className='icon'>
                <Image
                    src={`/assets/logo/logo-${styleColor}.svg`}
                    alt={`Logo icon`}
                    width={68}
                    height={68}
                />
            </div>
            <span className='username' translate='no'>NyctibiusVII</span>

            <style jsx>{`
                /* Mobile */
                .logo { display: flex; align-items: center; }
                .icon { display: none !important; }
                .username {
                    background-image: ${logoStyleColor};
                    background-clip: text;
                    text-fill-color: transparent;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    color: var(--white);
                    font-size: 1.25rem;
                    font-weight: 700;
                }



                /* Tablet / Desktop */
                @media (min-width: 780px) {
                    .logo { gap: 0.525rem; }
                    .icon {
                        width: 2.975rem !important;
                        height: 2.975rem !important;

                        display: block !important;
                    }
                    .username { font-size: 1.4rem; }
                }
                /* Desktop */
                @media (min-width: 1480px) {
                    .logo { gap: 0.75rem; }
                    .icon { width: 4.25rem !important; height: 4.25rem !important; }
                    .username { font-size: 2rem; }
                }
            `}</style>
        </div>
    )
}
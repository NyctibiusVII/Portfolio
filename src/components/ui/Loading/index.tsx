/* Import ---------------------------------------------------------------------- */ // - x70

import ReactLoading from 'react-loading'

import { LoadingProps } from '../../../interfaces/componentProps'

/* ---------------------------------------------------------------------- */

export const Loading = ({ color = '#FF80B5', width = '30%', height = '30%', percent = false }: LoadingProps) => {
    return (
        <div className={`loadingContainer ${percent ? 'percent' : ''}`}>
            <ReactLoading type='bubbles' color={color} width={width} height={height} />

            <style jsx>{`
                .loadingContainer {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .loadingContainer .percent { height: 100% !important; }
            `}</style>
        </div>
    )
}
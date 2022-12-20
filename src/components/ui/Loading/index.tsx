/* Import --------------------------------------------------------------- */

import ReactLoading from 'react-loading'

import type { LoadingProps } from '../../../interfaces/componentProps'

/* ---------------------------------------------------------------------- */

export const Loading = ({ color = '#FF80B5', width = 30, height = 30, percent = true }: LoadingProps) => {
    const colorHex = color.charAt(0) === '#' ? color : `#${color}`
    const colorLength = colorHex.slice(1).length

    const __width  = String(width)  + unitOfMeasurement(percent)
    const __height = String(height) + unitOfMeasurement(percent)
    const __color  = colorLength === 3 || colorLength === 6 ? colorHex : hexColorTypo(color)

    return (
        <div className={'loadingContainer'}>
            <ReactLoading type='bubbles' color={__color} width={__width} height={__height} />

            <style jsx>{`
                .loadingContainer {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}

const err_msg   = 'Error: Loading component is not working properly.'
const err_color = '#FF1C1C'

const hexColorTypo      = (color:   string)  => { console.error(`${err_msg}\n(#err_color: ${color})`); return err_color }
const unitOfMeasurement = (percent: boolean) => percent ? '%' : 'px'
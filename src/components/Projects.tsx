/* Import --------------------------------------------------------------- */

import {
    useEffect,
    useState
} from 'react'
import Carousel from 'nuka-carousel'

import { ProjectsProps } from '../interfaces/componentProps'

import { Button } from './ui/Button'
import { Card }   from './ui/Card'

import Image  from 'next/image'
import Router from 'next/router'

import styles from '../styles/components/Projects.module.scss'

/* ---------------------------------------------------------------------- */

export const Projects = ({ cardsProps }: ProjectsProps) => {
    const adaptiveSlideSizes = {
        w320px: {
            slidesToShow: 1,
            slidesToScroll: 1
        },
        w480px: {
            slidesToShow: 2,
            slidesToScroll: 1
        },
        w780px: {
            slidesToShow: 3,
            slidesToScroll: 3
        },
        w960px: {
            slidesToShow: 4,
            slidesToScroll: 4
        },
        w1480px: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    }

    const [slidesToShowValue, setSlidesToShowValue] = useState(adaptiveSlideSizes.w320px.slidesToShow)
    const [slidesToScrollValue, setSlidesToScrollValue] = useState(adaptiveSlideSizes.w320px.slidesToScroll)

    const handleResize = () => {
        if (window.innerWidth >= 1480) {
            setSlidesToShowValue(adaptiveSlideSizes.w1480px.slidesToShow)
            setSlidesToScrollValue(adaptiveSlideSizes.w1480px.slidesToScroll)
        } else if (window.innerWidth >= 960) {
            setSlidesToShowValue(adaptiveSlideSizes.w960px.slidesToShow)
            setSlidesToScrollValue(adaptiveSlideSizes.w960px.slidesToScroll)
        } else if (window.innerWidth >= 780) {
            setSlidesToShowValue(adaptiveSlideSizes.w780px.slidesToShow)
            setSlidesToScrollValue(adaptiveSlideSizes.w780px.slidesToScroll)
        } else if (window.innerWidth >= 480) {
            setSlidesToShowValue(adaptiveSlideSizes.w480px.slidesToShow)
            setSlidesToScrollValue(adaptiveSlideSizes.w480px.slidesToScroll)
        } else {
            setSlidesToShowValue(adaptiveSlideSizes.w320px.slidesToShow)
            setSlidesToScrollValue(adaptiveSlideSizes.w320px.slidesToScroll)
        }
    }
    if (typeof window !== "undefined") window.addEventListener('resize', handleResize)

    useEffect(() => {
        handleResize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className={`${styles.container} containerWidthLimitation`}>
            <header>
                <h2>Projects</h2>

                <Button styleBtn='gradient' title='Go to Explore page' onClick={() => Router.push('/explore')}>
                    <Image
                        src={`/assets/projects/rocket.svg`}
                        alt='Rocket icon'
                        width={24}
                        height={24}
                        loading='lazy'
                    />
                    &nbsp;Explore All
                </Button>
            </header>

            <Carousel
                defaultControlsConfig={{
                    nextButtonText: '▷',// Or: → | ▶
                    prevButtonText: '◁',
                    nextButtonStyle: {
                        width: '2rem',
                        height: '2rem',
                        backgroundColor: '#38264633',
                        border: '1px solid #ffffff33',
                        borderRadius: '0.4rem',
                        position: 'absolute',
                        top: 'calc(50% - 1rem)',
                        right: '-1.7rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    prevButtonStyle: {
                        width: '2rem',
                        height: '2rem',
                        backgroundColor: '#38264633',
                        border: '1px solid #ffffff33',
                        borderRadius: '0.4rem',
                        position: 'absolute',
                        top: 'calc(50% - 1rem)',
                        left: '-1.7rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    pagingDotsStyle: {
                        backgroundColor: 'transparent',
                        WebkitMarginStart: '0.3rem',
                        position: 'relative',
                        top: '2rem',
                        fill: '#fff'
                    }
                }}
                slidesToShow={slidesToShowValue}
                slidesToScroll={slidesToScrollValue}
                wrapAround
                autoplay
                autoplayInterval={7000}
                speed={1000}
            >
                { cardsProps.map((cardProps, index) => <Card key={index} data={cardProps} />) }
            </Carousel>
        </section>
    )
}
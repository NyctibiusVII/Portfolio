/* Import --------------------------------------------------------------- */

import type { GetStaticProps }  from 'next'
import type { ProjectDataType } from '../interfaces/componentProps'

import { Header }       from '../components/Header'
import { Hero }         from '../components/Hero'
import { Stack }        from '../components/Stack'
import { Projects }     from '../components/Projects'
import { Technologies } from '../components/Technologies'
import { Footer }       from '../components/Footer'

import { axiosGithubGraphQL } from '../services/api'
import githubColors from '../../github-colors.json'

import axios from 'axios'
import Head  from 'next/head'

import styles from '../styles/pages/home.module.scss'

/* ---------------------------------------------------------------------- */

interface HomeProps {
    projectsProps: Array<ProjectDataType>
}

const Home = ({ projectsProps }: HomeProps) => {
    return (
        <>
            <Head><title>Portfolio - Matheus V.</title></Head>

            <Header />
            <div className={styles.container}>
                <div id={styles.bg} />

                <Hero />
                <Stack />
                <Projects cardsProps={projectsProps} />
                <Technologies />
            </div>
            <Footer />
        </>
    )
}

export default Home



export const getStaticProps: GetStaticProps = async () => {
    const data = axios.get(`https://api.github.com/users/NyctibiusVII/repos`)

    type GithubProjectDataTypes = {
        name:             string
        updated_at:       string
        stargazers_count: string
        language:         string
        html_url:         string
        homepage:         string
    }

    // const projectsToShow = [
    //     'BoletimEscolar',
    //     'DashGo',
    //     'Dev.Finances',
    //     'Happy',
    //     'Letmeask',
    //     'MoveIt',
    //     'Podcastr',
    //     'Proffy'
    // ]

    const projectsToHide = [
        '4AMIGOS-app',
        'CursoJS-DevAprender',
        'eSports',
        'github-readme-stats',
        'InstaCloneHome',
        'JobsCalc',
        'NetflixInterface',
        'NyctibiusVII',
        'nyctibiusvii-theme',
        'Portfolio',
        'express-api-starter-ts',
    ]

    const projects = await data.then(res => res.data.map(async (project: GithubProjectDataTypes) => {
        const [year, month, day] = project.updated_at.slice(0, 10).split('-')
        const fullMonth = (month: string) => {
            switch (month) {
                case '01': return 'Jan'
                case '02': return 'Feb'
                case '03': return 'Mar'
                case '04': return 'Apr'
                case '05': return 'May'
                case '06': return 'Jun'
                case '07': return 'Jul'
                case '08': return 'Aug'
                case '09': return 'Sep'
                case '10': return 'Oct'
                case '11': return 'Nov'
                case '12': return 'Dec'
            }
        }
        const updatedAt = [fullMonth(month), day+',', year].join(' ')

        const language = project.language as any
        const color = (githubColors as any)[language] === '' ? '#F2B4B0' : (githubColors as any)[language]

        const GET_IMAGE = `{ repository(owner: "NyctibiusVII", name: "${project.name}") { openGraphImageUrl } }`
        const image = await axiosGithubGraphQL.post('', { query: GET_IMAGE })
        .then(res => res.data.data.repository.openGraphImageUrl as string)

        return {
            name:     project.name             ?? '...',
            updated:  updatedAt                ?? '---',
            starred:  project.stargazers_count ?? '-',
            language: project.language         ?? '-',
            color:    color                    ?? '#F2B4B0',
            image:    image                    ?? '/assets/projects/picture.png',
            github:   project.html_url         ?? `https://github.com/NyctibiusVII`,
            online:   project.homepage         ?? ''
        }
    })) as ProjectDataType[]

    const allProjects = await Promise.all(projects)

    const projectsProps = allProjects.filter(project => !projectsToHide.includes(project.name))

    return { props: {  projectsProps }, revalidate: 60 * 60 * 24 /* 1 dia */ }
}
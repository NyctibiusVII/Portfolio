/* Import --------------------------------------------------------------- */

import Document, { Html, Head, Main, NextScript } from 'next/document'

/* ---------------------------------------------------------------------- */

export default class MyDocument extends Document {
    render() {
        const
            enUS  = 'en-US',
            title = 'Portfolio - (Matheus Vidigal)',
            site  = 'Portfolio',
            link  = 'https://nyctibiusvii.vercel.app',
            favicon = `${ link }/favicon.svg`,
            homeImg = `${ link }/HomePage-1366x768.png`,
            creator = 'Matheus Vidigal - (NyctibiusVII)',
            userTwitter = '@NyctibiusVII',
            description = 'Meu portfolio 💻',
            keywords    = 'Portfolio, Develop, Desenvolvedor, Front-end, FullStack, Matheus Vidigal, ReactJS, NextJS'

        return (
            <Html lang={ enUS }>
                <Head>
                    <meta charSet='utf-8'                  />
                    <meta name='language' content={ enUS } />

                    <meta name='robots'       content='all'           />
                    <meta name='rating'       content='general'       />
                    <meta name='distribution' content='global'        />
                    <meta name='description'  content={ description } />

                    <meta name='MobileOptimized'         content='320'                        />
                    <meta name='HandheldFriendly'        content='True'                       />
                    <meta name='google'                  content='translate'                  />
                    <meta name='referrer'                content='no-referrer-when-downgrade' />
                    <meta name='theme-color'             content='#030812'                  />
                    <meta name='msapplication-TileColor' content='#030812'                  />
                    <meta name='msapplication-TileImage' content={ favicon }                  />

                    <meta name='author'   content={ creator }  />
                    <meta name='creator'  content={ creator }  />
                    <meta name='keywords' content={ keywords } />

                    <meta httpEquiv='content-type'     content='text/html; charset=UTF-8' />
                    <meta httpEquiv='content-language' content={ enUS }                   />
                    <meta httpEquiv='X-UA-Compatible'  content='ie=edge'                  />

                    <meta property='og:title'            content={ title }       />
                    <meta property='og:description'      content={ description } />
                    <meta property='og:locale'           content={ enUS }        />
                    <meta property='og:type'             content='website'       />
                    <meta property='og:site_name'        content={ site }        />
                    <meta property='og:url'              content={ link }        />
                    <meta property='og:image'            content={ homeImg }     />
                    <meta property='og:image:secure_url' content={ homeImg }     />
                    <meta property='og:image:alt'        content='Thumbnail'     />
                    <meta property='og:image:type'       content='image/png'     />
                    <meta property='og:image:width'      content='1366'          />
                    <meta property='og:image:height'     content='768'           />

                    <meta property='article:author' content={ creator } />

                    <meta name='twitter:title'        content={ title }             />
                    <meta name='twitter:description'  content={ description }       />
                    <meta name='twitter:card'         content='summary_large_image' />
                    <meta name='twitter:site'         content={ site }              />
                    <meta name='twitter:creator'      content={ userTwitter }       />
                    <meta name='twitter:image'        content={ homeImg }           />
                    <meta name='twitter:image:src'    content={ homeImg }           />
                    <meta name='twitter:image:alt'    content='Thumbnail'           />
                    <meta name='twitter:image:width'  content='1366'                />
                    <meta name='twitter:image:height' content='768'                 />

                    <link rel='shortcut icon' href='assets/favicon.svg' type='image/svg' />
                    <link rel='canonical' href={ link } />

                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
                    <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@700&amp;family=Urbanist:wght@100;400;600;700&amp;display=swap' rel='stylesheet' />
                </Head>
                <body>
                    <Main />
                    <noscript data-n-css=''>
                        <br/><br/>
                        Caro leitor!<br/><br/>
                        Se você estiver lendo esta mensagem é porque o seu navegador não suporta<br/>
                        &quot;Javascript&quot; ou porque a permissão de executar &quot;Javascript&quot; está<br/>
                        desabilitada, se for o caso, por favor habilite.
                    </noscript>
                    <NextScript />
                </body>
            </Html>
        )
    }
}
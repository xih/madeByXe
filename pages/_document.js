import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import 'styles/global-styles'
import Typekit from 'react-typekit'
import ReactGA from 'react-ga'

export default class SiteDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    // Trying to add google analytics
    ReactGA.initialize('UA-110243214-1')
    ReactGA.pageview(window.location.pathname + window.location.search)

    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/sanitize.css/2.0.0/sanitize.min.css' />
          <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.7.4/tachyons.min.css' />
          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css' />
          <link rel='apple-touch-icon' sizes='180x180' href='/static/favicon/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon/favicon-16x16.png' />
          <link rel='manifest' href='/static/favicon/manifest.json' />
          <link rel='mask-icon' href='/static/favicon/safari-pinned-tab.svg' color='#5bbad5' />
          <meta name='theme-color' content='#ffffff' />
          <Typekit kitId='ust7dkr' />
          {styleTags}
        </Head>
        <body>
          <div className='root'>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}

import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ title, description, keywords, viewport, children }) {
   return (
      <div>
         <Head>
            <title> {title} </title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <meta name='viewport' content={viewport} />
         </Head>
         <div className='content'>
            <Header />
            <div> {children} </div>
            <Footer />
         </div>
      </div>
   )
}

Layout.defaultProps = {
   title: '{JSON} Placeholder',
   description: ' {JSON} Placeholder Application ',
   keywords: '{JSON} Placeholder, Task ',
   viewport: 'width=device-width, initial-scale=1.0',
}

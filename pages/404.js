import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '../components/Layout'

export default function NotFound() {
   const router = useRouter()

   useEffect(() => {
      setTimeout(() => {
         router.push('/')
      }, 3000)
   }, [router])

   return (
      <Layout className='not-found'>
         <h1>Ooops... 404 Not Found</h1>
         <h2>That page cannot be found :(</h2>
         <p>
            Go back to the
            <Link href='/'>
               <a>Homepage</a>
            </Link>
         </p>
      </Layout>
   )
}

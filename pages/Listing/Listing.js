import Link from 'next/link'
import Layout from '../../components/Layout'
import styles from '../../styles/Jobs.module.css'

export default function Listing({ states }) {
   return (
      <Layout>
         <h1>All Listing</h1>
         {states.map((state) => (
            <Link href={'/Listing/' + state.id} key={state.id}>
               <a className={styles.single}>
                  <h3>{state.name}</h3>
               </a>
            </Link>
         ))}
      </Layout>
   )
}

export const getStaticProps = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await res.json()

   return {
      props: { states: data },
   }
}

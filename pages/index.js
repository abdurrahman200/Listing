import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
   return (
      <Layout className={styles.container}>
         <main className={styles.main}>
            <h1 className={styles.title}>
               Welcome to <a href='https://jsonplaceholder.typicode.com/'>JSON Placeholder</a>
            </h1>

            <p className={styles.description}>
               Get started by editing <code className={styles.code}>pages/index.js</code>
            </p>

            <div className={styles.grid}>
               <Link href='/'>
                  <a className={styles.card}>
                     <h2>Home &rarr;</h2>
                     <p>Find in-depth information about Next.js features and API.</p>
                  </a>
               </Link>
               <Link href='/about'>
                  <a className={styles.card}>
                     <h2>About &rarr;</h2>
                     <p>Learn about Next.js in an interactive course with quizzes!</p>
                  </a>
               </Link>

               <Link href='/Listing'>
                  <a className={styles.card}>
                     <h2>Listing &rarr;</h2>
                     <p>Discover and deploy boilerplate example Next.js projects.</p>
                  </a>
               </Link>

               <a href='https://akaid.netlify.app/' className={styles.card}>
                  <h2>Contact With Me &rarr;</h2>
                  <p>I am a life long learner. I am a web Developer and I like Learning JavaScript .</p>
               </a>
            </div>
         </main>
      </Layout>
   )
}

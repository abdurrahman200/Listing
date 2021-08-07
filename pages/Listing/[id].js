import Layout from '../../components/Layout'

export default function Detail({ states }) {
   return (
      <Layout>
         <h1> User Details </h1>
         <h3>{states.name}</h3>
         <p>{states.email}</p>
         <p>{states.website}</p>
         <p>{states.address.city}</p>
      </Layout>
   )
}

export const getStaticPaths = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await res.json()

   // map data to an array of path objects with params (id)
   const paths = data.map((states) => {
      return {
         params: { id: states.id.toString() },
      }
   })

   return {
      paths,
      fallback: false,
   }
}

export const getStaticProps = async (context) => {
   const id = context.params.id
   const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
   const data = await res.json()

   return {
      props: { states: data },
   }
}

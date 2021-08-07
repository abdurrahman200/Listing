import Link from 'next/link'

export default function Header() {
   return (
      <nav>
         <div className='logo'>
            <h1>JSON Placeholder</h1>
         </div>
         <Link href='/'>
            <a>Home</a>
         </Link>
         <Link href='/about'>
            <a>About</a>
         </Link>
         <Link href='/Listing/Listing'>
            <a>Listing</a>
         </Link>
      </nav>
   )
}

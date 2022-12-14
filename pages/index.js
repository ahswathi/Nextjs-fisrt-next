import Link from 'next/link';

const index = () => {
  return (
   <>
    <nav>
      <ul className="menu">
        <Link href="/">
        Home
        </Link>
        <Link href="/about">
        About
        </Link>
        <Link href="/contact">
        Contact 
        </Link>
        <Link href="/blog">
        Blog 
        </Link>
        <Link href="/product">
        Product  
        </Link>
      </ul>
    </nav>
    <div className='content'>Home Content</div>
   </>
  )
}
export default index;
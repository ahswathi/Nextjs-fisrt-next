import Link from 'next/link';
const Contact = () => {
    return (
      <>
      <nav>
      <ul className="menu">
      <li>
        <Link href="/">
          Home
        </Link>
      </li> 
      <li>
        <Link href="/about">
          About
        </Link>
      </li>
      <li>
        <Link href="/contact">
         Contact 
        </Link>
      </li>
      <li>
        <Link href="/blog">
         Blog 
        </Link>
      </li>
      <li>
        <Link href="/product">
          Product  
        </Link>
      </li>
      </ul>
    </nav>
    <div className='content'>Contact Content</div>
    </>
   
    )
  }
  export default Contact;
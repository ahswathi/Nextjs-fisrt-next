
import { useEffect } from 'react';
import {  useRouter } from 'next/router'
  const Error = () => {
  const router = useRouter();
  const handleerror = () =>{
    router.push("/");
  };
  useEffect( () => {
    setTimeout( () =>{
      router.push("/");
    },3000)
  },[])
    return (
      <>
    <h1 className='content'>Error 404 Found</h1>
    <a onClick={ handleerror } className='content'>Back To Home</a>
    </>
    )
  }
export default Error;



{/* ***************Method 1************* */}
/* import Link from 'next/link';
const Error = () => {
    return (
      <>
    <h1 className='content'>Error 404 Found</h1>
    <Link href="/"> 
    <h3 className='content'>Back To Home</h3>
    </Link>
    </>
    )
  }
export default Error; */

{/* ***************Method 2************* */}
/* import {  useRouter } from 'next/router'
const Error = () => {
  const router = useRouter();
    return (
      <>
        <h1 className='content'>Error 404 Found</h1>
        <a onClick={ () => router.push("/") } className='content'>Back To Home</a>
      </>
    )
}
export default Error; */

{/* ***************Method 3************* */}
/* import {  useRouter } from 'next/router'
  const Error = () => {
    const router = useRouter();
    const handleerror = () =>{
      router.push("/");
    };
      return (
        <>
      <h1 className='content'>Error 404 Found</h1>
      <a onClick={ handleerror } className='content'>Back To Home</a>
      </>
      )
    }
export default Error; */
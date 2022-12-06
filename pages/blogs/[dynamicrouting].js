import { useRouter } from 'next/router';

const dynamicrouting = () => {
    const router = useRouter();
    const dynamic = router.query.dynamicrouting;
    return (
      <div>{dynamic} Content</div>
    )
  }
  export default dynamicrouting;
import { useRouter } from 'next/router';

export default function ProductsItem() {
  const router = useRouter();

  console.log(router);
  return (
    <>
      <p>{router.pathname}</p>
      <p>{router.query.id}</p>
    </>
  );
}

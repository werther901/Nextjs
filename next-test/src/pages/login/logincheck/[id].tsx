import { useRouter } from "next/router";

const LoginCheck = () => {

  const router = useRouter();

  // 주소에 들어온 id 꺼내는법
  const { id } = router.query;


  
  return <div>{id}</div>;
}

export default LoginCheck;
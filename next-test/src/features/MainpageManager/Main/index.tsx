import { useState } from "react";
import Main2 from "../Main2";
import { MainStyled } from "./styled";
import clsx from "clsx";
import { useRouter } from "next/router";

// const Main = () => {
  
//   const data = [
//     {id: 1, name: 'asd', age: 24, gender: 'male'}
//   ]
// }

const Main = () => {
  // useState사용 시에도 타입 지정 가능
  const [number, setNumber] = useState<number>(1);


  const data = [
    {id: 1, name: 'abc', age: 24, gender: 'male'},
    {id: 1, name: 'def', age: 24, gender: 'male'},
    {id: 1, name: 'ghi', age: 24, gender: 'male'},
  ];

  const sample = data?.map((x: any, i: number) => x.name);
  // console.log(sample)


  // 페이지 이동
  const router = useRouter();


  return (
    <MainStyled className={clsx('main-wrap')}>
      <div className="main-title">메인페이지</div>
      <button onClick={() => {router.push("/login")}}>로그인 페이지 이동</button>
      <button onClick={() => {router.push('https://www.naver.com/')}}>네이버로 가기</button>
      <button onClick={() => {router.push('https://www.google.co.kr/?hl=ko')}}>구글로 가기</button>
      <Main2 id={1} name={""} age={0} gender={"male"}></Main2>
    </MainStyled>
  )
    
}

export default Main;
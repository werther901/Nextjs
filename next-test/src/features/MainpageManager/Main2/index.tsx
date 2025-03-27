import { Main2Styled } from "./styled";

// props 가져오는법
interface MainProps {
  id: any;
  name?: string; // '?' : 있을수도 없을수도 있음(예외처리)
  age: number;
  gender: 'male'| 'female';
}

const Main2 = ({id, name, age, gender}: MainProps) => {

  return (
    <Main2Styled>
      <div></div>
    </Main2Styled>
  );
  
};

export default Main2;
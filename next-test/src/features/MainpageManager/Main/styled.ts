import styled from "styled-components";

// & : 현재 선택자(컴포넌트 자신)
// &:hover : 현재 요소의 상태 선택자
export const MainStyled = styled.div`
&.main-wrap{
  background-color: red;

  .main-title {
    font-size: 20px;
    color: blue;
    &:hover {
      color: green;
    }
  }

  @media (max-width: 1024px) {
    background-color: black;

    .main-title {
    font-size: 12px;
    }
  }
}
`;


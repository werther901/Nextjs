// 함수나 정규표현식 만들어놓고 어디서나 가져다 쓸 수 있음 그것이 util
// 어디에서나 전역적으로 쓰이는 함수들, 재사용 가능한 함수들 모아두는 곳

// 정규표현식 용 함수 모음 (예시)
export const addFunction = (
  number:number, 
  type:string,
  typeNumber: number) => {

  return type == '-' ? number - typeNumber : number + typeNumber;
};

// 숫자 콤마 넣기(포맷팅 함수)

// 날짜 포맷팅 함수

// 전화번호 포맷팅 함수 등

// 유효성 검사 함수(이메일, 비밀번호, 닉네임 등)

// 네트워크 요청 함수

// 로컬스토리지 토큰 핸들 함수
import { createContext } from "react";
import MyBoardWrite from "../../src/components/units/22-context-api/MyBoardWrite.container";

export const MyContext = createContext(null); // 괄호안은 초기값 적는 곳

export default function ContextAPIPage() {
  const value = {
    isEdit: true,
  };

  return (
    <MyContext.Provider value={value}>
      <MyBoardWrite />
    </MyContext.Provider>
  );
}

// context로 감싼부분만 가능하다
// 그럼 app.ts에서 이걸 적용한다면 모든 폴더에서 함수변수들을 불러올수있다!!

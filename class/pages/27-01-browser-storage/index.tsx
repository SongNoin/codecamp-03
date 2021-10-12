export default function BrowserStoragePage() {
  function onClickSaveCookie() {
    document.cookie = "aaa=철수";
  }

  function onClickSaveLocalStorage() {
    localStorage.setItem("bbb", "영희");
  }

  function onClickSaveSessionStiorage() {
    sessionStorage.setItem("ccc", "훈이");
  }

  function onClickGetCookie() {
    // console.log("myCookie", document.cookie);
    // const email = "aaa@aaa.com"
    // email.split("@")

    const temp = document.cookie // temp = "aaa=철수"
      .split("; ")
      .filter((el) => el.startsWith("aaa="))[0];

    console.log(temp.split("=")[1]);
  } // 쿠키를 가져오는 방법은 로컬스토리지와 세션스토리지보다는 간단하지 않다.

  function onClickGetLocalStorage() {
    const anyname = localStorage.getItem("bbb");
    console.log("로컬스토리지:", anyname);
    // console.log("2번:", anyname);
    // console.log("3번:", anyname);
  }

  function onClickSessionStorage() {
    const anyname2 = sessionStorage.getItem("ccc");
    console.log("세션스토리지:", anyname2);
    // console.log("2번:", anyname2);
    // console.log("3번:", anyname2);
  }

  return (
    <>
      <button onClick={onClickSaveCookie}>쿠키에 저장하기</button>
      <button onClick={onClickSaveLocalStorage}>로컬스토리지에 저장하기</button>
      <button onClick={onClickSaveSessionStiorage}>
        세션스토리지에 저장하기
      </button>
      =========================================================================================================================================
      <button onClick={onClickGetCookie}>쿠키에 있는 값 가져오기</button>
      <button onClick={onClickGetLocalStorage}>
        로컬스토리지에 있는 값 가져오기
      </button>
      <button onClick={onClickSessionStorage}>
        세션스토리지에 있는 값 가져오기
      </button>
    </>
  );
}

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import SignUpUI from "./signup.presenter";
import { CREATE_USER } from "./signup.queries";

export default function SignUp() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const [myEmail, setMyEmail] = useState("");
  const [myName, setMyName] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myCheckPassword, setMyCheckPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkPasswordError, setCheckPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  function onChangeEmail(event: any) {
    setMyEmail(event.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
  }
  function onChangeName(event: any) {
    setMyName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }
  }
  function onChangePassword(event: any) {
    setMyPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  }
  function onChangeCheckPassword(event: any) {
    setMyCheckPassword(event.target.value);
    if (event.target.value !== "") {
      setCheckPasswordError("");
    }
  }

  async function onClickRegister() {
    if (myEmail === "") {
      setEmailError("이메일이 입력되지 않았습니다!");
    }
    if (myName === "") {
      setNameError("이름이 입력되지 않았습니다!");
    }
    if (myPassword === "") {
      setPasswordError("비밀번호가 입력되지 않았습니다!");
    }
    if (myCheckPassword === "") {
      setCheckPasswordError("비밀번호가 입력되지 않았습니다!");
    }

    if (/\w+@\w+\.\w+/.test(myEmail) === false) {
      alert("이메일 형식이 아닙니다!");
      return;
    }
    if (myPassword !== myCheckPassword) {
      alert("비밀번호가 같지 않습니다!");
      return;
    }
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: myEmail,
            password: myPassword,
            name: myName,
          },
        },
      });
      alert("회원가입이 완료되었습니다!");
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <SignUpUI
      emailError={emailError}
      passwordError={passwordError}
      checkPasswordError={checkPasswordError}
      nameError={nameError}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeCheckPassword={onChangeCheckPassword}
      onChangeName={onChangeName}
      onClickRegister={onClickRegister}
    />
  );
}

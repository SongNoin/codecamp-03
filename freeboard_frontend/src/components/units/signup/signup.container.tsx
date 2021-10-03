import { useMutation } from "@apollo/client";
import React, { Component, useState } from "react";
import SignUpUI from "./signup.presenter";
import { CREATE_USER } from "./signup.queries";

export default function SignUp() {
  const [createUser] = useMutation(CREATE_USER);
  const [myEmail, setMyEmail] = useState("");
  const [myName, setMyName] = useState("");
  const [myPassword, setMyPassword] = useState("");

  function onChangeEmail(event: any) {
    setMyEmail(event.target.value);
  }
  function onChangeName(event: any) {
    setMyName(event.target.value);
  }
  function onChangePassword(event: any) {
    setMyPassword(event.target.value);
  }

  async function onClickRegister() {
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
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <SignUpUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeName={onChangeName}
      onClickRegister={onClickRegister}
    />
  );
}

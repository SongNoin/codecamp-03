import { useMutation } from "@apollo/client";
import { useState } from "react";
import MyProfileUI from "./myprofile.presenter";
import { RESORT_USER_PASSWORD } from "./myprofile.queries";

export default function MyProfile() {
  const [resetUserPassword] = useMutation(RESORT_USER_PASSWORD);
  const [myPassword, setMyPassword] = useState("");
  const [myCheckPassword, setMyCheckPassword] = useState("");

  function onChangePassword(event) {
    setMyPassword(event.target.value);
  }

  function onChangeCheckPassword(event) {
    setMyCheckPassword(event.target.value);
  }
  async function onClickResetPassword() {
    if (myPassword !== myCheckPassword) {
      alert("확인 비밀번호가 같지 않습니다!");
      return;
    }
    try {
      await resetUserPassword({
        variables: { password: myPassword },
      });
      alert("비밀번호 수정 완료했습니다~");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <MyProfileUI
      onChangePassword={onChangePassword}
      onChangeCheckPassword={onChangeCheckPassword}
      onClickResetPassword={onClickResetPassword}
    />
  );
}

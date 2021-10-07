import Button01 from "../../commons/buttons/01/Button01";
import Input01 from "../../commons/inputs/01/Input01";

export default function MyformUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <div>리액트 훅 폼 연습!!</div>
      이메일 : <Input01 type="text" register={props.register("myEmail")} />
      <div>{props.formState.errors.myEmail?.message}</div>
      <br />
      비밀번호 :
      <Input01 type="password" register={props.register("myPassword")} />
      <div>{props.formState.errors.myPassword?.message}</div>
      <br />
      <Button01
        name="로그인하기"
        type="submit" 
        isValid={props.formState.isValid}
      />
    </form>
  );
}

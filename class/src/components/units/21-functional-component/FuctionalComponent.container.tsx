import FunctionalComponentUI from "./FuctionalComponent.presenter";

export default function FunctionalComponent() {
  //   return <FunctionalComponentUI count={123} school="다람쥐초등학교" />;
  return <>{FunctionalComponentUI({ count: 123, school: "다람쥐초등학교" })}</>;
}

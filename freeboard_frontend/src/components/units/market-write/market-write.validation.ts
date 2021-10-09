import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(1, "상품명은 최소 1자리 이상입니다.")
    .max(15, "상품명은 최대 15자리까지입니다.")
    .required("상품명은 반드시 입력해주세요!"),
  remarks: yup
    .string()
    .min(4, "한줄요약은 최소 4자리 이상입니다.")
    .max(15, "한줄요약은 최대 15자리까지입니다.")
    .required("한줄요약은 반드시 입력해주세요!"),
  contents: yup
    .string()
    .min(4, "상품설명은 최소 4자리 이상입니다.")
    .max(15, "상품설명은 최대 15자리까지입니다.")
    .required("상품설명은 반드시 입력해주세요!"),
  price: yup.number(),
});

import * as Yup from "yup";

export const ContactValidate = Yup.object().shape({
  emailOrPhone: Yup.string().required("Vui lòng nhập Email hoặc Số điện thoại"),
  fullName: Yup.string().required("Vui Lòng nhập họ và tên"),
  question: Yup.string().required("Vui Lòng nhập câu hỏi"),
});

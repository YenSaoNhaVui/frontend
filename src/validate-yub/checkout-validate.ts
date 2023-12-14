import * as Yup from "yup";

export const CheckoutValidate = Yup.object().shape({
  emailOrPhone: Yup.string().required("Vui lòng nhập Email hoặc Số điện thoại"),
  fullName: Yup.string().required("Vui Lòng nhập họ và tên"),
  address: Yup.string().required("Vui Lòng nhập địa chỉ"),
});

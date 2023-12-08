import { Button } from "@/components/ui/button";
import { useClickOutSide } from "@/hooks/use-click-outside";
import { CheckoutValidate } from "@/validate-yub";
import { Form, Formik } from "formik";
import { useState } from "react";
import FormikInput from "../contact/formik-input";
import { createOrder } from "@/service";
import { useCart } from "@/zustand";
import { App } from "antd";

type Props = {};

export default function FormCheckout({}: Props) {
  const { getTotalPrice, productCarts, setProductCarts } = useCart((state) => state);
  const [openModal, setOpenModal] = useState<boolean>(false);
  useClickOutSide(openModal, setOpenModal, ".modal");

  const { message } = App.useApp();
  return (
    <Formik
      initialValues={{
        fullName: "",
        emailOrPhone: "",
      }}
      validationSchema={CheckoutValidate}
      onSubmit={async (
        information: {
          fullName: string;
          emailOrPhone: string;
        },
        actions: any
      ) => {
        actions.setSubmitting(false);
        if (productCarts.length == 0) {
          message.info("Chưa chọn sản phẩm nào!");
          return;
        }
        try {
          await createOrder({
            name: information.fullName,
            identity: information.emailOrPhone,
            totalPrice: getTotalPrice(),
            products: productCarts.map((product) => ({
              productId: product.product.id,
              variant: product.variant,
              quantity: product.quantity,
            })),
          });
          setProductCarts([]);
          setOpenModal(true);
        } catch (error) {
          console.error(error);
        }
      }}
    >
      <Form>
        {openModal && (
          <div className="fixed top-0 left-0 w-full h-full z-[5000] bg-black/50 flex items-center justify-center">
            <img
              src="https://ucarecdn.com/27fe6ae4-b288-48a3-92cd-d24500c35985/"
              className="lg:hidden block w-[350px] h-[350px]"
            />
            <img
              src="https://ucarecdn.com/fbd94ed1-763c-4640-96ce-d18ed6969887/"
              className="lg:block hidden w-[1024px]"
            />
          </div>
        )}

        <div className="lg:py-[74px] py-[30px] lg:px-[70px] px-[15px]  rounded-2xl">
          <div className="mb-6">
            <h3 className="lg:block hidden">Nhập thông tin để mua sản phẩm</h3>
            <h5 className="lg:hidden block mb-2.5">Nhập thông tin để mua sản phẩm</h5>
          </div>
          <div className="gap-6 flex flex-col">
            <FormikInput key={"fullName"} label="Họ và tên" name="fullName" className="border-black" />
            <FormikInput
              key={"emailOrPhone"}
              label="Email hoặc số điện thoại"
              name="emailOrPhone"
              className="border-black"
            />
            <Button
              rounded="md"
              className="!bg-primary-2-1 hover:!bg-primary-2-1/70 !text-primary-1-7"
              type="submit"
            >
              Xác nhận mua
            </Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

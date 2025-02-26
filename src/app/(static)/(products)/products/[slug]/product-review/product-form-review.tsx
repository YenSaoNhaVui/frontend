import FormikInput from "@/app/(static)/contact/formik-input";
import { Button } from "@/components/ui/button";
import { createComment } from "@/service";
import { ContactValidate } from "@/validate-yub";
import { App } from "antd";
import { Form, Formik } from "formik";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ProductFormReivew({
  star,
  setComments,
  setStar,
  productId,
}: {
  star: number;
  setComments: any;
  setStar: any;
  productId: number;
}) {
  const { message } = App.useApp();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <Formik
      initialValues={{
        fullName: "",
        emailOrPhone: "",
        question: "",
      }}
      validationSchema={ContactValidate}
      onSubmit={async (
        information: {
          fullName: string;
          emailOrPhone: string;
          question: string;
        },
        actions: any
      ) => {
        if (star == 0) {
          message.error("Vui lòng đánh giá trước khi bình luận");
          return;
        }
        setIsLoading(true);
        try {
          const { data } = await createComment(productId, {
            userName: information.fullName,
            userStar: star,
            userPhone: information.emailOrPhone,
            userComment: information.question,
          });
          setComments((prev: any) => [data, ...prev]);
          setStar(0);
          actions.setSubmitting(false);
          actions.resetForm();
        } catch (error) {
          console.error(error);
        }
        setIsLoading(false);
      }}
    >
      <Form>
        <div className="gap-5 flex flex-col">
          <FormikInput
            key={"fullName"}
            label="Họ và tên"
            name="fullName"
            placeholder="Họ và tên"
            className="border-primary-1-5 placeholder:!text-primary-1-5"
          />
          <FormikInput
            key={"emailOrPhone"}
            placeholder="Số điện thoại"
            label="Số điện thoại đã đặt hàng"
            name="emailOrPhone"
            className="border-primary-1-5 placeholder:!text-primary-1-5"
          />
          <FormikInput
            key={"question"}
            label="Nhận xét của quý khách"
            className="[&_.ql-toolbar]:!border-primary-1-5 [&_.ql-container]:!border-primary-1-5 [&>.ql-toolbar.ql-snow]:!px-3 [&_.ql-snow_.ql-stroke]:!stroke-[#454545] [&_.ql-snow_.ql-stroke-miter]:!fill-[#454545] [&_.ql-snow_.ql-fill]:!fill-[#454545] [&_.ql-snow_.ql-stroke.ql-fill]:!fill-[#454545] [&_.ql-snow_.ql-picker]:!text-[#454545]"
            isEditor
            name="question"
          />
          <div className="flex justify-end">
            <Button
              aria-label="Preview/Đánh giá button"
              title="Preview/Đánh giá"
              className=" text-primary-2-5 !bg-primary-1-7 hover:!bg-primary-1-8"
              rounded="md"
            >
              {isLoading ? "Đang gửi đánh giá..." : "Gửi đánh giá"}
            </Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

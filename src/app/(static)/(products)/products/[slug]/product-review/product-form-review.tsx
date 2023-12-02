import FormikInput from "@/app/(static)/contact/formik-input";
import { Button } from "@/components/ui/button";
import { createComment } from "@/service";
import { ContactValidate } from "@/validate-yub";
import { Form, Formik } from "formik";
import { usePathname } from "next/navigation";

export default function ProductFormReivew({ star }: { star: number }) {
  const pathname = usePathname();
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
        try {
          await createComment(parseInt(pathname.match(/\d+/)[0], 10), {
            userName: information.fullName,
            userStar: star,
            userPhone: information.emailOrPhone,
            userComment: information.question,
          });
          actions.setSubmitting(false);
          location.reload();
        } catch (error) {
          console.error(error);
        }
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
            className="[&_.ql-toolbar]:!border-primary-1-5 [&_.ql-container]:!border-primary-1-5 [&>.ql-toolbar.ql-snow]:!px-3"
            isEditor
            name="question"
          />
          <div className="flex justify-end">
            <Button className=" text-primary-2-5 !bg-primary-1-7 hover:!bg-primary-1-8" rounded="md">
              Gửi đánh giá
            </Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

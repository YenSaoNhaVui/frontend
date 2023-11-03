import Editor from "@/components/editor";
import { Button } from "@/components/ui/button";
import { ContactValidate } from "@/validate-yub";
import { Form, Formik } from "formik";

export default function FromContact() {
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
        actions.setSubmitting(false);
      }}
    >
      <Form>
        <div className="py-[74px] px-[70px] bg-primary-1-8 rounded-2xl flex flex-col gap-6">
          <h3>
            Hãy đặt câu hỏi với{" "}
            <span className="text-primary-2-5">Yến Nhà Vui</span>
          </h3>
          <div className="flex flex-col">
            <label className="text-body-lg-semibold mb-1">
              Họ và tên <span className="text-warning-5 ml-1">*</span>
            </label>
            <input
              className="text-body-lg-normal px-3 py-2 bg-transparent outline-none max-w-[300px] border-[2px] border-solid border-white rounded-lg"
              name="fullName"
              placeholder="Họ và tên"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-body-lg-semibold mb-1">
              Email hoặc số điện thoại{" "}
              <span className="text-warning-5 ml-1">*</span>
            </label>
            <input
              className="text-body-lg-normal px-3 py-2 bg-transparent outline-none max-w-[300px] border-[2px] border-solid border-white rounded-lg"
              name="fullName"
              placeholder="Họ và tên"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-body-lg-semibold mb-1">
              Câu hỏi của quý khách{" "}
              <span className="text-warning-5 ml-1">*</span>
            </label>
            <Editor value={""} />
          </div>
          <Button
            rounded="md"
            className="!bg-primary-2-1 hover:!bg-primary-2-1/70 !text-primary-1-7"
          >
            Gửi câu hỏi
          </Button>
        </div>
      </Form>
    </Formik>
  );
}

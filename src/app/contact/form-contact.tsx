import { Button } from "@/components/ui/button";
import { ContactValidate } from "@/validate-yub";
import { Form, Formik } from "formik";
import FormikInput from "./formik-input";
import { useState } from "react";
import { useClickOutSide } from "@/hooks/use-click-outside";

export default function FormContact() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  useClickOutSide(openModal, setOpenModal, ".modal");
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
        setOpenModal(true);
      }}
    >
      <Form>
        {openModal && (
          <div className="fixed top-0 left-0 w-full h-full z-[5000] bg-black/50 flex items-center justify-center">
            <div className="modal p-[64px] rounded-2xl bg-primary-1-7 max-w-[724px] max-h-[208px] w-full h-full">
              <h4 className="text-primary-2-1 text-center">
                Yến Nhà Vui đã nhận được câu hỏi. Chúng tôi sẽ phản hồi lại
                trong 24 giờ.
              </h4>
            </div>
          </div>
        )}

        <div className="py-[74px] px-[70px] bg-primary-1-8 rounded-2xl flex flex-col gap-6">
          <h3>
            Hãy đặt câu hỏi với{" "}
            <span className="text-primary-2-5">Yến Nhà Vui</span>
          </h3>
          <FormikInput key={"fullName"} label="Họ và tên" name="fullName" />
          <FormikInput
            key={"emailOrPhone"}
            label="Email hoặc số điện thoại"
            name="emailOrPhone"
          />
          <FormikInput
            key={"question"}
            label="Câu hỏi của quý khách"
            isEditor
            name="question"
          />
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

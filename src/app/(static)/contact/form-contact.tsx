import { Button } from "@/components/ui/button";
import { ContactValidate } from "@/validate-yub";
import { Form, Formik } from "formik";
import FormikInput from "./formik-input";
import { useState } from "react";
import { useClickOutSide } from "@/hooks/use-click-outside";
import { postQuestion } from "@/service/questions/post-questions";

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
        const response = await postQuestion({
          name: information?.fullName,
          identity: information?.emailOrPhone,
          details: information?.question,
        });
        (response == 200 || response == 201) && setOpenModal(true);
      }}
    >
      <Form>
        {openModal && (
          <div className="fixed top-0 left-0 w-full h-full z-[5000] bg-black/50 flex items-center justify-center">
            <img
              src="https://ucarecdn.com/3fcc8fe9-8822-4722-be3e-4278b46e8be2/-/format/webp/-/progressive/yes/"
              className="lg:hidden block w-[350px]"
            />
            <img
              src="https://ucarecdn.com/4db9f173-5d92-40f5-a081-606b5b63d994/-/format/webp/-/progressive/yes/"
              className="lg:block hidden w-[741px]"
            />
          </div>
        )}

        <div className="lg:py-[74px] py-[30px] lg:px-[70px] px-[15px] bg-primary-1-8 rounded-2xl">
          <div className="mb-6">
            <h3 className="lg:block hidden">
              Hãy đặt câu hỏi với <span className="text-primary-2-5">Yến Nhà Vui</span>
            </h3>
            <h5 className="lg:hidden block mb-2.5">Hãy đặt câu hỏi với</h5>
            <h3 className="lg:hidden block text-primary-2-1 pb-3 border-b border-solid border-white">
              Yến Nhà Vui
            </h3>
          </div>
          <div className="gap-6 flex flex-col">
            <FormikInput key={"fullName"} label="Họ và tên" name="fullName" />
            <FormikInput key={"emailOrPhone"} label="Email hoặc số điện thoại" name="emailOrPhone" />
            <FormikInput key={"question"} label="Câu hỏi của quý khách" isEditor name="question" />
            <Button
              aria-label="Send/Gửi button"
              title="Send/Gửi"
              rounded="md"
              className="!bg-primary-2-1 hover:!bg-primary-2-1/70 !text-primary-1-7"
            >
              Gửi câu hỏi
            </Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

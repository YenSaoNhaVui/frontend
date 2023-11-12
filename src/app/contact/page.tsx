"use client";
import Address from "./address";
import FormContact from "./form-contact";

export default function ContactPage() {
  return (
    <section
      className="bg-cover bg-primary-1-7 bg-no-repeat pt-[130px] pb-[153px]"
      style={{
        backgroundImage: `url('https://ucarecdn.com/2116657f-8b57-40b2-a3fb-4f2b500228be/-/preview/-/quality/smart/-/format/auto/')`,
      }}
    >
      <div className="xl:max-w-[1280px] xl:mx-auto sm:mx-8 mx-4">
        <Address />
        <FormContact />
      </div>
    </section>
  );
}

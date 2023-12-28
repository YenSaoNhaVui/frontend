"use client";
import Address from "./address";
import FormContact from "./form-contact";

export default function ContactPage() {
  return (
    <section
      className="bg-cover bg-primary-1-7 bg-no-repeat pt-[108px] pb-[153px] text-white"
      style={{
        backgroundImage: `url('https://ucarecdn.com/2116657f-8b57-40b2-a3fb-4f2b500228be/-/quality/lighter/-/format/webp/-/progressive/yes/')`,
      }}
    >
      <div className="xl:max-w-[1280px] xl:mx-auto sm:mx-8 mx-6">
        <Address />
        <FormContact />
      </div>
    </section>
  );
}

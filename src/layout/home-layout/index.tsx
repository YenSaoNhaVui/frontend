import FeedBack from "./feedback";
import FirstBackground from "./first-background";
import InterView from "./interview";
import ProductProcess from "./production-process";
import ProductOutstanding from "./products-outstanding";
import Reason from "./reason";

export default function HomeClient() {
  return (
    <div>
      <section className="lg:-mt-[78px] -mt-[90px] relative">
        <FirstBackground />
      </section>
      <ProductOutstanding />
      <section
        className="lg:bg-cover bg-contain bg-primary-1-7 text-white lg:pt-[190px] pt-[50px] overflow-hidden relative [&_p]:text-justify"
        style={{
          backgroundImage: `url('https://ucarecdn.com/613cb866-ff09-476f-98a2-2cf5f125f946/-/preview/-/quality/smart/-/format/auto/')`,
        }}
      >
        <Reason />
        <InterView />
        <ProductProcess />
        <FeedBack />
      </section>
    </div>
  );
}

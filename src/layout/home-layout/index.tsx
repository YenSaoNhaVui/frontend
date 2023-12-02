import FeedBack from "./feedback";
import InterView from "./interview";
import ProductProcess from "./production-process";
import ProductOutstanding from "./products-outstanding";
import Reason from "./reason";

export default function HomeClient() {
  return (
    <div>
      <section className="lg:-mt-[78px] -mt-[90px] relative">
        <div
          className="lg:h-[1084px] lg:pt-0 pt-[100%] relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://ucarecdn.com/b3788d6b-1576-43a5-a3ac-d77a1879489e/-/preview/-/quality/smart_retina/-/format/auto/")',
          }}
        >
          <div
            className="absolute top-1 left-0 w-full lg:h-full h-[calc(100%-80px)] z-[20]"
            style={{
              background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 73.44%, #000 100%)",
            }}
          />
        </div>
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

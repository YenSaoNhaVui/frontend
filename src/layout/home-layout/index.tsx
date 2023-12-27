import { StaticData } from "@/interfaces";
import FeedBack from "./feedback";
import FirstBackground from "./first-background";
import InterView from "./interview";
import ProductProcess from "./production-process";
import ProductOutstanding from "./products-outstanding";
import Reason from "./reason";

export default function HomeClient({ data }: { data: StaticData }) {
  return (
    <div>
      <section className="lg:-mt-[78px] -mt-[90px] relative">
        <FirstBackground data={data} />
      </section>
      <ProductOutstanding />
      <section
        className="bg-contain bg-primary-1-7 text-white lg:pt-[190px] pt-[50px] overflow-hidden relative [&_p]:text-justify"
        style={{
          backgroundImage: `url('https://ucarecdn.com/4ff394c7-8391-4d09-abef-2cd5855bdb4f/-/format/webp/-/progressive/yes/')`,
        }}
      >
        <Reason />
        <InterView />
        <ProductProcess data={data} />
        <FeedBack />
      </section>
    </div>
  );
}

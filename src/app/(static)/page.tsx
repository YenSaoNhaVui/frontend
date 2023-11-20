import {
  BackgroundPattern,
  Banner,
  Blur,
  Commitment,
  CustomerFeedback,
  HighLightProducts,
  Introduction,
  ProduceProcess,
} from "@/components/home-component";

import classes from "../page.module.css";

export default function HomePage() {
  return (
    <main className="overflow-hidden -mt-[78px]">
      <Banner />
      <Blur />
      <HighLightProducts />
      <div className={`${classes.homePattern} relative`}>
        <BackgroundPattern />
        <div className={`w-full relative z-10 `}>
          <Commitment />
          <Introduction />
          <ProduceProcess />
          <CustomerFeedback />
        </div>
      </div>
    </main>
  );
}

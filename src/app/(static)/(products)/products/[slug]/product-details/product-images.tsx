import { Product } from "@/interfaces";
import { useState } from "react";

export default function ProductImages({ product }: { product: Product }) {
  const [mainImg, setMainImg] = useState<string>(product?.images[0] as string);
  return (
    <section className="max-w-[660px] flex-1 flex flex-col">
      <figure className="pt-[100%] rounded-2xl overflow-hidden relative mb-[5px]">
        <img
          src={mainImg}
          alt={mainImg}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
        />
      </figure>
      <div className="flex gap-[5px] max-w-full overflow-auto hidden-scrollbar">
        {(product?.images as string[])?.map((img: string) => (
          <figure
            key={img}
            onClick={() => setMainImg(img)}
            className="w-full lg:min-w-[160px] lg:max-w-[160px] lg:min-h-[160px] min-w-[88px] max-w-[88px] min-h-[88px] flex-1 lg:rounded-2xl rounded-lg overflow-hidden relative mb-[5px] cursor-pointer"
          >
            <img
              src={img}
              alt={img}
              className="absolute top-0 left-0 w-full h-full object-cover lg:rounded-2xl rounded-lg"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

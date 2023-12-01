import { Product } from "@/interfaces";

export default function ProductDescription({ product }: { product: Product }) {
  console.log(product);
  return (
    <section className="lg:max-w-[920px] mx-auto mt-[34px] text-primary-1-7 mb-[56px]">
      {product?.details?.map((detail) =>
        detail?.isTable ? (
          <TableDescription key={detail?.title} title={detail?.title} tables={detail?.table} />
        ) : (
          <NormalDescription key={detail?.title} detail={detail} />
        )
      )}

      <div>
        <p className="text-body-md-semibold">Giấy kiểm định chất lượng</p>
        <div className="border-t border-solid border-[#204F4F] my-2" />
        <img
          src="https://a-static.besthdwallpaper.com/spirit-blossom-akali-league-of-legends-lol-wallpaper-2048x1536-103581_26.jpg"
          alt="bill"
          className="w-full h-full rounded-xl"
        />
      </div>
    </section>
  );
}

function TableDescription({
  tables,
  title,
}: {
  tables: {
    title: string;
    content: string;
  }[];
  title: string;
}) {
  console.log(tables);
  return (
    <div className="border-t border-l border-r border-primary-1-7 mb-[56px]">
      <div className="py-[17px] border-b border-primary-1-7">
        <p className="text-body-lg-semibold text-primary-1-7 text-center">{title}</p>
      </div>
      {tables?.map((table) => (
        <div key={table?.title} className="grid grid-cols-2 border-b border-primary-1-7">
          <div className="flex flex-col justify-center p-5 border-r border-primary-1-7">
            {table?.title}
          </div>
          <div className="flex flex-col justify-center p-5">{table?.content}</div>
        </div>
      ))}
    </div>
  );
}

function NormalDescription({
  detail,
}: {
  detail: {
    isTable: boolean;
    title: string;
    table: {
      title: string;
      content: string;
    }[];
    quill: { title: string; content: string };
    details: string;
  };
}) {
  return (
    <div className="mb-[56px]">
      <p className="text-body-md-semibold">{detail?.title}</p>
      <div className="border-t border-solid border-[#204F4F] my-2" />
      <div
        dangerouslySetInnerHTML={{
          __html: detail?.quill,
        }}
        className="[&_p]:text-body-sm-normal"
      />
    </div>
  );
}

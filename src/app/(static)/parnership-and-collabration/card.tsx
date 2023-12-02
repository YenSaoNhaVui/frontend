import { ArrowRightStraightIcon } from "@/components/icons";
import Icon from "@/components/ui/icon";
import Link from "next/link";

interface Props {
  title: string;
  link: string;
  description: string;
}

export default function Card({ title, link, description }: Props) {
  return (
    <Link href={`/parnership-and-collabration${link}`}>
      <main className="p-2.5 rounded-lg bg-primary-1-7  ">
        <div className="max-w-4xl mx-auto">
          <div className="relative pt-[71%] overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/940e/4bc8/370889e9deeda2e0b0ccb300beaf3859?Expires=1702252800&Signature=A9d335rbu6y22KBKPRDHxXJ9gePQmk~KnTfsY4AuVlQzeNgyJacY8RNib5OTDa3Oivsuz953DFYfM07dcXo1ftZuXUPuFaKTu9FLvOrYJDZ8kvmkgBcIzPZHshQ5usE2DtDyYFWnzpr12Ab5gpcrIyAFz2zLix1Mz-stnapbNaHQv2lVJKWb4gWA3fIz1GXxzqui10KaAL4ytmRUpSJepXKwkcP1cMv792ub5FiyCT3I4MUV9kjrXS3e4VtCei2S~g~YjEV9nunV0pRCV-RphdwncEcVLtJobKVL3w1rK9FodQNIy22ebxp6m1oH97GR9rgenhuVDFzt3DtsbYYUoA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="w-full h-full top-0 left-0 absolute object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <h5 className="mt-2 text-primary-2-5">{title}</h5>
          <p className="mt-1 text-body-xs-normal text-white ellipsis-4">{description}</p>
          <div className="flex items-center gap-1">
            <p className="text-[14px] leading-[22px] underline text-[#EED670]">Xem Thêm</p>
            <Icon size="lg" className="ml-1">
              <ArrowRightStraightIcon />
            </Icon>
          </div>
        </div>
      </main>
    </Link>
  );
}

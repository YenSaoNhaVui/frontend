import { ArrowRightStraightIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Link from "next/link";

interface Props {
  title: string;
  link: string;
  description: string;
  img: string;
}

export default function Card({ title, link, description, img }: Props) {
  return (
    <Link href={`/parnership-and-collabration${link}`}>
      <main className="p-3 rounded-lg bg-primary-1-7  ">
        <div className="max-w-4xl mx-auto">
          <div className="relative pt-[71%] overflow-hidden">
            <img
              src={img}
              alt={title}
              className="w-full h-full top-0 left-0 absolute object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <h5 className="mt-2 text-primary-2-5">{title}</h5>
          <p className="mt-1 text-body-xs-normal text-white ellipsis-4">{description}</p>
          <Button
            aria-label="See more/xem thêm button"
            title="See more/xem thêm"
            variant="ghost"
            className="!text-[#EED670] !underline hover:bg-transparent !p-0 mt-3"
          >
            Xem thêm
            <Icon size="lg" className="ml-1">
              <ArrowRightStraightIcon />
            </Icon>
          </Button>
        </div>
      </main>
    </Link>
  );
}

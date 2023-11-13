import Link from "next/link";
import { Button } from "../ui/button";
import Icon from "../ui/icon";
import { BreadCrumbsIcon, SideBarIcon } from "../icons";

interface Props {
  linkBack: string;
  titlePrev: string;
  titleCurrent: string;
}

export default function BreadCrumbs({
  linkBack,
  titlePrev,
  titleCurrent,
}: Props) {
  return (
    <div className="flex items-center">
      <Link href={linkBack}>
        <Button variant="ghost" className="w-auto !p-1" rounded="md">
          <Icon size="lg">
            <SideBarIcon />
          </Icon>
        </Button>
      </Link>
      <Link href={linkBack}>
        <p className="ml-7 text-body-sm-medium text-neutral-5">{titlePrev}</p>
      </Link>
      <Icon size="lg" className="mx-2">
        <BreadCrumbsIcon />
      </Icon>
      <p className="text-body-sm-medium text-neutral-8">{titleCurrent}</p>
    </div>
  );
}

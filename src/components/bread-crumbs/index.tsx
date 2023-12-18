import Link from "next/link";
import { Button } from "../ui/button";
import Icon from "../ui/icon";
import { BreadCrumbsIcon, SideBarIcon } from "../icons";
import { HTMLAttributes } from "react";
import { cn } from "@/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  linkBack: string;
  titlePrev: string;
  titleCurrent: string;
  className?: string;
}

export default function BreadCrumbs({ linkBack, titlePrev, titleCurrent, className, ...props }: Props) {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <Link href={linkBack}>
        <Button
          aria-label="Bread button"
          title="Bread"
          variant="ghost"
          className="w-auto !p-1"
          rounded="md"
        >
          <Icon size="lg">
            <SideBarIcon />
          </Icon>
        </Button>
      </Link>
      <Link href={linkBack}>
        <p className="ml-7 text-body-sm-medium text-neutral-5 m-0 line-clamp-1">{titlePrev}</p>
      </Link>
      <Icon size="lg" className="mx-2">
        <BreadCrumbsIcon />
      </Icon>
      <p className="text-body-sm-medium text-neutral-8 m-0 line-clamp-1">{titleCurrent}</p>
    </div>
  );
}

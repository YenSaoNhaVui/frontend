import { BreadCrumbsIcon, SideBarIcon } from "@/components/icons";
import SearchAndFilterPanel from "@/components/search-and-filter-panel";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Link from "next/link";

export default function HeaderBlog() {
  return (
    <>
      <div className="flex items-center">
        <Link href="/">
          <Button variant="ghost" className="w-auto !p-1" rounded="md">
            <Icon size="lg">
              <SideBarIcon />
            </Icon>
          </Button>
        </Link>
        <Link href="/">
          <p className="ml-7 text-body-sm-medium text-neutral-5">Trang chủ</p>
        </Link>
        <Icon size="lg" className="mx-2">
          <BreadCrumbsIcon />
        </Icon>
        <p className="text-body-sm-medium text-neutral-8">Blogs</p>
      </div>
      <div className="mt-3 flex items-center justify-between flex-wrap gap-y-[30px]">
        <h5 className="text-primary-1-7">Blogs</h5>
        <SearchAndFilterPanel filterItems={items} />
      </div>
    </>
  );
}

const items: {
  label: string;
  key: string;
}[] = [
  {
    label: "Mới nhất",
    key: "1",
  },
  {
    label: "Cũ nhất",
    key: "2",
  },
];

import BreadCrumbs from "@/components/bread-crumbs";
import SearchAndFilterPanel from "@/components/search-and-filter-panel";

export default function HeaderBlog() {
  return (
    <>
      <BreadCrumbs linkBack="/" titleCurrent="Blogs" titlePrev="Trang chủ" />
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

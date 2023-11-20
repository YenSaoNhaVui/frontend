import { Menu, MenuProps } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
type MenuItem = Required<MenuProps>["items"][number];

export default function Categories() {
  const params = useSearchParams()?.get("category");
  const router = useRouter();
  const onClick = (e: any) => {
    router.push(`/products?category=${e?.key}`);
  };
  const items: MenuProps["items"] = [
    getItem(
      "Categories",
      "cate",
      null,
      [
        getItem("Yến tinh chế", "yen-tinh-che"),
        getItem("Yến rút lông", "yen-rut-long"),
        getItem("Tổ yến cao cấp", "to-yen-cao-cap"),
        getItem("Quà tặng cao cấp", "qua-tang-cao-cap"),
      ],
      "group"
    ),
  ];
  return (
    <div className="mt-[66px] w-[200px]">
      <Menu
        className={className}
        onClick={onClick}
        style={{ width: 200 }}
        defaultSelectedKeys={
          !params
            ? ["yen-tinh-che"]
            : arrItems.indexOf(params) != -1
            ? [arrItems[arrItems.indexOf(params)]]
            : ["yen-tinh-che"]
        }
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
}
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const arrItems = [
  "yen-tinh-che",
  "yen-rut-long",
  "to-yen-cao-cap",
  "qua-tang-cao-cap",
];
const className = `[&>li>div]:!px-0 [&>li>div]:!text-body-lg-semibold [&>li>div]:!text-primary-1-7 [&>li>div]:!py-2.5 px-5 py-1.5 [&>li>div]:border-b [&>li>div]:border-solid [&>li>div]:border-primary-1-7 [&>li>div]:mb-1.5 !border-0 !h-full [&_.ant-menu-item]:!px-[5px] [&_.ant-menu-item]:!py-1.5 [&_.ant-menu-item]:!m-0  [&_.ant-menu-item]:!mb-2.5 [&_.ant-menu-item]:!text-body-md-normal [&_.ant-menu-item]:text-primary-1-7 [&_.ant-menu-item-selected]:!text-body-md-semibold [&_.ant-menu-item-selected]:!text-primary-1-4`;

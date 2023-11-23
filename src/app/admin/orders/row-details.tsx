import { OrdersProducts } from "@/interfaces";
import { List } from "antd";

type Props = {
  ordersProducts: OrdersProducts[];
};
// TODO đợi UI
export default function RowDetails({ ordersProducts }: Props) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={ordersProducts}
      size="small"
      renderItem={({ quantity, product }, index) => (
        <List.Item key={index}>
          <List.Item.Meta
            avatar={
              <img
                className="w-20 h-20 object-contain"
                src={product.images?.[0] as string}
                alt="Ảnh minh hõa"
              />
            }
            title={product.title}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
          <p>Số lượng: {quantity}</p>
        </List.Item>
      )}
    />
  );
}

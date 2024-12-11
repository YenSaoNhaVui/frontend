import { Category } from "@/interfaces";
import { createCategory, updateCategoryOrder } from "@/service/categories";
import { PlusOutlined } from "@ant-design/icons";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Button, Input } from "antd";
import { Dispatch, SetStateAction, useState } from "react";
import ItemCategory from "./item-category";

type Props = {
  categories: Category[];
  setCategories: Dispatch<SetStateAction<Category[]>>;
  refetch: Function;
};

export default function Categories({ refetch, categories, setCategories }: Props) {
  const [categoryName, setCategoryName] = useState<string>("");

  const handleCreateCategory = async () => {
    try {
      if (categoryName == "" || !categoryName) return;
      await createCategory({ title: categoryName });
      setCategoryName("");
      refetch();
    } catch {}
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = async ({ over, active }: any) => {
    const isDown = over?.data?.current?.sortable?.index > active?.data?.current?.sortable?.index;
    const indexers: { [key: string]: number } = {
      [active.id]: over?.data?.current?.sortable?.index,
    };
    for (let i = 0; i < categories.length; i++) {
      const { id } = categories[i];
      if (active.id != categories[i].id) {
        if (isDown) {
          indexers[id] = i <= over?.data?.current?.sortable?.index ? i - 1 : i;
        } else {
          indexers[id] = i >= over?.data?.current?.sortable?.index ? i + 1 : i;
        }
      }
    }
    const sortKeys = Object.keys(indexers).sort((a, b) => indexers[a] - indexers[b]);
    const sortItems = sortArrayByOrder(categories, sortKeys);
    setCategories((_) => [...sortItems]);
    await updateCategoryOrder(sortItems);
  };

  return (
    <div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext
          items={categories.map((category) => category.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="flex flex-col gap-2">
            {categories.map((category) => (
              <ItemCategory key={category.id} category={category} refetch={refetch} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
      <div className="flex justify-between gap-4 mt-2">
        <Input value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
        <Button
          type="primary"
          shape="circle"
          onClick={() => handleCreateCategory()}
          icon={<PlusOutlined />}
        />
      </div>
    </div>
  );
}

function sortArrayByOrder(arrayToSort: any, orderArray: string[]) {
  const orderMap = orderArray.reduce((acc: { [key: string]: number }, key, index) => {
    acc[key] = index;
    return acc;
  }, {});

  return arrayToSort.sort((a: any, b: any) => {
    return orderMap[a.id] - orderMap[b.id];
  });
}

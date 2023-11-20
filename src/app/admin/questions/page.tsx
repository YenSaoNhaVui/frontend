"use client";
import useAsync from "@/hooks/use-async";
import { Question } from "@/interfaces";
import { getQuestions } from "@/service/questions";
import { formatDate } from "@/utils";
import { List } from "antd";

export default function AdminQuestionsPage() {
  const { data } = useAsync<Question[]>(() => getQuestions());
  return (
    <List
      className="overflow-auto w-full h-full ml-8"
      itemLayout="horizontal"
      dataSource={data ?? []}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={item.name + " - " + item.identity}
            description={item.details}
          />
          <div className="mr-8">{formatDate(item.createdAt as string)}</div>
        </List.Item>
      )}
    />
  );
}

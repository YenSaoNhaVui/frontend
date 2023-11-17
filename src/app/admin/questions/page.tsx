"use client";
import useAsync from "@/hooks/use-async";
import { Question } from "@/service/interfaces";
import { getQuestions } from "@/service/questions";
import { Layout, List } from "antd";

const { Content } = Layout;

export default function AdminQuestionsPage() {
  const { data } = useAsync<Question[]>(() => getQuestions());
  return (
    <Layout>
      <Content className="m-8">
        <List
          itemLayout="horizontal"
          dataSource={data ?? []}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                // avatar={
                //   <Avatar
                //     src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                //   />
                // }
                title={item.name + " - " + item.identity}
                description={item.details}
              />
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
}

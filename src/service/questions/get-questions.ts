import { QUESTION_CONTROLLER } from ".";
import { axiosInstance } from "..";
import { Query, Question } from "../interfaces";

export async function getQuestions(query?: Query): Promise<Question[]> {
  const { data } = await axiosInstance().get(QUESTION_CONTROLLER, {
    params: query,
  });
  return data?.map((item: Question) => ({ ...item, key: item.id }));
}

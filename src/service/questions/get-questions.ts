import { Query, Question } from "@/interfaces";
import { QUESTION_CONTROLLER } from ".";
import axiosInstance from "../axios-instance";

export async function getQuestions(query?: Query): Promise<Question[]> {
  const { data } = await axiosInstance.get(QUESTION_CONTROLLER, {
    params: query,
  });
  return data?.map((item: Question) => ({ ...item, key: item.id }));
}

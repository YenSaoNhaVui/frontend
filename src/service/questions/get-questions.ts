import { Query, Question } from "@/interfaces";
import axios from "axios";
import { QUESTION_CONTROLLER } from ".";

export async function getQuestions(query?: Query): Promise<Question[]> {
  const { data } = await axios.get(QUESTION_CONTROLLER, {
    params: query,
  });
  return data?.map((item: Question) => ({ ...item, key: item.id }));
}

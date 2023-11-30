import { QUESTION_CONTROLLER } from ".";
import axiosInstance from "../axios-instance";

export async function deleteQuestion(id: number) {
  const { status } = await axiosInstance.delete(QUESTION_CONTROLLER + "/" + id);
  return status;
}

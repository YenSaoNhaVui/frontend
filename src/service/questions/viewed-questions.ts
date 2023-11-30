import { QUESTION_CONTROLLER } from ".";
import axiosInstance from "../axios-instance";

export async function viewedQuestion(id: number, viewed: boolean) {
  const { status } = await axiosInstance.patch(QUESTION_CONTROLLER + "/" + id, { viewed });
  return status;
}

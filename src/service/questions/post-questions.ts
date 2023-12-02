import { QUESTION_CONTROLLER } from ".";
import axiosInstance from "../axios-instance";

export async function postQuestion(question: { name: string; identity: string; details: string }) {
  const { status } = await axiosInstance.post(QUESTION_CONTROLLER, question);
  return status;
}

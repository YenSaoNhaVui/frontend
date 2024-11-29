import { Comment } from "@/interfaces";
import { COMMENT_CONTROLLER } from ".";
import axiosInstance from "../axios-instance";

type CreateComment = Pick<Comment, "userStar" | "userComment" | "userPhone" | "userName">;

export async function createComment(productId: number, comment: CreateComment) {
  const { status, data } = await axiosInstance.post(COMMENT_CONTROLLER + "/" + productId, comment);
  return { status, data };
}

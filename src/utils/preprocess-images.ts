import { UploadFile } from "antd";

export function preprocessImages(images: string[] | undefined | UploadFile[]): UploadFile[] {
  if (!images) return [];
  if (typeof images?.[0] != "string") return images as UploadFile[];
  else
    return images.map((item: any, id: number) => ({
      uid: "-" + id,
      name: "image.png",
      status: "done",
      url: item,
    })) as UploadFile[];
}

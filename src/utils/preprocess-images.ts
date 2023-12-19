import { UploadFile } from "antd";

export function preprocessImages(
  images: string[] | undefined | UploadFile[],
  type: string = "image.png"
): UploadFile[] {
  if (!images) return [];
  if (typeof images?.[0] != "string") return images as UploadFile[];
  else
    return images.map((item: any, id: number) => ({
      uid: "-" + id,
      name: type,
      status: "done",
      url: item,
    })) as UploadFile[];
}

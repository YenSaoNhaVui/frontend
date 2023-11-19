// import { uploadDirect } from "@uploadcare/upload-client";
import { UploadFile } from "antd";

// WARN Lỗi thư viện của uploadcare
export async function uploadImages(files: UploadFile[]): Promise<string[]> {
  return [
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  ];
  // const notEditedFiles = files
  //   .filter((file) => !file.originFileObj)
  //   .map((item) => item.url!);
  //
  // const newFiles = await Promise.all(
  //   files
  //     .filter((file) => file.originFileObj)
  //     .map(async (file) => {
  //       const result = await uploadDirect(file.originFileObj as File, {
  //         publicKey: process.env.NEXT_PUBLIC_UPLOADCARE_KEY!,
  //         store: "auto",
  //       });
  //       return (
  //         result.cdnUrl ??
  //         "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
  //       );
  //     }),
  // );
  // return [...notEditedFiles, ...newFiles];
}

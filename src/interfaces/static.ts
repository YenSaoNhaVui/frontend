import { UploadFile } from "antd/es/upload/interface";

export interface StaticData {
  homeBackground: string | UploadFile[];
  homeBackgroundMobile: string | UploadFile[];
  videoIntroduce:
    | {
        type: string;
        url: string;
      }
    | UploadFile[];
}

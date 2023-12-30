import { UploadFile } from "antd/es/upload/interface";

export interface StaticData {
  homeBackground: string | UploadFile[];
  homeBackground1: string | UploadFile[];
  homeBackground2: string | UploadFile[];
  homeBackground3: string | UploadFile[];
  homeBackground4: string | UploadFile[];
  homeBackgroundMobile: string | UploadFile[];
  homeBackgroundMobile1: string | UploadFile[];
  homeBackgroundMobile2: string | UploadFile[];
  homeBackgroundMobile3: string | UploadFile[];
  homeBackgroundMobile4: string | UploadFile[];
  homeAbout: string | UploadFile[];
  videoIntroduce:
    | {
        type: string;
        url: string;
      }
    | UploadFile[];
}

import { FBIcon, InstagramIcon } from "@/components/icons";
import Icon from "@/components/ui/icon";
import Link from "antd/es/typography/Link";

export default function Footer() {
  return (
    <footer className="bg-[#FAD743] w-full py-5">
      <div className="xl:max-w-[1151px] lg:max-w-[1000px] mx-auto w-full">
        <div className="flex lg:my-12 lg:mx-0 mx-6 items-center xl:gap-[111px] lg:gap-10 lg:flex-row flex-col">
          <div className="flex items-center gap-[30px] lg:border-b-0 border-b border-black lg:pb-0 pb-[22px]">
            <Logo />
            <div>
              <LogoYenNhaVui />
              <p className="text-body-lg-normal max-w-[303px] mt-[18px]">
                Thương hiệu {"Yến Sào Nhà Vui"} đã ghi dấu ấn mạnh mẽ trong lĩnh vực Yến sào trong suốt
                10 năm qua. Chúng tôi tự hào cung cấp các sản phẩm Yến sào tự nhiên được đảm bảo giữ
                nguyên toàn bộ giá trị dinh dưỡng và hương vị đặc biệt của loại thực phẩm này.
              </p>
            </div>
          </div>
          <Desktop />
          <Mobile />
        </div>
        <div className="flex lg:flex-row flex-col items-center lg:justify-between justify-center lg:mt-[56px] mt-[14px] text-body-lg-normal flex-wrap lg:pt-0 lg:mx-0">
          <p>Copyright © 2023</p>
          <div className="flex items-center">
            <Link href="/parnership-and-collabration/terms-conditions" className="!text-black">
              <p className="lg:mr-8 !mb-0">Terms & Conditions</p>
            </Link>
            <p className="mx-1 lg:hidden block">|</p>
            <Link href="/parnership-and-collabration/privacy-policy" className="!text-black">
              <p className="!mb-0">Privacy Policy</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Desktop() {
  return (
    <div className="lg:flex hidden items-start gap-10">
      <div className="flex items-start gap-[90px] flex-wrap [&_*]:!mb-0 [&_*]:!text-black">
        <div className="flex flex-col gap-4 text-body-lg-normal">
          <p className="text-[18px] leading-[24px] font-semibold font-poppins-semibold">Sản phẩm</p>
          <Link
            href="https://www.facebook.com/YENSAONHAVUI"
            target="_blank"
            className="flex items-center gap-2 lg:justify-start justify-start !text-black"
          >
            <p className="!mb-0">Tất cả sản phẩm</p>
          </Link>
          <Link
            href="https://www.tiktok.com/@yennhavuioffical?_t=8hPpiYJYjOU&_r=1"
            target="_blank"
            className="flex items-center gap-2 lg:justify-start justify-start !text-black"
          >
            <p className="!mb-0">Tổ yến cao cấp</p>
          </Link>
          <Link
            href="https://www.tiktok.com/@yennhavuioffical?_t=8hPpiYJYjOU&_r=1"
            target="_blank"
            className="flex items-center gap-2 lg:justify-start justify-start !text-black"
          >
            <p className="!mb-0 font-semibold font-poppins-semibold">Đối tác - Liên kết</p>
          </Link>
        </div>
      </div>
      <div className="flex items-start gap-[90px] flex-wrap [&_*]:!text-black">
        <div className="flex flex-col gap-1.5 text-body-lg-normal">
          <p className="text-[18px] leading-[24px] font-semibold font-poppins-semibold !mb-2.5">
            Thông tin liên hệ
          </p>
          <p className="!mb-0 max-w-[235px]">
            <span className="font-semibold font-poppins-semibold">Địa chỉ:</span> 66/9/27 KP6A, Đường Tân
            Thới Nhất 06, Phường Tân Thới Nhất, Quận 12
          </p>
          <p className="!mb-0 max-w-[235px]">
            <span className="font-semibold font-poppins-semibold">Điện thoại:</span> 0705195195
          </p>
          <p className="!mb-0 max-w-[235px]">
            <span className="font-semibold font-poppins-semibold">Emai:</span> yensaonhavui@gmail.com
          </p>
        </div>
      </div>
      <div className="flex items-start gap-[90px] flex-wrap [&_*]:!mb-0 [&_*]:!text-black">
        <div className="flex flex-col gap-4 text-body-lg-normal">
          <p className="text-[18px] leading-[24px] font-semibold font-poppins-semibold">
            Theo dõi chúng tôi
          </p>
          <Link
            href="https://www.facebook.com/YENSAONHAVUI"
            target="_blank"
            className="flex items-center gap-2 lg:justify-start justify-start !text-black"
          >
            <Icon className="!w-6 !h-[33px]">
              <FBIcon />
            </Icon>
            <p className="!mb-0">Facebook</p>
          </Link>
          <Link
            href="https://www.tiktok.com/@yennhavuioffical?_t=8hPpiYJYjOU&_r=1"
            target="_blank"
            className="flex items-center gap-2 lg:justify-start justify-start !text-black"
          >
            <Icon className="!w-6 !h-[33px]">
              <InstagramIcon />
            </Icon>
            <p className="ml-1 !mb-0">Tiktok</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
function Mobile() {
  return (
    <div className="lg:hidden block items-start gap-10">
      <div className="flex items-start gap-[90px] flex-wrap [&_*]:!text-black border-b border-black py-[22px]">
        <div className="flex flex-col gap-1.5 text-body-lg-normal">
          <p className="text-[18px] leading-[24px] font-semibold font-poppins-semibold !mb-2.5">
            Thông tin liên hệ
          </p>
          <p className="!mb-0">
            <span className="font-semibold font-poppins-semibold">Địa chỉ:</span> 66/9/27 KP6A, Đường Tân
            Thới Nhất 06, Phường Tân Thới Nhất, Quận 12
          </p>
          <p className="!mb-0 max-w-[235px]">
            <span className="font-semibold font-poppins-semibold">Điện thoại:</span> 0705195195
          </p>
          <p className="!mb-0 max-w-[235px]">
            <span className="font-semibold font-poppins-semibold">Emai:</span> yensaonhavui@gmail.com
          </p>
        </div>
      </div>
      <div className="flex items-start justify-between py-[22px] border-b border-black">
        <div className="flex items-start gap-[90px] flex-wrap [&_*]:!mb-0 [&_*]:!text-black">
          <div className="flex flex-col gap-4 text-body-lg-normal">
            <p className="text-[18px] leading-[24px] font-semibold font-poppins-semibold">Sản phẩm</p>
            <Link
              href="https://www.facebook.com/YENSAONHAVUI"
              target="_blank"
              className="flex items-center gap-2 lg:justify-start justify-start !text-black"
            >
              <p className="!mb-0">Tất cả sản phẩm</p>
            </Link>
            <Link
              href="https://www.tiktok.com/@yennhavuioffical?_t=8hPpiYJYjOU&_r=1"
              target="_blank"
              className="flex items-center gap-2 lg:justify-start justify-start !text-black"
            >
              <p className="!mb-0">Tổ yến cao cấp</p>
            </Link>
            <Link
              href="https://www.tiktok.com/@yennhavuioffical?_t=8hPpiYJYjOU&_r=1"
              target="_blank"
              className="flex items-center gap-2 lg:justify-start justify-start !text-black"
            >
              <p className="!mb-0 font-semibold font-poppins-semibold">Đối tác - Liên kết</p>
            </Link>
          </div>
        </div>
        <div className="flex items-start gap-[90px] flex-wrap [&_*]:!mb-0 [&_*]:!text-black">
          <div className="flex flex-col gap-4 text-body-lg-normal">
            <p className="text-[18px] leading-[24px] font-semibold font-poppins-semibold">
              Theo dõi chúng tôi
            </p>
            <Link
              href="https://www.facebook.com/YENSAONHAVUI"
              target="_blank"
              className="flex items-center gap-2 lg:justify-start justify-start !text-black"
            >
              <Icon className="!w-6 !h-[33px]">
                <FBIcon />
              </Icon>
              <p className="!mb-0">Facebook</p>
            </Link>
            <Link
              href="https://www.tiktok.com/@yennhavuioffical?_t=8hPpiYJYjOU&_r=1"
              target="_blank"
              className="flex items-center gap-2 lg:justify-start justify-start !text-black"
            >
              <Icon className="!w-6 !h-[33px]">
                <InstagramIcon />
              </Icon>
              <p className="ml-1 !mb-0">Tiktok</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <svg width="69" height="165" viewBox="0 0 69 165" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="LOGO &#196;&#144;EN">
        <g id="Group">
          <path
            id="Vector"
            d="M65.273 164.31H3.72711C1.72085 164.31 0.0878906 162.585 0.0878906 160.467V20.7862C0.0878906 19.3235 0.856341 18.0093 2.09416 17.3522L32.8082 1.06193C33.8298 0.520526 35.048 0.518343 36.0719 1.05975L66.9016 17.3544C68.1416 18.0093 68.9122 19.3257 68.9122 20.7906V160.467C68.9122 162.587 67.2793 164.31 65.273 164.31ZM34.4411 1.31517C33.987 1.31517 33.5329 1.42433 33.1203 1.64482L2.40416 17.9373C1.38465 18.4787 0.751552 19.5702 0.751552 20.7862V160.467C0.751552 162.22 2.08542 163.648 3.72711 163.648H65.273C66.9147 163.648 68.2486 162.223 68.2486 160.467V20.7906C68.2486 19.5724 67.6133 18.4787 66.5916 17.9395L35.7597 1.64264C35.3471 1.42433 34.8952 1.31517 34.4411 1.31517Z"
            fill="black"
          />
          <g id="Group_2">
            <path
              id="Vector_2"
              d="M35.5983 35.8867C36.6549 35.3671 37.2443 34.496 37.7814 34.0922C39.1174 33.0901 40.2439 32.2125 40.2439 32.2125C40.2439 32.2125 39.1022 32.6491 37.4648 33.6708C36.8165 34.0747 35.9432 34.7733 35.0241 35.3562C34.4784 35.7011 33.2667 36.1334 33.2471 36.1377C30.6448 36.6944 30.7387 38.3623 30.7387 38.3623C30.7387 38.3623 31.0574 37.3974 32.2996 36.9193C33.2362 36.5591 33.8474 36.7468 35.5961 35.8867H35.5983Z"
              fill="black"
            />
            <path
              id="Vector_3"
              d="M34.5132 26.4121C34.5132 26.4121 34.5023 27.8857 34.3101 28.8877C34.0831 30.0644 34.7009 30.68 34.7009 30.68C34.7009 30.68 35.7663 28.8812 34.5153 26.4099L34.5132 26.4121Z"
              fill="black"
            />
            <path
              id="Vector_4"
              d="M65.033 19.2712L35.8144 3.35427C34.9324 2.87398 33.8976 2.87617 33.0178 3.35427L3.90843 19.2712C2.84526 19.8519 2.17505 21.0395 2.17505 22.3407V158.782C2.17505 160.677 3.57878 162.212 5.30998 162.212H63.638C65.3692 162.212 66.7729 160.677 66.7729 158.782V22.3428C66.7729 21.0417 66.1005 19.8519 65.0351 19.2712H65.033ZM30.6143 37.9454C31.0705 36.4282 31.4438 36.4806 33.2012 35.9588C32.9567 35.1554 32.3957 33.6797 31.315 32.4811C29.7454 30.739 32.2647 24.8665 33.0397 22.3559C33.8147 19.8476 34.4718 18.8193 34.4718 18.8193C34.4718 18.8193 33.6138 21.7643 34.5482 24.8512C35.4826 27.9381 37.133 29.8658 37.1308 31.0861C37.1308 33.0444 37.5652 33.2649 37.5652 33.2649C37.5652 33.2649 38.3162 32.8414 38.9275 32.5685C41.0516 31.621 42.1061 29.7676 43.1387 27.0059C44.6712 22.9083 43.4509 17.9854 43.4509 17.9854C43.4509 17.9854 45.396 22.2184 44.3743 26.4536C43.6692 29.3812 42.3702 32.1078 42.3702 32.1078C42.3702 32.1078 43.8395 30.3766 45.4026 30.0252C47.4459 29.5667 48.0506 29.8702 48.0506 29.8702C48.0506 29.8702 46.4963 29.9859 44.4922 31.9441C42.7632 33.6316 43.0885 34.6118 42.7916 36.0811C42.6671 36.6945 42.3964 37.3211 42.3964 37.3211C42.3964 37.3211 43.536 37.3036 45.2956 38.4847C46.8827 39.5478 47.0595 40.0652 47.0595 40.0652C47.0595 40.0652 48.0114 39.9735 49.1815 40.8446C50.1224 41.5454 50.3407 41.9667 50.3407 41.9667L55.6391 43.7961C55.6391 43.7961 50.9171 43.2285 46.0335 43.1368C41.1499 43.0452 40.8966 42.0235 37.8054 41.4668C34.5853 40.8861 35.1027 40.3927 33.4545 40.1853C31.5966 39.9517 29.8 40.3752 29.8 40.3752C29.8 40.3752 30.1296 39.5653 30.6164 37.952L30.6143 37.9454ZM43.4705 110.274H42.9357C41.9795 110.274 41.473 109.713 41.473 108.87V108.617C41.473 107.746 41.9795 107.185 42.9357 107.185H43.4705C44.4267 107.185 44.9332 107.746 44.9332 108.617V108.87C44.9332 109.713 44.4267 110.274 43.4705 110.274ZM44.9332 110.527V129.893H41.4708V110.527H41.7524C41.8659 111.145 44.538 111.145 44.6516 110.527H44.9332ZM43.9333 101.943V92.8503H42.4707V101.943H39.0083V83.8975C39.0083 80.9503 40.6696 79.4898 41.8507 79.4898H44.5533C45.7366 79.4898 47.3957 80.9503 47.3957 83.8975V101.943H43.9333ZM24.0628 81.9043C24.0628 80.5005 24.0912 79.4898 24.8225 79.4898H25.5538C26.7371 79.4898 28.3962 80.9503 28.3962 83.8975V101.943H24.9338V87.2092C24.9338 83.8123 25.019 83.2251 24.1741 83.2251H23.4995V101.945H20.0371V79.492H23.4995V81.9065H24.0628V81.9043ZM22.67 120.098L22.5019 107.468H25.9643L25.9926 120.098L26.331 126.188H26.8943L27.344 120.098L27.4007 107.468H30.8631L30.6383 120.098L29.5969 129.922H23.4319L22.6721 120.098H22.67ZM26.7676 146.934C26.7676 146.934 21.7487 147.936 17.3869 144C17.2624 143.889 17.1467 143.778 17.0354 143.671C14.0424 140.769 15.8085 139.566 18.4064 141.955C19.4695 142.933 20.8689 144.367 22.6394 145.454C23.8423 146.192 25.2155 146.771 26.7698 146.934H26.7676ZM29.5227 101.943V79.4898H32.9851V89.3967H34.4216V79.4898H37.884V101.943H34.4216V92.8503H32.9851V101.943H29.5227ZM34.0264 59.2306V59.2874H36.8688V62.7389H34.0264V66.2471C34.0264 69.644 33.9413 70.2334 34.7862 70.2334H36.8688V73.9665H33.4064C32.2232 73.9665 30.564 72.5061 30.564 69.5611V55.9211C30.564 52.9739 32.2254 51.5134 33.4064 51.5134H36.8688V55.2465H34.7862C33.9413 55.2465 34.0264 55.8359 34.0264 59.2306ZM31.9852 107.468H35.4476V122.202C35.4476 125.599 35.3057 126.188 36.1222 126.188C36.9387 126.188 36.8819 125.599 36.8819 122.202V107.468H40.3443V125.514C40.3443 128.461 38.683 129.919 37.5019 129.919H34.7425C33.5876 129.919 31.9831 128.459 31.9831 125.514V107.468H31.9852ZM42.0188 53.9257C42.0188 52.522 42.0471 51.5112 42.7785 51.5112H43.5098C44.693 51.5112 46.3522 52.9717 46.3522 55.9189V73.9644H42.8898V59.2306C42.8898 55.8337 42.9749 55.2465 42.1301 55.2465H41.4555V73.9665H37.9931V51.5134H41.4555V53.9279H42.0188V53.9257ZM41.7939 78.789V77.3853H50.1814V78.789H41.7939ZM38.7834 43.794V48.1449H37.3753V43.794H38.7834ZM34.4762 47.8065C36.5304 48.9002 38.5869 49.4067 40.6412 49.3783L40.5845 50.8104C38.5585 50.8388 36.5021 50.3323 34.4762 49.2386C32.4502 50.3323 30.3959 50.8388 28.3678 50.8104L28.3111 49.3783C30.3654 49.4067 32.4197 48.9002 34.4762 47.8065ZM25.2155 61.8111C26.0603 61.8111 25.9752 61.2216 25.9752 57.8247V51.509H29.4376V61.1365C29.4376 63.7758 28.1146 65.2058 26.9881 65.4874V73.9644H23.5257V65.5158C22.4276 65.2909 21.0763 63.8304 21.0763 61.1365V51.509H24.5387V57.8247C24.5387 61.2216 24.3968 61.8111 25.2133 61.8111H25.2155ZM15.5203 29.3484C15.2802 28.5974 14.813 27.1129 12.3068 26.8815C10.2001 26.6872 9.55173 25.7943 9.55173 25.7943C9.55173 25.7943 10.3769 26.1371 11.9466 26.0541C14.0926 25.9384 15.1841 26.8509 15.5291 27.2112C15.2103 26.8335 14.3502 25.7419 13.8524 24.3797C12.9552 21.9259 13.4114 17.9854 13.4114 17.9854C13.4114 17.9854 13.5948 21.594 14.7868 23.93C15.5902 25.504 16.5158 26.8968 17.8453 27.3159C18.2274 27.436 18.7033 27.6369 18.7033 27.6369C18.7033 27.6369 18.5592 26.3728 19.6857 23.6025C20.4148 21.8124 19.5591 18.8259 19.5591 18.8259C19.5591 18.8259 20.0197 19.3935 20.6528 20.8343C21.2859 22.2752 23.1874 25.6022 22.3709 26.7462C21.8098 27.5343 21.5762 28.449 21.4845 28.9445C22.5674 29.1366 22.7835 29.0799 23.1612 29.9531C23.5607 30.8809 23.8139 31.3416 23.8139 31.3416C23.8139 31.3416 22.7136 31.2106 21.6243 31.4769C20.6571 31.7127 20.9977 31.9725 19.1202 32.5357C17.3192 33.0771 17.2384 33.7037 14.3349 34.0901C11.4336 34.4765 8.65885 35.1358 8.65885 35.1358C8.65885 35.1358 10.0844 32.4659 13.3525 31.5861C14.5794 31.2564 16.1032 30.381 16.1032 30.381C16.1032 30.381 15.7168 29.975 15.516 29.3506L15.5203 29.3484ZM30.1187 154.879C22.9036 155.667 17.221 152.335 13.7149 148.906C12.4705 147.69 11.5012 146.461 10.8354 145.397C9.96216 144.007 9.60849 142.904 9.83554 142.487C9.93378 142.308 10.139 142.256 10.4577 142.363C10.8878 142.507 11.2982 142.784 11.7348 143.14C12.6888 143.922 13.7586 145.098 15.3981 146.159C17.2886 147.384 19.9345 148.456 24.0322 148.594C25.9686 148.659 27.7173 148.541 29.2564 148.327C34.0461 147.659 36.7968 146.048 36.7968 146.048C36.7968 146.048 31.8761 145.854 27.6976 142.193C25.8835 140.603 26.0669 138.353 26.5974 138.536C27.5623 138.87 30.8042 140.42 34.5329 140.641C39.3488 140.924 44.8175 141.199 50.5416 145.618C51.334 146.229 52.1309 146.921 52.9321 147.703C55.0038 149.724 57.1018 152.348 59.2063 155.769C59.2063 155.769 48.8933 152.827 30.1187 154.879ZM54.231 28.5974C45.8304 27.6456 44.0207 30.2304 44.0207 30.2304C44.0207 30.2304 46.4985 26.1414 52.4365 26.8007C57.6454 27.3771 60.3044 26.1523 60.3044 26.1523C60.3044 26.1523 57.2851 28.9445 54.231 28.5996V28.5974Z"
              fill="black"
            />
            <path
              id="Vector_5"
              d="M33.0441 27.0387C33.9435 24.6286 33.9239 20.9086 33.9239 20.9086C33.9239 20.9086 33.0419 23.1222 32.0682 27.0933C31.5618 29.1563 32.053 31.0862 32.053 31.0862C32.053 31.0862 31.9504 29.9662 33.0441 27.0387Z"
              fill="black"
            />
            <path
              id="Vector_6"
              d="M40.0366 40.2834C40.0366 40.2834 40.5911 40.7331 41.1784 40.8444C42.2066 41.0387 42.5625 40.7637 45.0184 40.9951C48.0158 41.2767 49.7274 41.9229 49.7274 41.9229C49.7274 41.9229 48.9218 40.7025 46.6143 40.4755C43.5601 40.1764 40.0366 40.2834 40.0366 40.2834Z"
              fill="black"
            />
            <path
              id="Vector_7"
              d="M43.2041 83.2206C42.3876 83.249 42.4728 84.0349 42.4728 87.4012V89.3944H43.9354V87.2047C43.9354 83.8362 44.0206 83.2468 43.2041 83.2206Z"
              fill="black"
            />
            <path
              id="Vector_8"
              d="M41.9556 41.3881C41.9556 41.3881 43.4859 42.6412 46.3218 42.7089C51.2905 42.8246 53.2182 43.235 53.2182 43.235C53.2182 43.235 50.987 42.4862 47.5727 41.7986C44.1583 41.1109 41.9556 41.3881 41.9556 41.3881Z"
              fill="black"
            />
            <path
              id="Vector_9"
              d="M36.6572 40.7594C38.0216 41.0105 39.8816 41.4667 39.8816 41.4667C39.8816 41.4667 37.3034 40.5105 35.3822 38.9518C32.8149 36.8648 29.9856 39.4081 32.5486 39.7203C35.0591 40.0281 35.6115 40.5673 36.6572 40.7594Z"
              fill="black"
            />
            <path
              id="Vector_10"
              d="M33.9697 24.1809C33.9697 24.1809 33.9631 25.5759 33.3322 27.3704C32.6489 29.3112 32.3869 30.6516 32.4721 31.3764C32.5659 32.171 32.9524 32.7561 32.9524 32.7561C32.9524 32.7561 34.7949 27.2984 33.9697 24.1809Z"
              fill="black"
            />
            <path
              id="Vector_11"
              d="M19.8822 31.6799C20.4913 31.4943 20.5197 31.2301 21.9933 30.8765C23.4974 30.5163 21.7553 29.2937 20.369 30.7106C19.3321 31.7694 19.0876 31.9222 19.8822 31.6799Z"
              fill="black"
            />
            <path
              id="Vector_12"
              d="M38.9253 39.4691C38.9253 39.4691 39.3816 39.9908 41.0625 39.9101C43.7085 39.7813 46.6185 40.183 46.6185 40.183C46.6185 40.183 45.8151 39.2486 43.7194 39.1547C40.6718 39.0194 40.1959 39.659 38.9253 39.4691Z"
              fill="black"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

function LogoYenNhaVui() {
  return (
    <svg width="99" height="37" viewBox="0 0 99 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.912109 9.84893H4.92867V17.3717C4.92867 21.4172 4.76514 22.12 5.71045 22.12C6.65575 22.12 6.59194 21.4172 6.59194 17.3717V9.84893H10.6045V21.3191C10.6045 24.4614 9.06888 26.1695 7.7646 26.5005V36.5976H3.75202V26.5332C2.47965 26.2635 0.912109 24.5268 0.912109 21.315V9.84485V9.84893Z"
        fill="black"
      />
      <path
        d="M16.4479 5.43572C18.8292 6.73923 21.2144 7.33992 23.5956 7.30723L23.5318 9.0112C21.1825 9.04389 18.7972 8.44321 16.4479 7.13969C14.0986 8.44321 11.7134 9.04389 9.36411 9.0112L9.30029 7.30723C11.6815 7.33992 14.0667 6.73923 16.4479 5.43572ZM15.9254 19.043V19.1084H19.22V23.2232H15.9254V27.4035C15.9254 31.4489 15.8257 32.1517 16.8069 32.1517H19.224V36.5976H15.2115C13.8394 36.5976 11.9129 34.8568 11.9129 31.3467V15.0956C11.9129 11.5855 13.8394 9.8448 15.2115 9.8448H19.224V14.2907H16.8069C15.8297 14.2907 15.9254 14.9935 15.9254 19.0389V19.043ZM19.8104 0.654785H21.4417V5.83617H19.8104V0.654785Z"
        fill="black"
      />
      <path
        d="M20.5283 9.84888H24.5449V12.7256H25.199C25.199 11.0543 25.2309 9.84888 26.0805 9.84888H26.9301C28.3022 9.84888 30.2247 11.5896 30.2247 15.0997V36.6017H26.2121V19.0471C26.2121 15.0017 26.3119 14.2988 25.3306 14.2988H24.5489V36.6017H20.5323V9.84888H20.5283Z"
        fill="black"
      />
      <path
        d="M35.6172 9.7345H39.6337V12.6112H40.2879C40.2879 10.9399 40.3198 9.7345 41.1694 9.7345H42.019C43.391 9.7345 45.3136 11.4752 45.3136 14.9853V36.4873H41.301V18.9327C41.301 14.8873 41.4007 14.1844 40.4195 14.1844H39.6377V36.4873H35.6212V9.7345H35.6172Z"
        fill="black"
      />
      <path
        d="M50.6306 9.73462V21.5398H52.2938V9.73462H56.3064V36.4833H52.2938V25.6506H50.6306V36.4833H46.614V9.73462H50.6306Z"
        fill="black"
      />
      <path
        d="M60.9092 9.73431H64.0443C65.4164 9.73431 67.3389 11.4751 67.3389 14.9852V36.4871H63.3263V25.6544H61.6272V36.4871H57.6106V14.9852C57.6106 11.4751 59.5371 9.73431 60.9092 9.73431ZM59.5969 7.22534H69.3252V8.89662H59.5969V7.22534ZM63.3263 21.5354V18.9284C63.3263 14.9157 63.426 14.2129 62.4767 14.1802C61.5314 14.2129 61.6272 15.1486 61.6272 19.1613V21.5354H63.3263Z"
        fill="black"
      />
      <path
        d="M76.792 9.9021L76.8239 24.9477L77.2148 32.2049H77.8689L78.3914 24.9477L78.4552 9.9021H82.4678L82.2085 24.9477L81 36.6508H73.8523L72.9708 24.9477L72.7754 9.9021H76.792Z"
        fill="black"
      />
      <path
        d="M83.7761 9.9021H87.7927V27.4567C87.7927 31.5021 87.6292 32.2049 88.5745 32.2049C89.5198 32.2049 89.456 31.5021 89.456 27.4567V9.9021H93.4685V31.404C93.4685 34.9141 91.542 36.6549 90.1739 36.6549H86.975C85.6388 36.6549 83.7761 34.9141 83.7761 31.404V9.9021Z"
        fill="black"
      />
      <path
        d="M94.7727 11.2709C94.7727 10.233 95.359 9.56689 96.4719 9.56689H97.0941C98.2029 9.56689 98.7933 10.237 98.7933 11.2709V11.5733C98.7933 12.5785 98.2069 13.2445 97.0941 13.2445H96.4719C95.363 13.2445 94.7727 12.5744 94.7727 11.5733V11.2709ZM94.7727 13.5428H95.0998C95.2314 14.2784 98.3306 14.2784 98.4622 13.5428H98.7893V36.6139H94.7727V13.5469V13.5428Z"
        fill="black"
      />
    </svg>
  );
}

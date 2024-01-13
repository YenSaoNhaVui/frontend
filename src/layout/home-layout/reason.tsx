import { ArrowRightStraightIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Link from "next/link";

export default function Reason() {
  return (
    <div className="flex lg:flex-row flex-col lg:max-w-[1280px] lg:mx-auto mx-[68px] lg:gap-[61px] gap-[30px]">
      <div className="lg:text-start text-center">
        <h5 className="mb-2 lg:text-start !text-center">LÝ DO CHỌN</h5>
        <div className="lg:block flex justify-center mb-2">
          <YenNhaVui />
        </div>
        <div className="flex items-center lg:justify-end justify-center mt-[18px]">
          <Link href="/products">
            <Button
              aria-label="See more/xem thêm button"
              title="See more/xem thêm"
              variant="ghost"
              className="!text-[#EED670] !underline hover:bg-transparent !p-0"
            >
              Xem thêm
              <Icon size="lg" className="ml-1">
                <ArrowRightStraightIcon />
              </Icon>
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <h5 className="mb-[14px] lg:text-start !text-center">CHẤT LƯỢNG</h5>
        <p className="text-body-md-normal opacity-80 lg:text-start !text-center">
          Quy trình khai thác nghiêm ngặt, chỉ những tổ yến hình thành, được nuôi dưỡng trên 6 tháng mới
          được thu hoạch về Nhà Vui.
        </p>
      </div>
      <div>
        <h5 className="mb-[14px] lg:text-start !text-center">CAO CẤP</h5>
        <p className="text-body-md-normal opacity-80 lg:text-start !text-center">
          Yến nhà vui tự tin với gu thẩm mỹ tinh tế cùng một sản phẩm được nâng niu bởi những ng thợ lành
          nghề sẽ truyền tải được thông điệp của sự trân trọng, tình thân.
        </p>
      </div>
      <div>
        <h5 className="mb-[14px] lg:text-start !text-center">UY TÍN</h5>
        <p className="text-body-md-normal opacity-80 lg:text-start !text-center">
          Hơn 10 năm hoạt động trong nghề, chữ TÂM và TÍN luôn đồng hành cùng Yến Nhà Vui để mang đến
          những sản phẩm tốt nhất, sang trọng nhất với chất lượng thượng hạng.
        </p>
      </div>
    </div>
  );
}

export function YenNhaVui() {
  return (
    <svg width="268" height="88" viewBox="0 0 268 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 22.4746H10.0586V40.8637C10.0586 50.7525 9.64904 52.4705 12.0163 52.4705C14.3837 52.4705 14.2238 50.7525 14.2238 40.8637V22.4746H24.2724V50.5127C24.2724 58.194 20.4268 62.3693 17.1605 63.1783V87.8603H7.11192V63.2582C3.92554 62.599 0 58.3538 0 50.5027V22.4646V22.4746Z"
        fill="url(#paint0_linear_693_15931)"
      />
      <path
        d="M38.9058 11.6867C44.869 14.8731 50.8422 16.3414 56.8054 16.2615L56.6456 20.4268C50.7623 20.5067 44.7891 19.0384 38.9058 15.852C33.0224 19.0384 27.0492 20.5067 21.1659 20.4268L21.0061 16.2615C26.9693 16.3414 32.9425 14.8731 38.9058 11.6867ZM37.5972 44.9489V45.1087H45.8479V55.1673H37.5972V65.3857C37.5972 75.2745 37.3475 76.9925 39.8047 76.9925H45.8579V87.8602H35.8093C32.3732 87.8602 27.5487 83.605 27.5487 75.0247V35.2999C27.5487 26.7196 32.3732 22.4645 35.8093 22.4645H45.8579V33.3321H39.8047C37.3575 33.3321 37.5972 35.0502 37.5972 44.9389V44.9489ZM47.3262 0H51.4115V12.6656H47.3262V0Z"
        fill="url(#paint1_linear_693_15931)"
      />
      <path
        d="M49.1243 22.4747H59.1828V29.5067H60.821C60.821 25.4214 60.9009 22.4747 63.0285 22.4747H65.1561C68.5921 22.4747 73.4067 26.7299 73.4067 35.3101V87.8704H63.3581V44.9592C63.3581 35.0704 63.6078 33.3524 61.1506 33.3524H59.1928V87.8704H49.1343V22.4747H49.1243Z"
        fill="url(#paint2_linear_693_15931)"
      />
      <path
        d="M86.9111 22.1952H96.9697V29.2272H98.6078C98.6078 25.1418 98.6877 22.1952 100.815 22.1952H102.943C106.379 22.1952 111.194 26.4504 111.194 35.0306V87.5909H101.145V44.6796C101.145 34.7909 101.395 33.0728 98.9375 33.0728H96.9797V87.5909H86.9211V22.1952H86.9111Z"
        fill="url(#paint3_linear_693_15931)"
      />
      <path
        d="M124.509 22.1952V51.0524H128.674V22.1952H138.722V87.5809H128.674V61.101H124.509V87.5809H114.45V22.1952H124.509Z"
        fill="url(#paint4_linear_693_15931)"
      />
      <path
        d="M150.249 22.195H158.1C161.537 22.195 166.351 26.4502 166.351 35.0305V87.5907H156.303V61.1108H152.047V87.5907H141.989V35.0305C141.989 26.4502 146.813 22.195 150.249 22.195ZM146.963 16.062H171.325V20.1474H146.963V16.062ZM156.303 51.0423V44.6695C156.303 34.8607 156.552 33.1426 154.175 33.0627C151.808 33.1426 152.047 35.43 152.047 45.2389V51.0423H156.303Z"
        fill="url(#paint5_linear_693_15931)"
      />
      <path
        d="M190.024 22.6045L190.104 59.3827L191.083 77.1225H192.721L194.03 59.3827L194.189 22.6045H204.238L203.589 59.3827L200.562 87.9902H182.663L180.455 59.3827L179.966 22.6045H190.024Z"
        fill="url(#paint6_linear_693_15931)"
      />
      <path
        d="M207.514 22.6045H217.573V65.5157C217.573 75.4045 217.163 77.1225 219.531 77.1225C221.898 77.1225 221.738 75.4045 221.738 65.5157V22.6045H231.787V75.1648C231.787 83.745 226.962 88.0002 223.536 88.0002H215.525C212.179 88.0002 207.514 83.745 207.514 75.1648V22.6045Z"
        fill="url(#paint7_linear_693_15931)"
      />
      <path
        d="M235.053 25.9504C235.053 23.4133 236.521 21.7852 239.308 21.7852H240.866C243.643 21.7852 245.122 23.4233 245.122 25.9504V26.6896C245.122 29.1468 243.653 30.7749 240.866 30.7749H239.308C236.531 30.7749 235.053 29.1368 235.053 26.6896V25.9504ZM235.053 31.5041H235.872C236.202 33.3021 243.963 33.3021 244.292 31.5041H245.112V87.9H235.053V31.5141V31.5041Z"
        fill="url(#paint8_linear_693_15931)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_693_15931"
          x1="-243.753"
          y1="7.0621"
          x2="237.18"
          y2="96.2507"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#70450D" />
          <stop offset="0.02" stopColor="#764B12" />
          <stop offset="0.1" stopColor="#895E21" />
          <stop offset="0.18" stopColor="#95692A" />
          <stop offset="0.27" stopColor="#996D2E" />
          <stop offset="0.31" stopColor="#9C712F" />
          <stop offset="0.36" stopColor="#A77D35" />
          <stop offset="0.41" stopColor="#B8923E" />
          <stop offset="0.46" stopColor="#D1AF4B" />
          <stop offset="0.51" stopColor="#F2D65C" />
          <stop offset="0.59" stopColor="#EED15D" />
          <stop offset="0.67" stopColor="#E4C562" />
          <stop offset="0.71" stopColor="#DDBC66" />
          <stop offset="0.75" stopColor="#E4C562" />
          <stop offset="0.81" stopColor="#EED15D" />
          <stop offset="0.88" stopColor="#F2D65C" />
          <stop offset="0.91" stopColor="#E4C656" />
          <stop offset="0.97" stopColor="#C19D49" />
          <stop offset="1" stopColor="#AF8843" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_693_15931"
          x1="-240.816"
          y1="-8.77004"
          x2="240.117"
          y2="80.4086"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#70450D" />
          <stop offset="0.02" stopColor="#764B12" />
          <stop offset="0.1" stopColor="#895E21" />
          <stop offset="0.18" stopColor="#95692A" />
          <stop offset="0.27" stopColor="#996D2E" />
          <stop offset="0.31" stopColor="#9C712F" />
          <stop offset="0.36" stopColor="#A77D35" />
          <stop offset="0.41" stopColor="#B8923E" />
          <stop offset="0.46" stopColor="#D1AF4B" />
          <stop offset="0.51" stopColor="#F2D65C" />
          <stop offset="0.59" stopColor="#EED15D" />
          <stop offset="0.67" stopColor="#E4C562" />
          <stop offset="0.71" stopColor="#DDBC66" />
          <stop offset="0.75" stopColor="#E4C562" />
          <stop offset="0.81" stopColor="#EED15D" />
          <stop offset="0.88" stopColor="#F2D65C" />
          <stop offset="0.91" stopColor="#E4C656" />
          <stop offset="0.97" stopColor="#C19D49" />
          <stop offset="1" stopColor="#AF8843" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_693_15931"
          x1="-242.364"
          y1="-0.409268"
          x2="238.569"
          y2="88.7794"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#70450D" />
          <stop offset="0.02" stopColor="#764B12" />
          <stop offset="0.1" stopColor="#895E21" />
          <stop offset="0.18" stopColor="#95692A" />
          <stop offset="0.27" stopColor="#996D2E" />
          <stop offset="0.31" stopColor="#9C712F" />
          <stop offset="0.36" stopColor="#A77D35" />
          <stop offset="0.41" stopColor="#B8923E" />
          <stop offset="0.46" stopColor="#D1AF4B" />
          <stop offset="0.51" stopColor="#F2D65C" />
          <stop offset="0.59" stopColor="#EED15D" />
          <stop offset="0.67" stopColor="#E4C562" />
          <stop offset="0.71" stopColor="#DDBC66" />
          <stop offset="0.75" stopColor="#E4C562" />
          <stop offset="0.81" stopColor="#EED15D" />
          <stop offset="0.88" stopColor="#F2D65C" />
          <stop offset="0.91" stopColor="#E4C656" />
          <stop offset="0.97" stopColor="#C19D49" />
          <stop offset="1" stopColor="#AF8843" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_693_15931"
          x1="-241.056"
          y1="-7.46112"
          x2="239.877"
          y2="81.7275"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#70450D" />
          <stop offset="0.02" stopColor="#764B12" />
          <stop offset="0.1" stopColor="#895E21" />
          <stop offset="0.18" stopColor="#95692A" />
          <stop offset="0.27" stopColor="#996D2E" />
          <stop offset="0.31" stopColor="#9C712F" />
          <stop offset="0.36" stopColor="#A77D35" />
          <stop offset="0.41" stopColor="#B8923E" />
          <stop offset="0.46" stopColor="#D1AF4B" />
          <stop offset="0.51" stopColor="#F2D65C" />
          <stop offset="0.59" stopColor="#EED15D" />
          <stop offset="0.67" stopColor="#E4C562" />
          <stop offset="0.71" stopColor="#DDBC66" />
          <stop offset="0.75" stopColor="#E4C562" />
          <stop offset="0.81" stopColor="#EED15D" />
          <stop offset="0.88" stopColor="#F2D65C" />
          <stop offset="0.91" stopColor="#E4C656" />
          <stop offset="0.97" stopColor="#C19D49" />
          <stop offset="1" stopColor="#AF8843" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_693_15931"
          x1="-240.017"
          y1="-13.0947"
          x2="240.916"
          y2="76.084"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#70450D" />
          <stop offset="0.02" stopColor="#764B12" />
          <stop offset="0.1" stopColor="#895E21" />
          <stop offset="0.18" stopColor="#95692A" />
          <stop offset="0.27" stopColor="#996D2E" />
          <stop offset="0.31" stopColor="#9C712F" />
          <stop offset="0.36" stopColor="#A77D35" />
          <stop offset="0.41" stopColor="#B8923E" />
          <stop offset="0.46" stopColor="#D1AF4B" />
          <stop offset="0.51" stopColor="#F2D65C" />
          <stop offset="0.59" stopColor="#EED15D" />
          <stop offset="0.67" stopColor="#E4C562" />
          <stop offset="0.71" stopColor="#DDBC66" />
          <stop offset="0.75" stopColor="#E4C562" />
          <stop offset="0.81" stopColor="#EED15D" />
          <stop offset="0.88" stopColor="#F2D65C" />
          <stop offset="0.91" stopColor="#E4C656" />
          <stop offset="0.97" stopColor="#C19D49" />
          <stop offset="1" stopColor="#AF8843" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_693_15931"
          x1="-238.469"
          y1="-21.4554"
          x2="242.465"
          y2="67.7334"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#70450D" />
          <stop offset="0.02" stopColor="#764B12" />
          <stop offset="0.1" stopColor="#895E21" />
          <stop offset="0.18" stopColor="#95692A" />
          <stop offset="0.27" stopColor="#996D2E" />
          <stop offset="0.31" stopColor="#9C712F" />
          <stop offset="0.36" stopColor="#A77D35" />
          <stop offset="0.41" stopColor="#B8923E" />
          <stop offset="0.46" stopColor="#D1AF4B" />
          <stop offset="0.51" stopColor="#F2D65C" />
          <stop offset="0.59" stopColor="#EED15D" />
          <stop offset="0.67" stopColor="#E4C562" />
          <stop offset="0.71" stopColor="#DDBC66" />
          <stop offset="0.75" stopColor="#E4C562" />
          <stop offset="0.81" stopColor="#EED15D" />
          <stop offset="0.88" stopColor="#F2D65C" />
          <stop offset="0.91" stopColor="#E4C656" />
          <stop offset="0.97" stopColor="#C19D49" />
          <stop offset="1" stopColor="#AF8843" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_693_15931"
          x1="-237.86"
          y1="-24.6918"
          x2="243.064"
          y2="64.4969"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#70450D" />
          <stop offset="0.02" stopColor="#764B12" />
          <stop offset="0.1" stopColor="#895E21" />
          <stop offset="0.18" stopColor="#95692A" />
          <stop offset="0.27" stopColor="#996D2E" />
          <stop offset="0.31" stopColor="#9C712F" />
          <stop offset="0.36" stopColor="#A77D35" />
          <stop offset="0.41" stopColor="#B8923E" />
          <stop offset="0.46" stopColor="#D1AF4B" />
          <stop offset="0.51" stopColor="#F2D65C" />
          <stop offset="0.59" stopColor="#EED15D" />
          <stop offset="0.67" stopColor="#E4C562" />
          <stop offset="0.71" stopColor="#DDBC66" />
          <stop offset="0.75" stopColor="#E4C562" />
          <stop offset="0.81" stopColor="#EED15D" />
          <stop offset="0.88" stopColor="#F2D65C" />
          <stop offset="0.91" stopColor="#E4C656" />
          <stop offset="0.97" stopColor="#C19D49" />
          <stop offset="1" stopColor="#AF8843" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_693_15931"
          x1="-236.871"
          y1="-30.0657"
          x2="244.063"
          y2="59.113"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#70450D" />
          <stop offset="0.02" stopColor="#764B12" />
          <stop offset="0.1" stopColor="#895E21" />
          <stop offset="0.18" stopColor="#95692A" />
          <stop offset="0.27" stopColor="#996D2E" />
          <stop offset="0.31" stopColor="#9C712F" />
          <stop offset="0.36" stopColor="#A77D35" />
          <stop offset="0.41" stopColor="#B8923E" />
          <stop offset="0.46" stopColor="#D1AF4B" />
          <stop offset="0.51" stopColor="#F2D65C" />
          <stop offset="0.59" stopColor="#EED15D" />
          <stop offset="0.67" stopColor="#E4C562" />
          <stop offset="0.71" stopColor="#DDBC66" />
          <stop offset="0.75" stopColor="#E4C562" />
          <stop offset="0.81" stopColor="#EED15D" />
          <stop offset="0.88" stopColor="#F2D65C" />
          <stop offset="0.91" stopColor="#E4C656" />
          <stop offset="0.97" stopColor="#C19D49" />
          <stop offset="1" stopColor="#AF8843" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_693_15931"
          x1="-236.291"
          y1="-33.1524"
          x2="244.642"
          y2="56.036"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#70450D" />
          <stop offset="0.02" stopColor="#764B12" />
          <stop offset="0.1" stopColor="#895E21" />
          <stop offset="0.18" stopColor="#95692A" />
          <stop offset="0.27" stopColor="#996D2E" />
          <stop offset="0.31" stopColor="#9C712F" />
          <stop offset="0.36" stopColor="#A77D35" />
          <stop offset="0.41" stopColor="#B8923E" />
          <stop offset="0.46" stopColor="#D1AF4B" />
          <stop offset="0.51" stopColor="#F2D65C" />
          <stop offset="0.59" stopColor="#EED15D" />
          <stop offset="0.67" stopColor="#E4C562" />
          <stop offset="0.71" stopColor="#DDBC66" />
          <stop offset="0.75" stopColor="#E4C562" />
          <stop offset="0.81" stopColor="#EED15D" />
          <stop offset="0.88" stopColor="#F2D65C" />
          <stop offset="0.91" stopColor="#E4C656" />
          <stop offset="0.97" stopColor="#C19D49" />
          <stop offset="1" stopColor="#AF8843" />
        </linearGradient>
      </defs>
    </svg>
  );
}

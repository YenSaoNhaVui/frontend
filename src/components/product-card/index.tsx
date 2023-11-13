import { PlusIcon } from "../icons";
import { Button } from "../ui/button";
import Icon from "../ui/icon";

export default function ProductCard() {
  return (
    <div className="w-full">
      <figure className="pt-[100%] relative bg-[#F2D65C] rounded-t-xl">
        <img
          className="w-[calc(100%-24px)] h-[calc(100%-32px)] absolute top-0 left-0 right-0 mx-auto bottom-0 my-auto object-cover rounded-lg"
          src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/400617142_1787861898345629_9189397841609497536_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rXL3XiF-2rAAX8AkaEf&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCFv97fEXaROOOWt8u0Z18GY176q7pQFy_Wod5KCAA1Gw&oe=65528BCD"
          alt="product"
        />
      </figure>
      <div className="p-2.5 bg-primary-1-8 rounded-b-lg">
        <div className="flex items-start justify-between">
          <p className="text-body-sm-medium text-secondary-5">Hộp quà</p>
          <div className="py-[1px] px-[5px] rounded-[3px] bg-success-2">
            <p className="text-body-xs-medium text-success-9">SALE</p>
          </div>
        </div>
        <h6 className="text-primary-2-5 mb-[30px]">Yến Nhà Vui - 01</h6>
        <div className="flex items-center justify-between">
          <p className="text-body-lg-semibold text-primary-2-5 flex-1">
            6.050.000
          </p>
          <Button className="!p-0 !w-8 !h-8 !bg-white hover:!bg-white/90">
            <Icon size="sm" className="[&_path]:!fill-[#3ABF9C]">
              <PlusIcon />
            </Icon>
          </Button>
        </div>
      </div>
    </div>
  );
}

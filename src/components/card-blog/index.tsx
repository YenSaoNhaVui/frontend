import { CalendarIcon } from "../icons";
import Icon from "../ui/icon";

export default function CardBlog() {
  return (
    <main className="p-2.5 rounded-lg bg-primary-1-7">
      <div className="max-w-4xl mx-auto">
        <div className="relative pt-[71%] overflow-hidden">
          <img
            src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/400617142_1787861898345629_9189397841609497536_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rXL3XiF-2rAAX8AkaEf&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCFv97fEXaROOOWt8u0Z18GY176q7pQFy_Wod5KCAA1Gw&oe=65528BCD"
            alt=""
            className="w-full h-full top-0 left-0 absolute object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        <h5 className="mt-2 text-primary-2-5">Cách chưng hấp tổ yến</h5>
        <div className="flex items-center mt-1 gap-1">
          <Icon size="md" className="[&_path]:!fill-secondary-5">
            <CalendarIcon />
          </Icon>
          <p className="text-body-sm-medium text-secondary-5">31/10/2003</p>
        </div>
        <p className="mt-1 text-body-xs-normal">
          This sunny and spacious room is for those traveling light and looking
          for a comfy and cosy place to lay their head for a night or two. This
          beach house sits in a vibrant neighborhood littered with cafes, pubs,
          restaurants and supermarkets and is close to all the major attractions
          such as Edinburgh Castle and Arthur's Seat.
        </p>
      </div>
    </main>
  );
}

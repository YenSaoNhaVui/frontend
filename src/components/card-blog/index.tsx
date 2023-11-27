import Link from "next/link";
import { CalendarIcon } from "../icons";
import Icon from "../ui/icon";

export default function CardBlog() {
  return (
    <Link href={`/blogs/123`}>
      <main className="p-2.5 rounded-lg bg-primary-1-7">
        <div className="max-w-4xl mx-auto">
          <div className="relative pt-[71%] overflow-hidden">
            <img
              src="https://a-static.besthdwallpaper.com/spirit-blossom-akali-league-of-legends-lol-wallpaper-2048x1536-103581_26.jpg"
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
          <p className="mt-1 text-body-xs-normal text-white">
            This sunny and spacious room is for those traveling light and looking for a comfy and cosy
            place to lay their head for a night or two. This beach house sits in a vibrant neighborhood
            littered with cafes, pubs, restaurants and supermarkets and is close to all the major
            attractions such as Edinburgh Castle and {`Arthur's`} Seat.
          </p>
        </div>
      </main>
    </Link>
  );
}

import { useState } from "react";

export default function ProductImages() {
  const [mainImg, setMainImg] = useState<string>(
    "https://a-static.besthdwallpaper.com/spirit-blossom-akali-league-of-legends-lol-wallpaper-2048x1536-103581_26.jpg"
  );
  return (
    <section className="max-w-[660px] flex-1 flex flex-col">
      <figure className="pt-[100%] rounded-2xl overflow-hidden relative mb-[5px]">
        <img
          src={mainImg}
          alt={mainImg}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
        />
      </figure>
      <div className="flex gap-[5px] max-w-full overflow-auto hidden-scrollbar">
        {[
          "https://images6.alphacoders.com/131/1313222.jpg",
          "https://a-static.besthdwallpaper.com/spirit-blossom-akali-league-of-legends-lol-wallpaper-2048x1536-103581_26.jpg",
          "https://64.media.tumblr.com/71a721e3c20eed94916e91918ff6863c/3e66732a340b30b7-06/s1280x1920/18a5e428527426eeb84c8fdcdb3b3f113ba21324.jpg",
          "https://wallpapers.com/images/hd/4k-lol-spirit-blossom-riven-purple-429bnn5trr2xvzqg.jpg",
          "https://img.wallscloud.net/uploads/thumb/1977700299/1049306-1024x576-MM-80.webp",
        ]?.map((img) => (
          <figure
            onClick={() => setMainImg(img)}
            className="w-full lg:min-w-[160px] lg:max-w-[160px] lg:min-h-[160px] flex-1 rounded-2xl overflow-hidden relative mb-[5px] cursor-pointer"
          >
            <img
              src={img}
              alt={img}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

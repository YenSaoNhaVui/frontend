export default function CardFeedBack() {
  return (
    <div className="xl:w-[370px] lg:w-[330px] sm:w-full w-full h-[476px] relative">
      <img
        src="https://ucarecdn.com/48c3ed75-89ea-4578-9e26-6e3798aa90e2/-/preview/500x500/-/quality/smart/-/format/auto/"
        className="w-full h-full rounded-[18px] absolute top-0 left-0"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-end p-4">
        <div className="bg-white w-full rounded-[18px]">
          <div className="flex w-full justify-center -mt-[25px] mb-[13px]">
            <div className="bg-white rounded-full flex items-center justify-center p-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9s5_XJL7tcJ-0WT-gI4fYIOV66rAZSKZr0A&usqp=CAU"
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
            </div>
          </div>
          <p className="text-body-lg-semibold text-[#004C4D] !text-center">Nguyễn Thế Anh</p>
          <p className="text-body-xs-normal text-[#004C4D]/60 !text-center mb-[18px]">
            Quản lí nhà hàng
          </p>
          <p className="text-body-sm-normal text-[#1E1E1E]/80 max-w-[256px] !text-center mx-auto mb-4">
            Sản phẩm rất tốt, dùng một thời gian cảm thấy cải thiện sức khoẻ, da dẻ hồng hào. Hương vị
            thơm ngon, ăn mỗi ngày không lo ngấy!
          </p>
        </div>
      </div>
    </div>
  );
}

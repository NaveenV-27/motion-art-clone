import img5 from "./assets/motionarteffect-img5.png";

export default function body3({
  onclick
} : any) {
  return (
    <div className="md:flex max-md:flex-col flex justify-between gap-5">
      <div className="flex flex-col gap-6">
        <h1 className="text-white font-sora font-medium text-[25px] md:text-[30px] lg:text-[35px] leading-relaxed">
          Turn Your Cursor Into A Colourful Magic Wand & Charm Your Visitors
        </h1>
        <p className="text-slate-300 font-outfit font-light text-[16px] md:text-[18px] leading-relaxed">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.
        </p>
        <div className="flex justify-start cursor-pointer max-md:justify-center">
          <div
            className="bg-gradient-to-r from-[#5E11FF] to-[#F87516] rounded-2xl font-sora text-[20px] text-white p-4 md:px-10 flex gap-3"
            onClick={onclick}
          >
            <a>Purchase</a>
            <i className="ri-arrow-right-line text-2xl font-extralight"></i>
          </div>
        </div>
      </div>

      <div className="w-[75%] justify-end flex">
        <img src={img5} alt="img5" className="size-64" />
      </div>
    </div>
  );
}

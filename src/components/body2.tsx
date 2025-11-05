import img1 from "./assets/motionarteffect-img1.png";
import img2 from "./assets/motionarteffect-img2.png";
import img3 from "./assets/motionarteffect-img3.png";
import img4 from "./assets/motionarteffect-img4.png";

export default function body2() {
  return (
    <div className="flex-col py-20">
      <div className="flex justify-center text-[22px] text-slate-300 font-outfit max-sm:text-center">
        <h1>Trusted by thousands of users around the world</h1>
      </div>

      <div className="max-lg:flex-col flex py-20 max-lg:gap-10">
        <div className="flex justify-evenly w-full lg:justify-between max-md:flex-col max-md:gap-10">
          <div className="flex items-center gap-2 max-md:justify-center">
            <img src={img2} alt="img2" />
            <div className="text-slate-300 font-sora flex flex-col gap-4">
              <img src={img4} alt="img4" />
              <p className="text-[14px]">4.5 Score, 9 Reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-2 max-md:justify-center">
            <img src={img1} alt="img1" />
            <div className="text-slate-300 font-sora flex flex-col gap-4">
              <img src={img4} alt="img4" />
              <p className="text-[14px]">4.5 Score, 9 Reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-x-2 md:hidden lg:flex max-md:justify-center">
            <img src={img3} alt="img3" />
            <div className="text-slate-300 font-sora flex flex-col gap-4">
              <img src={img4} alt="img4" />
              <p className="text-[14px]">4.5 Score, 9 Reviews</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-x-2 lg:hidden max-md:hidden">
          <img src={img3} alt="img3" />
          <div className="text-slate-300 font-sora flex flex-col gap-4">
            <img src={img4} alt="img4" />
            <p>4.5 Score, 9 Reviews</p>
          </div>
        </div>

      </div>
    </div>
  );
}

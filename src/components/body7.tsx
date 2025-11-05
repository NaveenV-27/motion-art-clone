import img6 from "./assets/motionarteffect-img6.png";
import img7 from "./assets/motionarteffect-img7.png";
import img9 from "./assets/motionarteffect-img9.png";

export default function page7() {
  return (
    <div className="">
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-7">
        <div className="bg-gradient-to-b from-[#0D061F] to-[#251E35] rounded-xl border-t justify-start">
          <img src={img9} alt="img9" className="" />
          <div className="p-10 flex-col flex gap-4">
            <h1 className="text-[20px] md:text-[23px] font-sora text-slate-200">
              Light Weight
            </h1>
            <p className="text-[16px] md:text-[18px] font-outfit text-slate-400 leading-7">
              Motion Art for Elementor is designed to be lightweight.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#0D061F] to-[#251E35] rounded-xl border-t justify-start">
          <img src={img6} alt="img9" className="" />
          <div className="p-10 flex-col flex gap-4">
            <h1 className="text-[20px] md:text-[23px] font-sora text-slate-200">
              100% Responsive
            </h1>
            <p className="text-[16px] md:text-[18px] font-outfit text-slate-400 leading-7">
              Create a consistent visual experience across all devices.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#0D061F] to-[#251E35] rounded-xl border-t justify-start max-md:col-start-1 max-lg:col-span-full">
          <img src={img7} alt="img9" className="" />
          <div className="p-10 flex-col flex gap-4">
            <h1 className="text-[20px] md:text-[23px] font-sora text-slate-200">
              User Friendly Interface
            </h1>
            <p className="text-[16px] md:text-[18px] font-outfit text-slate-400 leading-7">
              Ensure a smooth experience for both applicants and administrators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

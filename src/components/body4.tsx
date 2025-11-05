import img10 from "./assets/motionarteffect-img10.png";
import img11 from "./assets/motionarteffect-img11.png";

export default function body4() {
  return (
    <div className="">
      <div className="text-white text-[25px] md:text-[30px] lg:text-[35px] font-sora font-semibold md:mx-10 flex justify-center my-24 ">
        <h1 className="w-full sm:w-[90vh] text-center leading-loose">
          Apply On Any Section Or Enable For Whole Page
        </h1>
      </div>

      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-8  md:grid-rows-5 md:max-h-[900px] gap-10">
        <div className="flex flex-col gap-5 border-t p-7 rounded-3xl bg-gradient-to-b from-[#0D061F] to-[#251E35] md:col-start-1 md:col-end-5 row-start-1 md:row-end-5">
          <h1 className="text-white font-sora text-[20px] lg:text-[25px] max-sm:text-center">
            Apply On Section
          </h1>
          <p className="text-slate-400 text-[18px] font-outfit max-sm:text-center">
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.{" "}
          </p>
          <img src={img11} alt="img11" className="h-full w-full" />
        </div>

        <div className="flex flex-col gap-5 border-t p-7 rounded-3xl bg-gradient-to-b from-[#0D061F] to-[#251E35] md:col-start-5 md:col-end-9 row-start-2 md:row-end-6">
          <h1 className="text-white font-sora text-[20px] lg:text-[25px] max-sm:text-center">
            Apply On Page
          </h1>
          <p className="text-slate-400 text-[18px] font-outfit max-sm:text-center">
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.
          </p>
          <img src={img10} alt="img10" />
        </div>
      </div>
    </div>
  );
}

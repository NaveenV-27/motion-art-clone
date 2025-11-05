import img8 from './assets/motionarteffect-img8.png'

export default function body5() {
  return (
    <div className='my-20'>
      <div className='flex flex-col items-center bg-gradient-to-b from-[#0D061F] to-[#251E35] p-10 gap-5 rounded-2xl border-t'>
        <h1 className='font-sora text-[20px] md:text-[25px] text-white text-center'>Supported by All Popular Browsers</h1>
        <p className='font-outfit text-[18px] text-slate-400 text-center md:w-[70vh] lg:w-[60vh]'>Rest assured, Motion Art is designed to be compatible ith all major web browsers.</p>
        <img src={img8} alt="img8" />
      </div>
    </div>
  )
}

import { useEffect } from "react";

const popup = ({
  onClose,
}: {
  onClose: () => void;
}) => {
  const 	purchaseLink =
    "https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="w-11/12 max-w-lg p-4">
        <div className="flex flex-col gap-6 border-t p-7 rounded-3xl bg-gradient-to-b from-[#0D061F] to-[#251E35] shadow-2xl">
          <div className="text-center">
						<div className="text-white flex justify-end items-start">
							<i className="ri-close-line text-2xl font-extralight cursor-pointer hover:scale-110 transition-transform" onClick={onClose}></i>
						</div>
            <h1 className="text-white font-sora text-3xl mb-2">
              🎉 Unlock Full Power!
            </h1>
            <p className="text-slate-400 text-lg font-outfit">
              This amazing <b>Motion Art</b> functionality requires the premium plugin.
            </p>
          </div>

          <div className="border border-slate-700/50 p-4 rounded-xl">
            <h3 className="text-lg font-bold text-slate-200">Plugin Details</h3>
            <ul className="list-disc list-inside text-sm text-slate-400 pl-2 mt-1 space-y-1">
              <li>Name: Motion Art for Elementor</li>
              <li>Platform: WordPress Plugin (Envato)</li>
              <li>Current Price: $19 (or relevant price)</li>
            </ul>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            {/* Option 1: Purchase Button (takes to link) */}
            <button
              className="bg-gradient-to-r from-[#5E11FF] to-[#F87516] rounded-xl font-sora text-xl text-white p-3 flex items-center justify-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
              onClick={() => window.open(purchaseLink, "_blank")}
            >
              Purchase Now on Envato
              <i className="ri-shopping-cart-line text-2xl font-extralight"></i>
            </button>

            {/* Option 2: Close Button (closes popup) */}
            <button
              onClick={onClose}
              className="bg-transparent border border-slate-700 text-slate-400 rounded-xl font-sora text-xl p-3 transition-colors duration-200 hover:bg-slate-700/30"
            >
              Close / View Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default popup;
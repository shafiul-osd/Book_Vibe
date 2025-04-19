import { FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";

const Fdocument = () => {
    return (
        <div>
            <div className="grid grid-cols-3 bg-black text-white md:overflow-hidden px-10 py-2 rounded-sm">
          <div>
            {/* service er kaj kora hoice ay part a */}
            <h2 className="text-gray-300 font-bold text-2xl">Service</h2>
            <div className="text-sm">
            <p>Branding</p>
            <p>Design</p>
            <p>Marketing</p>
            <p>Adverticement</p>
            </div>

          </div>
          <div>
            {/* company kaj korci ay part a */}
            <h2 className="text-gray-300 font-bold text-2xl">Company</h2>
           <div className="text-sm">
           <p>About us</p>
            <p>Contact</p>
            <p>Jobs</p>
            <p>Press kit</p>
           </div>
          </div>
          <div>
            {/* social er kaj korci ay part a */}
            <div className="flex gap-2 text-2xl font-bold">
                <span><FaTwitter></FaTwitter></span>
                <span><IoLogoYoutube></IoLogoYoutube></span>
                <span><FaFacebookF></FaFacebookF></span>
            </div>
          </div>
        </div>
        <div className="text-center bg-black text-white  p-2">
            <h2>All Right Reserved by @ Book Vibe 2025</h2>
        </div>
        </div>
        
    );
};

export default Fdocument;
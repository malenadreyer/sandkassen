import { FaCookieBite } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const ComponentPopup = () => {
    return ( 
        <div className="popup">
            <div className="grid">
            <FaCookieBite size={40}/>
            <IoMdClose/>
            </div>
        <div>
           <p>We use cookies to improve your user experience.</p>
        </div>
        <div>
        <button className="button" class="rounded bg-zinc-50 text-black px-10 py-1">
            I like Cookies
        </button>
        </div>
        </div>
     );
}
 
export default ComponentPopup;
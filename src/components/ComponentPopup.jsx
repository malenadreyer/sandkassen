import { FaCookieBite } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";


const ComponentPopup = () => {
    return ( 
        <div class="grid grid-rows-3, grid-cols-1 bg-black text-white rounded-xl fixed bottom-5 right-5 h-64 w-56">
            <div class="flex flex-col space-y-2">
            <div class="flex justify-end px-2 py-2"><IoMdClose/></div>
            <div class="pl-4"><FaCookieBite size={50}/></div>
            </div>
        <div class="pl-4">
           <p>We use cookies to improve your user experience.</p>
        </div>
        <div class="grid m-auto	">
        <Button text="I like Cookies"/>
        </div>
        </div>
     );
}
 
export default ComponentPopup;
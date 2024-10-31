const RundKnap = ({bgColor}) => {
    return (  
        <div>
        <div className={`w-5 h-5 ${bgColor} rounded-full border-2 border-white transform transition-transform duration-300 hover:scale-150 cursor-pointer`} >

        </div>
        <div className="w-0.5 h-6 bg-gray-300 my-1"></div>  
        </div>  
);
}
 
export default RundKnap;
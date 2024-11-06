"use client";

import { useState } from "react";
import Image from "next/image";
import SortImg from "../../public/navy.png"
import TealImg from "../../public/mint.png"
import PinkImg from "../../public/ocean.png"
import { Poppins, Roboto_Flex } from '@next/font/google';
import PictureWBagground from "./PictureWBagground";
import RundKnap from "./RundCirkel";
import Navbar from "./NavBar";

import { HiArrowLongLeft, HiArrowLongRight} from "react-icons/hi2";


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  });
  
  const robotoFlex = Roboto_Flex({
    subsets: ['latin'],
    weight: ['100', '400', '700', '900'], // Tilpas vægte efter behov
  });

const LandingPage = () => {
    const [imgSrc, setImgSrc] = useState(SortImg);

    const handleImageChange = (newImage) => {setImgSrc(newImage)};

    return ( 
    

        <section class="bg-gradient-custom">
            <Navbar/>
        <section class="grid grid-cols-[4fr_2fr_1fr] max-w-[1100px] w-full mx-auto text-white">
            <div class="grid grid-rows-[300px_50px_200px]  m-8">
                <div  class="text-5xl my-12 leading-custom">
                <h1 className={poppins.className} style={{ fontWeight: 700 }}>The Perfect Moment</h1>
                <h1 className={poppins.className} style={{ fontWeight: 400 }}>Between Past And 
                Future.</h1>
                </div>
                <div class="">
                    <button class="border border-white rounded-3xl px-12 py-2 text-white" style={{ fontWeight: 500 }}>Buy Now</button>
                    </div>
                <div class="flex items-center justify- ">
                    <HiArrowLongLeft class="mr-2"/>
                    <p className={poppins.className} class="m-0"  >1</p>
                    <HiArrowLongRight class="ml-2" />
                </div>
            </div>
            <div class="grid grid-rows-[400px_200px] overflow-hidden">
                <div class="grid items-center justify-center"> 
                    <Image src={imgSrc} alt="Apple watch"  width={1000} height={1000}/> 
                </div>
                <div class="grid justify-center">
                <div className="flex space-x-4 items-end justify-center pb-12">
                    <PictureWBagground bgColor="bg-darkGray60" imageSkift={SortImg} onClick={() =>handleImageChange(SortImg)}/>
                    <PictureWBagground bgColor="bg-lightTeal" imageSkift={TealImg} onClick={() => handleImageChange(TealImg)}/>
                    <PictureWBagground bgColor="bg-ocean" imageSkift={PinkImg} onClick={() => handleImageChange(PinkImg)} />
                
                </div>
                </div>
            </div>
            <div class="flex flex-col items-center mt-auto mb-auto" >
                <RundKnap bgColor="bg-darkGray60" onClick={() =>handleImageChange(SortImg)}/>
                <RundKnap bgColor="bg-lightTeal" onClick={() =>handleImageChange(TealImg)}/>
                <RundKnap bgColor="bg-ocean"onClick={() =>handleImageChange(PinkImg)} />
            </div>
            </section>
            
        </section>
     );
}
 
export default LandingPage;
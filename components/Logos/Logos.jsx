import React from "react";
import Image from "next/image";
import pyswflImage from '../../public/images/logos/pyswfl.png';
import musicprodImage from '../../public/images/logos/music-prod.png';
import swflcodersImage from '../../public/images/logos/swfl-coders.png';
import swfltechnightsImage from '../../public/images/logos/swfl-technights.JPG';
import swflhackImage from '../../public/images/logos/swfl-hackerspace.png';
import arvrImage from '../../public/images/logos/ar-vr.jpeg';
import swflsecImage from '../../public/images/logos/swfl-sec.png';
import allLogosImage from '../../public/images/logos/all-logos.png';


const logos = {
    pyswfl: pyswflImage,
    musicprod: musicprodImage,
    swflcoders: swflcodersImage,
    swfltn: swfltechnightsImage,
    swflhack: swflhackImage,
    arvr: arvrImage,
    swflsec: swflsecImage,
    allLogos: allLogosImage

}

export default function Logos() {
    return(
        <div className="space-y-2 flex flex-col max-h-max max-w-screen">
        <div className="grid grid-cols-2 gap-4 max-w-screen align-center sm:hidden">
            <Image 
            className="max-w-28"
            src={logos.swfldata}
            alt ={'SWFL Data'}
            /> 

            <Image 
            className="max-w-24"
            src={logos.swflsec}
            alt ={'SWFL Sec'}
            />

            <Image 
            className="max-w-24"
            src={logos.musicprod}
            alt ={'Music Producers of SWFL'}
            />
    
            <Image 
             className="max-w-24 rounded-full"
             src={logos.arvr}
             alt={'AR & VR of SWFL'}
            />

            <Image 
             className="max-w-24 rounded-full"
             src={logos.swflcoders}
             alt ={'SWFL Coders'}
            />

            <Image 
             className="max-w-24"
             src={logos.pyswfl}
             alt ={'PySWFL'}
            />
            </div>
           <div className="flex justify-center sm:hidden">
           <Image 
             className="max-w-24"
             src={logos.swflhack}
             alt ={'SWFL Hackerspace'}
            />
           </div>
            
            <div className="hidden sm:block">
            <Image 
             className=""
             src={logos.allLogos}
             alt ={'Organization Logos'}
             />
            </div>
          </div>
    )
}

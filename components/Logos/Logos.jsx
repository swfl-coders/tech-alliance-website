import React from "react";
import Image from "next/image";
import logos from "./logos";

export function Logos() {
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

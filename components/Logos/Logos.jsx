import React from 'react';
import Image from 'next/image';

export default function Logos() {
    return(
        <div className="space-y-2 flex flex-col max-h-max max-w-full mb-5">
          <div className="flex flex-col content-center items-center space-y-4">
        <div className="grid grid-cols-2 gap-y-4 gap-x-10 max-w-screen align-center sm:hidden">

            <Image 
            className="max-w-20"
            src='/images/logos/swfl-sec.png'
            alt ='SWFL Sec'
            width={500}
            height={500}
            />

            <Image 
            className="max-w-20"
            src='/images/logos/music-prod.png'
            alt ='Music Producers of SWFL'
            width={500}
            height={500}
            />

            <Image 
             className="max-w-20 rounded-full"
             src='/images/logos/ar-vr.jpeg'
             alt='AR & VR of SWFL'
             width={500}
             height={500}
            />

            <Image 
             className="max-w-20 rounded-full"
             src='/images/logos/swfl-coders.png'
             alt ='SWFL Coders'
             width={500}
             height={500}
            />

            <Image 
             className="max-w-20 rounded-full"
             src='/images/logos/pyswfl.png'
             alt ='PySWFL'
             width={500}
             height={500}
            />
            </div>
           <div className="flex justify-center sm:hidden">
           <Image 
             className="max-w-20"
             src='/images/logos/hackerspace.png'
             alt ='SWFL Hackerspace'
             width={500}
             height={500}
            />
           </div>
            </div>
            <div className="hidden sm:flex justify-center ">
            <Image 
             className="sm:max-w-screen"
             src='/images/logos/all-logos.png'
             alt ='Tech Alliance Members'
             width={700}
             height={500}
             />
            </div>
          </div>
    )
}

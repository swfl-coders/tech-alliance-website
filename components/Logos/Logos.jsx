import React from 'react';
import Image from 'next/image';

export default function Logos() {
    return(
        <div className="space-y-2 flex flex-col max-h-max max-w-full mb-5 lg:py-6">
          <div className="flex flex-col content-center items-center space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-10 max-w-screen align-center">

              <Image
                className="max-w-20 md:max-w-24 lg:max-w-32"
                src='/images/logos/swfl-sec.png'
                alt ='SWFL Sec'
                width={500}
                height={500}
              />

              <Image
                className="max-w-20 md:max-w-24 lg:max-w-32"
                src='/images/logos/music-prod.png'
                alt ='Music Makers of SWFL'
                width={500}
                height={500}
              />

              <Image
                className="max-w-20 md:max-w-24 lg:max-w-30 rounded-full"
                src='/images/logos/ar-vr.jpeg'
                alt='AR & VR of SWFL'
                width={500}
                height={500}
              />

              <Image
                className="max-w-20 md:max-w-24 lg:max-w-30 rounded-full"
                src='/images/logos/swfl-coders.png'
                alt ='SWFL Coders'
                width={500}
                height={500}
              />

              <Image
                className="max-w-20 md:max-w-24 lg:max-w-32 rounded-full"
                src='/images/logos/pyswfl.png'
                alt ='PySWFL'
                width={500}
                height={500}
              />

              <Image
                className="max-w-20 md:max-w-24 lg:max-w-32"
                src='/images/logos/hackerspace.png'
                alt ='SWFL Hackerspace'
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
    )
}

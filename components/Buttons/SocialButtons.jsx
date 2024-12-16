import { useState } from "react";
import Image from "next/image";

export default function SocialButtons() {
    const [hoveredButton, setHoveredButton] = useState(null);

    return (
        <div>
             <div className="flex flex-col justify-center p-2">
              <p className="font-medium">Join us!</p>
              <div className="flex flex-col gap-6 justify-center items-center py-4 md:flex-row md:gap-14">
                <a 
                target="_blank" 
                href="https://www.meetup.com/TechAllianceSWFL/" 
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredButton('meetup')}
                onMouseLeave={() => setHoveredButton(null)}
                >
                  <div className="group flex items-center w-fit h-fit gap-2 border-2 border-white rounded-t-full rounded-b-full py-2 px-4 shadow-[0_4px_13px_-5px_rgba(0,0,0,0.3)] hover:bg-[#358aca] hover:text-white hover:border-[#358aca]">
                    <Image 
                        src={hoveredButton === 'meetup' ? 
                            '/images/socials/mu-icon-white.png' 
                            : '/images/socials/mu-icon-blue.png'
                    } 
                        alt="Meetup logo" 
                        width={35} 
                        height={35} 
                    />
                    <p className="text-md w-56 md:text-xl lg:text-2xl">Join us on Meetup</p>
                  </div>
                </a>
                <a 
                target="_blank"
                href="https://discord.com/invite/G5UR26qAbT" 
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredButton('discord')}
                onMouseLeave={() => setHoveredButton(null)}
                >
                  <div className="group flex items-center w-fit h-fit gap-2 border-2 border-white rounded-t-full rounded-b-full py-2 px-4 shadow-[0_4px_13px_-5px_rgba(0,0,0,0.3)] hover:bg-[#358aca] hover:text-white hover:border-[#358aca]">
                    <Image 
                    src={hoveredButton === 'discord' ? 
                        '/images/socials/dis-icon.png' 
                        : '/images/socials/dis-icon-blue.png'
                    } 
                    alt="Discord logo" 
                    width={35} 
                    height={35} />
                    <p className="text-md w-48 md:text-xl lg:text-2xl">Join our server</p>
                  </div>
                </a>
              </div>
          </div>
        </div>
    )
}

import React from 'react'
import dynamic from 'next/dynamic'

const SocialIcon = dynamic(() => import('react-social-icons').then(mod => mod.SocialIcon), {
  ssr: false,
})

const Card = ({
  facebookLink,
  githubLink,
  groupName,
  groupLink,
  groupDescription,
  instagramLink,
  linkedinLink,
  meetingDate,
  xLink,
}) => {
  return (
    <div className="grid row-span-5 transition-colors duration-150 ease-in border-2 border-solid border-white-border rounded-xl grid-rows-subgrid transition-border-color hover:border-solid focus:border-solid active:border-solid hover:border-tech-blue focus:border-tech-blue active:border-tech-blue hover:shadow-card-shadow focus:shadow-card-shadow active:shadow-card-shadow hover:shadow-tech-blue focus:shadow-tech-blue active:shadow-tech-blue">
      <a href={groupLink} className="text-left md:w-72 lg:w-2/5 ">
        <h2 className="text-lg md:h-12 lg:h-auto md:text-xl text-tech-blue">{groupName} &rarr;</h2>
      </a>
        <p className="text-base line-clamp-2 h-14 md:text-lg">
          {groupDescription}
        </p>
        {/* <button className="text-tech-blue">Show more</button>
        <button className="hidden text-tech-blue">Show less</button> */}

      <p className="text-base leading-normal md:text-lg">{meetingDate}</p>
      <div className="grid justify-start grid-flow-col">
        <SocialIcon target="_blank" url={groupLink} />
        {facebookLink && <SocialIcon className="ml-2" target="_blank" url={facebookLink} />}
        {instagramLink && <SocialIcon className="ml-2" target="_blank" url={instagramLink} />}
        {xLink && <SocialIcon className="ml-2" target="_blank" url={xLink} />}
        {linkedinLink && <SocialIcon className="ml-2" target="_blank" url={linkedinLink} />}
        {githubLink && <SocialIcon className="ml-2" target="_blank" url={githubLink} />}
      </div>
    </div>
  )
}

export default Card

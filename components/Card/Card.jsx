import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

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
    <div className="flex">
      <a
        href={groupLink}
        className="pt-6 pl-6 pr-6 mt-4 ml-4 mr-4 text-left transition-colors duration-150 ease-in border-2 border-solid md:w-72 lg:w-2/5 border-white-border rounded-xl transition-border-color hover:border-solid focus:border-solid active:border-solid hover:border-tech-blue focus:border-tech-blue active:border-tech-blue hover:shadow-card-shadow focus:shadow-card-shadow active:shadow-card-shadow hover:shadow-tech-blue focus:shadow-tech-blue active:shadow-tech-blue">
        <h2 className="mx-0 my-4 mt-0 mr-0 text-lg md:h-12 lg:h-auto md:text-xl text-tech-blue">{groupName} &rarr;</h2>
        <p className="h-16 m-0 overflow-hidden text-base leading-normal peer hover:h-20 md:h-20 hover:md:h-28 lg:h-32 hover:lg:h-36 md:text-lg hover:overflow-auto">
          {groupDescription}
        </p>
        <Image
          className="hidden pt-2 pb-2 peer-hover:block place-self-end"
          src="/images/vertical-scroll.png"
          width={24}
          height={24}
          alt="Vertical scroll icon"
        />
        <br />
        <p className="m-0 text-base leading-normal md:text-lg">{meetingDate}</p>
        <br />
        <div className="grid grid-flow-col">
          <SocialIcon target="_blank" url={groupLink} />
          {facebookLink && <SocialIcon className="ml-2" target="_blank" url={facebookLink} />}
          {instagramLink && <SocialIcon className="ml-2" target="_blank" url={instagramLink} />}
          {xLink && <SocialIcon className="ml-2" target="_blank" url={xLink} />}
          {linkedinLink && <SocialIcon className="ml-2" target="_blank" url={linkedinLink} />}
          {githubLink && <SocialIcon className="ml-2" target="_blank" url={githubLink} />}
        </div>
        <br />
      </a>
    </div>
  )
}

export default Card

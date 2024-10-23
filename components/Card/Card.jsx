import React from 'react';
import dynamic from 'next/dynamic';

const SocialIcon = dynamic(() => import('react-social-icons').then((mod) => mod.SocialIcon), {
  ssr: false,
});

const Card = ({ facebookLink, githubLink, groupName, groupLink, groupDescription, instagramLink, linkedinLink, meetingDate, xLink }) => {
  return (
    <a
      href={groupLink}
      className="p-6 m-4 text-left transition-colors duration-150 ease-in border-2 border-solid md:w-72 lg:w-2/5 border-white-border rounded-xl transition-border-color hover:border-solid focus:border-solid active:border-solid hover:border-tech-blue focus:border-tech-blue active:border-tech-blue hover:shadow-card-shadow focus:shadow-card-shadow active:shadow-card-shadow hover:shadow-tech-blue focus:shadow-tech-blue active:shadow-tech-blue">
      <h2 className="mx-0 my-4 mt-0 mr-0 text-lg md:text-xl text-tech-blue">{groupName} &rarr;</h2>
      <p className="h-12 m-0 overflow-hidden text-base leading-normal lg:h-32 md:text-lg hover:overflow-auto">
        {groupDescription}
      </p>
      <br />
      <p className="m-0 text-base leading-normal md:text-xl">{meetingDate}</p>
      <br />
      <div className="flex justify-stretch">
        <SocialIcon target="_blank" url={groupLink} />
        {facebookLink && <SocialIcon className="ml-2" target="_blank" url={facebookLink} />}
        {instagramLink && <SocialIcon className="ml-2" target="_blank" url={instagramLink} />}
        {xLink && <SocialIcon className="ml-2" target="_blank" url={xLink} />}
        {linkedinLink && <SocialIcon className="ml-2" target="_blank" url={linkedinLink} />}
        {githubLink && <SocialIcon className="ml-2" target="_blank" url={githubLink} />}
      </div>
      <br />
    </a>
  )
};

export default Card;
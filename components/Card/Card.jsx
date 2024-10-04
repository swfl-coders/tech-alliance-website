import React from 'react';
import dynamic from 'next/dynamic';
import styles from './Card.module.css';

const SocialIcon = dynamic(() => import('react-social-icons').then((mod) => mod.SocialIcon), {
  ssr: false,
});

const Card = ({ facebookLink, githubLink, groupName, groupLink, groupDescription, instagramLink, linkedinLink, meetingDate, xLink }) => {
  return (
    <a href={groupLink} className={styles.card}>
      <h2>{groupName} &rarr;</h2>
      <p>{groupDescription}</p>
      <br/>
      <p>{meetingDate}</p>
      <br/>
      <SocialIcon target="_blank" url={groupLink} />
      {facebookLink && <SocialIcon target="_blank" url={facebookLink} />}
      {instagramLink && <SocialIcon target="_blank" url={instagramLink} />}
      {xLink && <SocialIcon target="_blank" url={xLink} />}
      {linkedinLink && <SocialIcon target="_blank" url={linkedinLink} />}
      {githubLink && <SocialIcon target="_blank" url={githubLink} />}
      <br/>
    </a>
  );
};

export default Card;
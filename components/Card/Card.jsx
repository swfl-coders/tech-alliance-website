import React from 'react';
import styles from './Card.module.css'

const Card = ({ groupName, groupLink, groupDescription, meetingDate }) => {
  return (
      <a href={groupLink} className={styles.card}>
        <h2>{groupName} &rarr;</h2>
        <p>{groupDescription}</p>
        <br/>
        <p>{meetingDate}</p>
        <br/>
        <p>{groupLink}</p>
      </a>
  )
}

export default Card
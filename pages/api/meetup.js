import React, { useState, useEffect } from "react"
import Moment from "moment"
import Image from "next/image";

export default function Meetups() {
  const [meetups, setMeetups] = useState(null)

  useEffect(() => {
    fetch("https://api.meetup.com/SWFL-Coders/events")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        setMeetups(json)
      })
      .catch(e => {
        console.log('There was a problem with your fetch operation: ' + e.message);
      });
  }, [])
  console.log({meetups})

  if (meetups == null) {
    return null
  } else if (meetups.length === 0) {
    return (
      <div>
        No meetups currently scheduled. Check back soon!
      </div>
    )
  } else {
    return meetups.map(meetup => (
    <div key={meetup.id}>
        <a href={meetup.link}>
            <Image src={meetup.group.photo.photo_link} alt={meetup.group.name} />
            <p>{meetup.name}</p>
            <p>
                {`${Moment(meetup.local_date).format("MMMM Do YYYY")} | Time: ${
                    meetup.local_time
                }`}
            </p>
            Venue: {meetup.venue ? meetup.venue.name : "TBD"}
        </a>
        <p>
            {meetup.is_online_event ? 'Click to get Zoom Link' : `Address: ${meetup.venue.address_1} ${meetup.venue.city}, ${meetup.venue.zip}`}
        </p>
    </div>
    ))
  }
}
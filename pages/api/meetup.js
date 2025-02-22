import React, { useState, useEffect } from "react"
import Moment from "moment"
import FetchJsonP from "fetch-jsonp"
import Image from "next/image";

export default function Meetups() {
  const [meetups, setMeetups] = useState(null)
  const meetupUrls = [
    "https://api.meetup.com/SWFL-Coders/events",
    "https://api.meetup.com/music-makers-of-southwest-florida/",
    "https://api.meetup.com/pythonswfl",
    "https://api.meetup.com/SWFL-Coders/events",
    "https://api.meetup.com/swfl-hackerspace",
    "https://api.meetup.com/SWFLSec-Southwest-Florida-Infosec-Meetup",
    "https://api.meetup.com/vrarswfl",
  ];

  useEffect(() => {
    const fetchMeetups = async () => {
      const allMeetups = await Promise.all(meetupUrls.map(url => fetchMeetupData(url)));
      const mergedMeetups = allMeetups.flat(); // flatten the array of arrays
      setMeetups(mergedMeetups);
    };
    fetchMeetups();
  }, []);

  async function fetchMeetupData(url) {
    try {
      const response = await FetchJsonP(url);
      const json = await response.json();
      return json.data;
    } catch (error) {
      console.error("Error fetching meetups:", error);
      return [];
    }
  }

  if (meetups === null) {
    return null;
  } else if (meetups.length === 0) {
    return (
      <div>
        No meetups currently scheduled. Check back soon!
      </div>
    );
  } else {
    return meetups.map(meetup => (
      <div key={meetup.id}>
        <a href={meetup.link}>
          {/* TODO: Fix this and make sure the image is displayed */}
          {/* <Image src={meetup.group.photo.photo_link} alt={meetup.group.name} /> */}
          <p>{meetup.name}</p>
          <p>
            {`${Moment(meetup.local_date).format("MMMM Do YYYY")} | Time: ${
              meetup.local_time
            }`}
          </p>
          Venue: {meetup.venue ? meetup.venue.name : "TBD"}
        </a>
        <p>
          {/* TODO: Fix this. The venue is returning null for some meetups due to some be online */}
          {/* {meetup.is_online_event ? 'Click to get Zoom Link' : `Address: ${meetup.venue.address_1} ${meetup.venue.city}, ${meetup.venue.zip}`} */}
        </p>
      </div>
    ));
  }
}

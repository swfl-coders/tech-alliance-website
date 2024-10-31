import { useState } from 'react'

const CardDescription = ({ groupDescription }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <>
      <p className={`text-base ${readMore ? 'whitespace-normal': 'line-clamp-2'} md:text-lg`}>
        {groupDescription}
      </p>
      <button onClick={() => setReadMore(!readMore)} className="text-tech-blue click:hidden peer">
        {!readMore ? 'Show more' : 'Show less'}
      </button>
    </>
  )
}

export default CardDescription

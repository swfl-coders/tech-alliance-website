
export default function Calendar() {
    return (
    <div className="m-10 flex justify-center">
      <iframe 
        src="https://calendar.google.com/calendar/embed?src=8bbbb0a45404f41fbcbdf35e9a2def81f70630f8941fdc71011b5b81ff15b2ff%40group.calendar.google.com&ctz=America%2FNew_York" 
        style={{border: 0}}
        className="h-80 md:h-[500px]"
        width="700" 
        height="500"
        scrolling="no"
      >

        </iframe>
    </div>
    )
}

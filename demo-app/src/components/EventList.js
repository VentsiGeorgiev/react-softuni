export default function EventList({ events, handleDelete }) {
  return (
    <div>
      {events.map((event, index) => (
        <div key={event.id}>
          <ul>
            <li>Name: {event.name}</li>
            <li>Guests: {event.guests}</li>
            <li>Event: {event.event}</li>
            <li>Location: {event.location}</li>
          </ul>
          <button onClick={() => handleDelete(event.id)}>delete</button>
        </div>
      ))}
    </div>

  )
}
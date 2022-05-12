import { useState } from 'react';
import './NewEventForm.css';

export default function NewEventForm({ addEvent }) {

  const [name, setName] = useState('')
  const [guests, setGuests] = useState(0)
  const [event, setEvent] = useState('')
  const [location, setLocation] = useState('Sofia')


  // const handleChange = (e) => {
  //   setName(e.target.value)
  // }

  const resetForm = () => {
    setName('')
    setGuests(0)
    setEvent('')
    setLocation('Sofia')
  }



  const handleSubmit = (e) => {
    e.preventDefault()

    const newEvent = {
      name,
      guests,
      event,
      location,
      id: Math.floor(Math.random() * 10000)
    }
    console.log(newEvent);
    addEvent(newEvent)
    resetForm()
  }


  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <label>
        <span>First Name:</span>
        <input
          type="text"
          // onChange={handleChange}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label>
        <span>Guests:</span>
        <input
          type="number"
          onChange={(e) => setGuests(e.target.value)}
          value={guests}
        />
      </label>
      <label>
        <span>Type of event:</span>
        <input
          type="text"
          onChange={(e) => setEvent(e.target.value)}
          value={event}
        />
      </label>
      <label>
        <span>Event location:</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="sofia">Sofia</option>
          <option value="varna">Varna</option>
          <option value="burgas">Burgas</option>
        </select>
      </label>

      <button className='event-btn'>Submit</button>
      <p>name - {name} | guests - {guests} | type - {event}</p>
      <p onClick={resetForm}>reset the form</p>
    </form>
  )
}


// const newEvent = {
//   name,
//   guests,
//   event,
//   id: Math.floor(Math.random() * 10000)
// }
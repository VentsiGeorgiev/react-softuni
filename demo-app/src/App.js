import { useState } from 'react';
import Title from './components/Title';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(true)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'Mary',
      guests: 40,
      event: 'wedding'
    },
    {
      id: 2,
      name: 'Leo',
      guests: 15,
      event: 'bday'
    },
    {
      id: 3,
      name: 'Brad',
      guests: 10,
      event: 'team work party'
    },
  ])

  const handleDelete = (id) => {

    setEvents((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      })
    })
  }

  const subtitle = 'manage your events'

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <>
      <div className="App">
        <Title title='Events app' subtitle={subtitle} />
        <hr />
        {showEvents && <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>}
        {!showEvents && <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>}
        <hr />
        <h2>Events:</h2>
        {showEvents && events.map((event) => (
          <div key={event.id} className="container">
            <ul>
              <li>Name: {event.name}</li>
              <li>Guests: {event.guests}</li>
              <li>Event: {event.event}</li>
            </ul>
            <button onClick={() => handleDelete(event.id)}>delete</button>
            <hr />
          </div>
        ))}
        <hr />
        {showModal && <Modal handleClose={handleClose}>
          <h2>10% Off Code!</h2>
          <p>Use code event-app to check out!</p>
        </Modal>}

      </div>
    </>

  );
}

export default App;
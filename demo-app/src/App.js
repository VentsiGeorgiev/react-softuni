import { useState } from 'react';
import Title from './components/Title';
import './App.css';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])


  const handleDelete = (id) => {

    setEvents((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      })
    })
  }

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [event, ...prevEvents]
    })
    setShowModal(false)
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
        <h2>Events:</h2>
        {showEvents && <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>}
        {!showEvents && <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>}
        <hr />
        {showEvents && < EventList events={events} handleDelete={handleDelete} />}
        <hr />
        {showModal && <Modal handleClose={handleClose}>
          <NewEventForm addEvent={addEvent} />
        </Modal>}

        <div>
          <button onClick={() => setShowModal(true)}>Add New Event</button>
        </div>
      </div>
    </>

  );
}

export default App;



// const [events, setEvents] = useState([
//   {
//     id: 1,
//     name: 'Mary',
//     guests: 40,
//     event: 'wedding'
//   },
//   {
//     id: 2,
//     name: 'Leo',
//     guests: 15,
//     event: 'bday'
//   },
//   {
//     id: 3,
//     name: 'Brad',
//     guests: 10,
//     event: 'team building'
//   },
// ])
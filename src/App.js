import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Event from './components/Event';

function App() {
  let initialEvents = JSON.parse(localStorage.getItem('events'));
  if(!initialEvents){
    initialEvents = [];
  };

  const [events, setEvents] = useState(initialEvents);

  useEffect(() => {
      localStorage.setItem('events', JSON.stringify(events));
  }, [events]);


  const createEvent = event => {
    setEvents([ ...events, event ]);
  };

  const deleteEvent = id => {
    const newEvents = events.filter(event => event._id !== id);
    setEvents(newEvents);
  };

  return (
    <Fragment>
      <h1>Scheduler</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form 
              createEvent = {createEvent}
            />
          </div>
          <div className='one-half column'>
            <h2>Events</h2>
            {events.map(event => (
              <Event 
                key = {event._id}
                event = {event}
                deleteEvent = {deleteEvent}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

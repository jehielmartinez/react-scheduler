import React from 'react';

const Event = ({ event, deleteEvent }) => (
    <div className='event'>
        <p>Event: <span>{event.name}</span></p>
        <p>Organizer: <span>{event.organizer}</span></p>
        <p>Date: <span>{event.date}</span></p>
        <p>Time: <span>{event.time}</span></p>
        <p>Details: <span>{event.details}</span></p>

        <button
            className='button delete u-full-width'
            onClick={() => deleteEvent(event._id)}
        >Delete &times;</button>
    </div>
);

export default Event;

import React, { Fragment, useState } from 'react';

const Form = () => {
    const [event, setEvent] = useState({
        name: '',
        organizer: '',
        date: '',
        time: '',
        details: ''
    });
    
    const handleChange = e => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value
        });
    };

    const { name, organizer, date, time, details } = event;

    const submitEvent = e => {
        e.preventDefault();

        //submit here
    }

    return (
        <Fragment>
            <h2>Create Event</h2>
            <form
                onSubmit={submitEvent}
            >
                <label>Event Title</label>
                <input 
                    type='text'
                    name='name'
                    className='u-full-width'
                    placeholder='Event Title'
                    onChange={handleChange}
                    value={name}
                />

                <label>Organizer</label>
                <input 
                    type='text'
                    name='organizer'
                    className='u-full-width'
                    placeholder='Organizer Name'
                    onChange={handleChange}
                    value={organizer}
                />

                <label>Date</label>
                <input 
                    type='date'
                    name='date'
                    className='u-full-width'
                    onChange={handleChange}
                    value={date}
                />
                <label>Time</label>
                <input 
                    type='time'
                    name='time'
                    className='u-full-width'
                    onChange={handleChange}
                    value={time}
                />
                <label>Details</label>
                <textarea
                    className='u-full-width'
                    name='details'
                    onChange={handleChange}
                    value={details}
                ></textarea>

                <button
                    type='button'
                    className='u-full-width button-primary'
                >Add Event</button>
            </form>
        </Fragment>
    );
};

export default Form;

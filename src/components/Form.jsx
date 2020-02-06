import React, { Fragment, useState } from 'react';
import nanoid from 'nanoid';

const Form = ({ createEvent }) => {
    const [event, setEvent] = useState({
        _id: '',
        name: '',
        organizer: '',
        date: '',
        time: '',
        details: ''
    });

    const [ error, setError ] = useState(false);
    
    const handleChange = e => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value
        });
    };

    const { name, organizer, date, time, details } = event;

    const submitEvent = e => {
        e.preventDefault();

        if(name.trim() === '' || organizer.trim() === '' || date.trim() === '' || time.trim() === '' || details.trim() === ''){
            setError(true);
            return;
        }

        event._id = nanoid();

        createEvent(event);

        setEvent({
            _id: '',
            name: '',
            organizer: '',
            date: '',
            time: '',
            details: ''
        });
    };

    return (
        <Fragment>
            <h2>Create Event</h2>
            {error ? <p className='alert-error'>Every field is required</p> : null}
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
                    type='submit'
                    className='u-full-width button-primary'
                >Add Event</button>
            </form>
        </Fragment>
    );
};

export default Form;

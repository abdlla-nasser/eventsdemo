import React from 'react'
import Event from '../components/Event'

const EventsList = props => {
    return props.events.map(event => {
        return <Event event={event} key={event.id}/>
    })
}

export default EventsList;

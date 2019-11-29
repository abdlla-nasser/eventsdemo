import React, { useState } from 'react';
import { Segment, Form, Button} from 'semantic-ui-react'

const useFormInput = initValue => {
    const [ value, setValue ] = useState(initValue);
    const handleChange = e => {
        setValue(e.target.value)
    }
    return {
        value: value,
        onChange: handleChange
    }
}

const EventForm = ({setIsOpen}) => {
    const title = useFormInput("")
    const date = useFormInput()
    const city = useFormInput("")
    const venue = useFormInput("")
    const hostedBy = useFormInput("")
    return (
    <Segment>
    <Form>
        <Form.Field>
            <label>Event Title</label>
            <input placeholder="First Name" {...title}/>
        </Form.Field>
        <Form.Field>
            <label>Event Date</label>
            <input type="date" placeholder="Event Date" {...date}/>
        </Form.Field>
        <Form.Field>
            <label>City</label>
            <input placeholder="City event is taking place" {...city}/>
        </Form.Field>
        <Form.Field>
            <label>Venue</label>
            <input placeholder="Enter the Venue of the event" {...venue}/>
        </Form.Field>
        <Form.Field>
        <label>Hosted By</label>
        <input placeholder="Enter the name of person hosting" {...hostedBy}/>
        </Form.Field>
        <Button positive type="submit">Submit</Button>
        <Button type="button" onClick={() => setIsOpen(false)} >Cancel</Button>
    </Form>
    </Segment>
    )
}
export default EventForm;
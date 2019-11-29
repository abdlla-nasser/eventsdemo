import React from 'react'
import { List, Image } from 'semantic-ui-react'

const Attendee = ({attendee}) => {
    return (
        <List.Item>
            <Image as='a' size='mini' circular src={attendee.photoURL}/>
        </List.Item>
    )
}

export default Attendee;

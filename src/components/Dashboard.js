import React, { useState } from 'react';
import { Grid, Button  } from 'semantic-ui-react';
import EventsList from './EventsList';
import EventForm from './EventForm';

const Dashboard = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ events, setEvents ] = useState([
        {
          id: '1',
          title: 'Trip to Tower of London',
          date: '2018-03-27T11:00:00+00:00',
          category: 'culture',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
          city: 'London, UK',
          venue: "Tower of London, St Katharine's & Wapping, London",
          hostedBy: 'Bob',
          hostPhotoURL: 'https://randomuser.me/api/portraits/women/20.jpg',
          attendees: [
            {
              id: 'a',
              name: 'Bob',
              photoURL: 'https://randomuser.me/api/portraits/women/56.jpg'
            },
            {
              id: 'b',
              name: 'Tom',
              photoURL: 'https://randomuser.me/api/portraits/men/69.jpg'
            }
          ]
        },
        {
          id: '2',
          title: 'Trip to Punch and Judy Pub',
          date: '2018-03-28T14:00:00+00:00',
          category: 'drinks',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
          city: 'London, UK',
          venue: 'Punch & Judy, Henrietta Street, London, UK',
          hostedBy: 'Tom',
          hostPhotoURL: 'https://randomuser.me/api/portraits/women/68.jpg',
          attendees: [
            {
              id: 'b',
              name: 'Tom',
              photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            },
            {
              id: 'a',
              name: 'Bob',
              photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            }
          ]
        }
      ])
    return (
    <Grid>
        <Grid.Column width={10}>
            <EventsList events={events}/>
        </Grid.Column>
        <Grid.Column width={6}>
            <Button positive content="create event" onClick={() => setIsOpen(true)}/>
            {isOpen && <EventForm setIsOpen={setIsOpen}/>}
        </Grid.Column>
    </Grid>
    )
}

export default Dashboard;
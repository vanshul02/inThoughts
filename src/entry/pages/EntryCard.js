import React from 'react';
import { useParams } from 'react-router';

import EntryCardList from '../components/EntryCardList';
import './EntryCard.css';

const DUMMY_ENTRIES = [
    {
        uid: 'any1',
        title: 'World Trade Park',
        image: 'https://images.pexels.com/photos/10305718/pexels-photo-10305718.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        desc: 'Went to World Trade Park with friends',
        date: '30-11-2021',
        eid: 'e1',
        location: {
            lat: 26.853198,
            lng: 75.804699
        }
    },
    {
        uid: 'any1',
        title: 'World Trade Park',
        image: 'https://images.pexels.com/photos/10305718/pexels-photo-10305718.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        desc: 'Went to World Trade Park with friends',
        date: '30-11-2021',
        eid: 'e2',
        location: {
            lat: 26.853198,
            lng: 75.804699
        }
    }
];
const EntryCard = () => {
    const entryId = useParams().entryId;
    const loaded = DUMMY_ENTRIES.filter(item => item.eid === entryId);
    return <EntryCardList items={loaded} />
};

export default EntryCard;
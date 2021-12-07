import React from 'react';
import EntryList from '../components/EntryList';
const Entry = () => {
    const ENTRIES = [
        {
            uid: 'any1',
            title: 'Blue Car',
            image: 'https://images.pexels.com/photos/10305718/pexels-photo-10305718.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            desc: 'A blue car in front of a pink background',
            date: '30-11-2021',
            eid: 'e1'
        }
    ];
    return <EntryList entries={ENTRIES} />;
};

export default Entry;
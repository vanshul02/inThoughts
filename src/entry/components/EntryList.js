import React from 'react';
import './EntryList.css';
import EntryItem from './EntryItem'

const EntryList = props => {
    if (props.entries.length === 0) {
        return (
            <h2> No Entries Found </h2>
        );
    }
    return (
        <ul className="entry-list">
            {props.entries.map(entry => (
                <EntryItem
                    key={entry.eid}
                    eid={entry.eid}
                    uid={entry.uid}
                    title={entry.title}
                    date={entry.date}
                    image={entry.image}
                    desc={entry.desc}
                />
            ))}
        </ul>
    );
};

export default EntryList;
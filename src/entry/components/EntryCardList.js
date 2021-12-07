import React from "react";

import EntryCardItem from "./EntryCardItem";
import Card from "../../shared/components/UIElements/Card/Card";
import './EntryCardList.css';

const EntryCardList = props => {
    if (props.items.length === 0) {
        return <div className="entrycard-list center">
            <Card>
                <h2> No Entries Found. Maybe create one?</h2>
            </Card>
        </div>
    }
    return (<ul className="entrycard-list">
        {props.items.map(entry => <EntryCardItem
            key={entry.eid}
            eid={entry.eid}
            uid={entry.uid}
            title={entry.title}
            date={entry.date}
            image={entry.image}
            desc={entry.desc}
            coordinates={entry.location}
        />
        )
        }
    </ul>
    )
};
export default EntryCardList;
import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../shared/components/UIElements/Card/Card';
import './EntryItem.css';
const EntryItem = props => {
    return (
        <li className="entry-item" key={props.eid}>


            <Card className="entry-item__content">
                <Link to={`/${props.uid}/entry/${props.eid}`}>
                    <div className="entry-item__title"> <h2>{props.title} </h2> </div>
                    <div className="entry-item__date"> <h5>{props.date} </h5> </div>
                    {/* <div className="desc"> <h2>{props.desc} </h2> </div> */}
                    {/* <div className="image"> <img src={props.image} alt={props.title} /> </div> */}
                </Link>
            </Card>

        </li>
    );
};

export default EntryItem;
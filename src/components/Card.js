import React from 'react';

import CardInfo from '../components/CardInfo';

function Card(props) {

    return (
        <div>
            <div className="d-inline-block d-card" onClick={(e) => props.click(props.item)}>
                <img className="d-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
                {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} technologiesUsed={props.item.technologiesUsed} link={props.item.link} demo={props.item.demo}/>}
            </div>
           
        </div>
    );

}

export default Card;
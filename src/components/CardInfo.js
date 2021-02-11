import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

   const style = useSpring({opacity: 1, from: {opacity: 0}});
   
   
   
   
   
    return (
        <div>

            <animated.div className="g-card-info" style={style}>
                <p className="cardy g-card-title">{props.title}</p>
                <p className="cardy g-card-sub-title">{props.subTitle}</p>
                <p className="cardy g-card-sub-title">{props.technologiesUsed}</p>
                <a className="links" href={props.link} target="_blank" rel="noopener noreferrer">Github </a>
                <br/>
                <a className="links" href={props.demo} target="_blank" rel="noopener noreferrer">Demo</a>
            </animated.div>
            

        </div>
    )

}

export default CardInfo;
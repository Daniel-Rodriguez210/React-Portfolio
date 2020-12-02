import React from 'react'; 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from './Card'

import portfolio from '../assets/images/SS3.png'
import directory from '../assets/images/ss5.png'
import movie from '../assets/images/SS 1.png'
import puppy from '../assets/images/ss4.png'
import generator from '../assets/images/SS 2.png'
// import bubble from '../assets/images/SS6.png'


class Carousel extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
        items: [
            {
                id:0,
                title: 'React Portfolio',
                subTitle: 'A fully functioning react portfolio.',
                imgSrc: portfolio,
                link: 'https://github.com',
                selected: false 
            },
            {
                id:1,
                title: 'Employee Office Directory',
                subTitle: 'A react office directory.',
                imgSrc: directory,
                link: 'https://github.com',
                selected: false 
            },
            {
                id:2,
                title: 'Meteorology and Motion Pictures',
                subTitle: 'A movie recommendation app based on weather.',
                imgSrc: movie,
                link: 'https://github.com',
                selected: false 
            },
            {
                id:3,
                title: 'Fur Family',
                subTitle: 'An application for new pet owners.',
                imgSrc: puppy,
                link: 'https://github.com',
                selected: false 
            },
            {
                id:4,
                title: 'Secure Password Generator',
                subTitle: 'An application for generating a secure password.',
                imgSrc: generator,
                link: 'https://github.com',
                selected: false 
            },
            {
                id:5,
                title: 'Thought Bubble',
                subTitle: "A spin on pinterest for users who want to take the social out of social media.",
                // imgSrc: bubble,
                link: 'https://github.com',
                selected: false 
            }
        ]
    }
}

handleCardClick = (id, card) => {
    console.log(id);

    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
        if(item.id !== id) {
            item.selected = false;
        } 
    });

    this.setState ({
        items
    });
}

makeItems = (items) => {
    return items.map(item => {
        return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
}



render() {
    return (
        <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
    )
}

}
export default Carousel; 
import React from 'react'; 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from './Card'



import movie from '../assets/images/SS 1.png'
import puppy from '../assets/images/ss4.png'
import generator from '../assets/images/SS 2.png'
import bubble from '../assets/images/thought.png'


class Carousel extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
        items: [            
            {
                id:0,
                title: 'Meteorology and Motion Pictures',
                subTitle: 'A movie recommendation app based on the weather. By utilizing the Openweather and TMDB APIs we are able to gather the location of the user and provide movie recommendations. Users can also order food and snacks from the application providing a full theater experience from the comfort of their home. ',
                technologiesUsed: 'Technologies Used: HTML5, CSS3, Bootstrap, JavaScript, jQuery',
                imgSrc: movie,
                link: 'https://github.com/Daniel-Rodriguez210/MovieWeatherRecs',
                demo: 'https://daniel-rodriguez210.github.io/MovieWeatherRecs/',
                selected: false 
            },
            {
                id:1,
                title: 'Fur Family',
                subTitle: "An application for new pet owners. Due to the recent pandemic pet adoption was at an all-time high. By using our application, pet owners can track their pet's progression and explore ways to become better pet owners.",
                technologiesUsed: 'Technologies Used: HTML5, CSS3, Bootstrap, Javascript, jQuery, Node, Express, MySQL, Passport and Sequelize, Heroku',
                imgSrc: puppy,
                link: 'https://github.com/Daniel-Rodriguez210/FurFamily',
                demo: 'https://fur-family-34.herokuapp.com/',
                selected: false 
            },
            {
                id:2,
                title: 'Secure Password Generator',
                subTitle: 'An application for generating a secure password. Studies show that a high percentage of web users use the same password for all their accounts. Leaving themselves vulnerable for cyber attacks. I have a developed an easy to use application that can generate sophisticated passwords to protect data from cyber criminals. ',
                technologiesUsed: 'Technologies Used: HTML5, CSS3, Bootstrap, JavaScript',
                imgSrc: generator,
                link: 'https://github.com/Daniel-Rodriguez210/Secure-Password-Generator',
                demo: 'https://daniel-rodriguez210.github.io/Secure-Password-Generator/',
                selected: false 
            },
            {
                id:3,
                title: 'Thought Bubble',
                subTitle: "A spin on pinterest for users who want to take the social out of social media. We all use social media because it's fun to post and express yourself. Well with the comments sections growing increasingly toxic. People refrain from sharing and posting. We have created a diary form of social media that is exclusively for yourself. All the fun of posting with out the trolls.",
                technologiesUsed: 'Technologies Used: MERN (MongoDB, Express, React, Node), CSS3, Bootstrap, Cloudinary, Multer, Neumorphism',
                imgSrc: bubble,
                link: 'https://github.com/Daniel-Rodriguez210/ThoughtBubble',
                demo: 'https://secret-reaches-35397.herokuapp.com/',
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
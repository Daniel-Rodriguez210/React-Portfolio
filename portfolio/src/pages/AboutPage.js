import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Daniel Rodriguez is currently enrolled in the University of Texas Web Developer Boot
                Camp. His interest
                in application design and development lead him to a challenging and reputable
                institution. He is driven
                by his passion in customer service, and was recognized at his previous employer for
                consistent high standings in customer satisfaction.</p>
                <p>Daniel sees himself as a lifetime learner. Ambitiously selecting a demanding coding
                course with a high paced curriculum. He believes he will start with a solid foundation
                as he begins the next chapter in his professional goals. Daniel's prior experience in
                the high stress and demanding field of catastrophe claims adjusting will ease his
                transition in the challenging tech industry.</p>
            </Content>

        </div>
    );

}

export default AboutPage; 
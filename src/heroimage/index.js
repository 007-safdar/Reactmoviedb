/* eslint-disable no-unused-expressions */

import React from 'react';

import{Wrapper,Content,Text} from './heroImage.styles';

const HeroImage=({image,title,text})=>{
    <Wrapper image={image}>
        <Content>
            <Text>
            <h1>{title}</h1>
            <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
};

export default HeroImage;
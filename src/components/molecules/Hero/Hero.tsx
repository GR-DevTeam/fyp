import React from 'react'
import styled from 'styled-components';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';

export interface IHero {
    title: string;
    description?: string;
    buttonText?: string;
    terms?: string;
    onButtonClick?: (ev: any) => any;
    backgroundColor: 'primary' | 'secondary' | 'dark';
    textColor: 'light' | 'dark';
}



const Wrapper = styled.div<IHero>`
    width: 100%;
    height: 100%;
    background-color: ${ (props) => props.theme.colors[props.backgroundColor]};
    color: ${(props) => [props.theme.colors[props.textColor]]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 4fr;
    padding: ${(props) => props.theme.measures.l};
`;

const Hero: React.FC<IHero> = (props) => {
    return (
        <Wrapper {...props}>
            <Heading isLight size={'l'}>{props.title}</Heading>
            <Text isLight size={'l'}>{props.description}</Text>
            <Button isInverted>{props.buttonText}</Button>
            <Text isLight size={'s'}>{props.terms}</Text>
            </Wrapper>
    )
}


export default Hero


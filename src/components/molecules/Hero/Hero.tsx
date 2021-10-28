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
}



const Wrapper = styled.div<IHero>`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.dark};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 4fr;
`;

const Hero: React.FC<IHero> = (props) => {
    return (
        <Wrapper {...props}>
            <Heading size={'l'}>{props.title}</Heading>
            <Text size={'l'}>{props.description}</Text>
            <Button isInverted>{props.buttonText}</Button>
            <Text size={'s'}>{props.terms}</Text>
            </Wrapper>
    )
}


export default Hero


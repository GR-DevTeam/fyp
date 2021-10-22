import React from 'react'
import styled from 'styled-components';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';

export interface IHero {
    Tittle: string;
    Description: string;
    Button: string;
    Terms: string;
}



const Wrapper = styled.div`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.light};
    width: 100%;
    height: 100%;
    display: grid;
    grid-row: 4;
    justify-content: center;
    align-items: center;
    justify-items: center;
`;

const Hero: React.FC<IHero> = (props) => {
    return (
            <Wrapper  >
            <Heading size={'l'}>{props.Tittle}</Heading>
            <Text size={'l'}>{props.Description}</Text>
            <Button isRounded variant={'secondary'}>{props.Button}</Button>
            <Text size={'s'}>{props.Terms}</Text>
            </Wrapper>
    )
}

export default Hero

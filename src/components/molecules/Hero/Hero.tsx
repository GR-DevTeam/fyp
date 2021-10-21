import React from 'react'
import styled from 'styled-components';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';

export interface IHero {
    Tittle: string;
    Description: string;
    Button: string;
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
            <Text size={'l'}>{props.Tittle}</Text>
            <Text size={'m'}>{props.Description}</Text>
            <Button>{props.Button}</Button>
            <Text size={'s'}>Terms of service</Text>
            </Wrapper>
    )
}

export default Hero

import React from 'react'
import styled from 'styled-components';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';

export interface IHero {
    Text: string;
}



const Wrapper = styled.div`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.light};
    width: 100%;
    height: 100%;
    display: grid;
    grid-row: 2;
    justify-content: center;
    align-items: center;
`;

const Hero: React.FC<IHero> = (props) => {
    return (
            <Wrapper>
                <Text size={'l'}>Descripcion</Text>
                <Button />
            </Wrapper>
    )
}

export default Hero

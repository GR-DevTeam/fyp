import React from 'react'
import styled from 'styled-components';
import Text from '../../atoms/Text/Text';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-row: 2;
    align-items: center;
`;

const Loquereciba = styled.div`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.light};
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-row: 2;
    justify-content: center;
    align-items: center;
`;

const Hero: React.FC = () => {
    return (
            <Loquereciba>
                <Text size={'l'}> hola juancarlo</Text>
                ola
            </Loquereciba>
    )
}

export default Hero

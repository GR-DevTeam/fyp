import React from 'react';
import styled from 'styled-components';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';

export interface IHero {
  // TODO: Add backgroundColor & optional button rendering
  // Conditional rendering info: https://reactjs.org/docs/conditional-rendering.html
  title: string;
  description: string;
  button: string;
  terms: string;
  onButtonClick: (ev: any) => any;
}

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
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
    <Wrapper>
      <Heading size={'l'}>{props.title}</Heading>
      <Text size={'m'}>{props.description}</Text>
      <Button onClick={props.onButtonClick} isInverted>
        {props.button}
      </Button>
      <Text size={'s'}>{props.terms}</Text>
    </Wrapper>
  );
};

export default Hero;

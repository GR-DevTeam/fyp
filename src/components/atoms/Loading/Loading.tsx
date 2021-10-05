import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface ILoading {
  icon?: IconDefinition;
}

const Spinner = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors.primary};
  background: #0000;
  font-size: ${(props) => props.theme.measures.xxl};
  height: 10%;
  width: 10%;
  //flex: 0 0;
`;

const Background = styled.div`
  height: 100%;
  width: 100%;
  background: #cac1c15e;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoading = styled.div`
  width: 100vw;
  height: 100vh;
  color: ${(props) => props.theme.colors.light};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.spacing.xxs};
`;

const Loading: React.FC<ILoading> = (props) => {
  return (
    <StyledLoading>
      <Background>
        <Spinner icon={props.icon as IconDefinition} spin />
      </Background>
    </StyledLoading>
  );
};

Loading.defaultProps = {
  icon: faCompass,
};
export default Loading;

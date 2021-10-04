import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface ILoading {
  placeholder?: string;
  icon?: IconDefinition;
}

const Spinner = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors.dark};
  background: ${(props) => props.theme.colors.light};
  flex: 0 0;
  padding: 1rem;
`;

const StyledLoading = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #404240;
  color: ${(props) => props.theme.colors.light};
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.xxs};
  img {
    align-self: center;
  }
`;

const Loading: React.FC<ILoading> = (props) => {
  return (
    <StyledLoading>
      <Spinner icon={props.icon as IconDefinition} />
    </StyledLoading>
  );
};

Loading.defaultProps = {
  icon: faCompass,
};
export default Loading;

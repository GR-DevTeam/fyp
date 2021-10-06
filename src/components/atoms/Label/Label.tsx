import React from 'react';
import styled from 'styled-components';
export interface ILabel {
  text: string;
  state: 'isDanger' | 'isOk' | 'isWarning' | 'isBlue';
  closeButton: boolean;
}

const StyledLabel = styled.div<ILabel>``;

const Label: React.FC<ILabel> = (props) => {
  return <div></div>;
};

export default Label;

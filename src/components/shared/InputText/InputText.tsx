import React from 'react';
import styled from 'styled-components';

export interface IInputText {
  placeholder: string;
  icon: React.ReactNode;
}

const StyledInput = styled.input`
  font-size: 1rem;
  background: #000;
  color: #fff;
  padding: 1rem;
  border-radius: 5px;
  outline: none;
  border: none;
`;

const InputText = (props: IInputText) => {
  return <StyledInput placeholder={props.placeholder} />;
};

export default InputText;

import React, { useState } from 'react'
import { rgba } from 'polished';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import Text from '../../atoms/Text/Text'

export interface IDialog {
  // onConfirm: Function;
  // onCancel: Function;
  // title: string;
  // content: string;
}

const ModalContainer  = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background:  ${props => rgba(props.theme.colors.black, 0.4)};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  `;

const DialogWrapper = styled.div`
  height: 40%;
  width: 35%;
  background-color: ${props => props.theme.colors.white};
  opacity: 1;
  padding: 0 ${props => props.theme.spacing.xs};
  padding-bottom: ${props => props.theme.spacing.xs};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 2;
`;

const ButtonContainer = styled.div`
  align-self: flex-end;
  width: 80%;
  display: flex;
  justify-content: space-evenly;
`;

const Dialog: React.FC<IDialog> = (props) => {

  const [toggle, setToggle] = useState(false)

  return (
    <ModalContainer>
      <DialogWrapper>
        <Text size='l'>Titulo</Text>
        <Text size= 'm'>Are you sure about that</Text>
        <ButtonContainer>
          <Button>Cancel</Button>
          <Button  variant={'primary'} >Confirm</Button>
        </ButtonContainer>
      </DialogWrapper>
    </ModalContainer>
  )
}

export default Dialog

import React from 'react'
import { rgba } from 'polished';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import Text from '../../atoms/Text/Text'
import Heading from '../../atoms/Heading/Heading';

export interface IDialog {
  onConfirm: (ev: React.MouseEvent<HTMLButtonElement>) => any;
  onCancel: (ev: React.MouseEvent<HTMLButtonElement>) => any;
  title: string;
  content: string;
  show: boolean;
}

const ModalContainer  = styled.div<Pick<IDialog, 'show'>>`
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
  transition: all ease 0.1s;
  opacity: ${ props => props.show ? 1 : 0 };
  pointer-events: ${ props => props.show ? 'auto' : 'none' };
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


  return (
    <ModalContainer show={props.show} >
      <DialogWrapper>
        <Heading size='m'>{props.title}</Heading>
        <Text size= 'm'>{props.content}</Text>
        <ButtonContainer>
          <Button onClick={props.onCancel} >Cancel</Button>
          <Button  variant={'primary'} onClick={ props.onConfirm } >Confirm</Button>
        </ButtonContainer>
      </DialogWrapper>
    </ModalContainer>
  )
}

export default Dialog

import React from 'react'
import { rgba } from 'polished';
import styled from 'styled-components';

import Button from '../../atoms/Button/Button';
import Text from '../../atoms/Text/Text'
import Heading from '../../atoms/Heading/Heading';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { dialogToggle, toggle } from '../../../features/dialog/dialogSlice';

export interface IDialog {
  onConfirm: Function;
  onCancel: Function;
  title: string;
  content: string;
}

interface IDialogShow {
  show: boolean;
}

const ModalContainer  = styled.div<IDialogShow>`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background:  ${props => rgba(props.theme.colors.black, 0.3)};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  transition: all ease 0.25s;
  opacity: ${ props => props.show ? 1 : 0 };
  pointer-events: ${ props => props.show ? 'all' : 'none' };
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
  box-shadow: ${props => props.theme.shadows.withShadow};
`;

const ButtonContainer = styled.div`
  align-self: flex-end;
  width: 80%;
  display: flex;
  justify-content: space-evenly;
`;

const Dialog: React.FC<IDialog> = (props) => {

  const {show} = useAppSelector(dialogToggle)
  const dispatch = useAppDispatch()

  const onConfirmClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(toggle())
    props.onConfirm()
  }

  const onCancelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(toggle())
    props.onCancel()
  }

  return (
    <ModalContainer show={show} onClick={(e) => dispatch(toggle())}>
      <DialogWrapper onClick={e => e.stopPropagation()}>
        <Heading size='m'>{props.title}</Heading>
        <Text size= 'm'>{props.content}</Text>
        <ButtonContainer>
          <Button onClick={onCancelClick}>Cancel</Button>
          <Button  variant={'primary'} onClick={onConfirmClick}>Confirm</Button>
        </ButtonContainer>
      </DialogWrapper>
    </ModalContainer>
  )
}

export default Dialog

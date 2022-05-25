import React from 'react'

import {
  AlertBox,
  ButtonsBox,
  CancelButton,
  ConfirmButton,
  Container,
  Header
} from './styles'

interface ConfirmationAlertProps {
  message: string
  confirmMessage: string
  cancelMessage: string
}

export function ConfirmationAlert({
  message,
  confirmMessage,
  cancelMessage
}: ConfirmationAlertProps) {
  return (
    <Container>
      <AlertBox>
        <Header>{message}</Header>
        <ButtonsBox>
          <ConfirmButton>{confirmMessage}</ConfirmButton>
          <CancelButton>{cancelMessage}</CancelButton>
        </ButtonsBox>
      </AlertBox>
    </Container>
  )
}

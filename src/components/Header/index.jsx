import React from 'react'
import { StyledHeader } from './style'

export const Header = ({userLogout}) => {
  return (
    <StyledHeader>
        <h1>Kenzie Hub</h1>
        <button onClick={() => userLogout()}>Sair</button>
    </StyledHeader>
  )
}

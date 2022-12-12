import React from 'react'
import { StyledHeader } from './style'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

export const Header = () => {
  const {userLogout} = useContext(UserContext)
  return (
    <StyledHeader>
        <h1>Kenzie Hub</h1>
        <button onClick={() => userLogout()}>Sair</button>
    </StyledHeader>
  )
}

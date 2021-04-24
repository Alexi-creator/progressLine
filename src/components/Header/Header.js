import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const HeaderBlock = styled.header`
  height: 80px;
  display: flex;
  justify-content: center;
  background-color: #5125DB;
  a.active {
    color: #000;
    text-decoration: none;
  }
`

const H1 = styled.h1`
  text-align: center;
  font-family: Roboto;
`

const Header = (props) => {

  return ( <>
    <HeaderBlock>
      <NavLink to="/"> 
        <H1>React</H1> 
      </NavLink>
    </HeaderBlock>
    </>
  )
}

export default Header;
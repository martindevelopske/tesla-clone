import React from 'react'
import { CustomMenu, HeaderContainer, StyledLogo, StyledMenu, StyledRightMenu } from '../Styles/HeaderStyled'
import SideBar from './SideBar'


function Header() {
  return (
    <HeaderContainer>
      <a>
      
        <img src='./images/logo.svg' alt="" />
      
      </a>
      <StyledMenu>
        <p>
          <a href='/'> Model S</a>
        </p>
        <p>
          <a href='/'> Model 3</a>
        </p>
        <p>
          <a href='/'> Model X</a>
        </p>
        <p>
          <a href='/'> Model Y</a>
        </p>
      </StyledMenu>
      <StyledRightMenu>
         <p>
          <a href='/'> Shop</a>
        </p>
        <p>
          <a href='/'> Tesla Account</a>
        </p>
        <CustomMenu />
      </StyledRightMenu>
      <SideBar />
    </HeaderContainer>
  )
}

export default Header
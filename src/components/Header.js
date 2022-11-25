import React, { useState } from 'react'
import { Fade } from 'react-reveal';
import { CustomMenu, HeaderContainer, StyledLogo, StyledMenu, StyledRightMenu } from '../Styles/HeaderStyled'
import { BurgerNav, StyledCloseIcon } from '../Styles/StyledSideBar';
import {selectCars} from '../app/components/features/car/carSlice'
import { useSelector } from 'react-redux';


function Header() {
  const [sideBar,setSideBar]= useState(false);
  const SideToggle= ()=>{
      if(sideBar){
          setSideBar(false)
      } else {
          setSideBar(true)
      }
      console.log(sideBar);
  }
  const cars=useSelector(selectCars);
  console.log(cars);
  return (
    <HeaderContainer>
      <a>
          <img src='./images/logo.svg' alt="" />
      </a>
      <StyledMenu>
        {cars && cars.map((car,index)=> {
          return(
            <p key={index}>
          <a href='/'>{car}</a>
        </p>
          )
        })}
      
      </StyledMenu>
      <StyledRightMenu>
         <p>
          <a href='/'> Shop</a>
        </p>
        <p>
          <a href='/'> Tesla Account</a>
        </p>
        <CustomMenu onClick={SideToggle}>Menu</CustomMenu>
      </StyledRightMenu>
      {sideBar && <BurgerNav>
        <StyledCloseIcon onClick={SideToggle}/>
        {cars && cars.map((car,index)=> {
          return(
            <li key={index}> <a href="/">{car}</a></li>
          )
        })}
        <li> <a href="/">Existing Inventory</a></li>
        <li> <a href="/">Used Inventory</a></li>
        <li> <a href="/">Trade-In</a></li>
        <li> <a href="/">Cybertruck</a></li>
        <li> <a href="/">Roadster</a></li>
        <li> <a href="/">Semi</a></li>
        
        <li> <a href="/">Existing Inventory</a></li>
    </BurgerNav>
      }
    </HeaderContainer>
  )
}

export default Header
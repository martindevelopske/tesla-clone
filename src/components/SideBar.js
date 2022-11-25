import React from 'react'
import { BurgerNav } from '../Styles/StyledSideBar'

function SideBar() {
  return (
    <BurgerNav>
        <li> <a href="/">Existing Inventory</a></li>
        <li> <a href="/">Used Inventory</a></li>
        <li> <a href="/">Trade-In</a></li>
        <li> <a href="/">Cybertruck</a></li>
        <li> <a href="/">Roadster</a></li>
        <li> <a href="/">Semi</a></li>
        <li> <a href="/">model X</a></li>
        <li> <a href="/">model Y</a></li>
        <li> <a href="/">model 3</a></li>
        <li> <a href="/">model S</a></li>
        <li> <a href="/">Existing Inventory</a></li>
    </BurgerNav>
  )
}

export default SideBar
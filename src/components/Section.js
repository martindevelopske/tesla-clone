import React from 'react'
import { ButtonGroup, LeftButton, RightButton, SectionContainer, StyledText } from '../Styles/SectionStyled'

function Section() {
  return (
    <SectionContainer>
        <StyledText>
            <h1> Model S</h1>
            <p>Order online for Touches Delivery</p>
        </StyledText>
        <ButtonGroup>
            <LeftButton>
                Custom Order
            </LeftButton>
            <RightButton>
                Existing Inventory
            </RightButton>
        </ButtonGroup>
    </SectionContainer>
  )
}

export default Section
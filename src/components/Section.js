import React from 'react'
import { ButtonGroup, ButtonsHolder, LeftButton, RightButton, SectionContainer, StyledDownArrow, StyledText } from '../Styles/SectionStyled'

function Section(props) {
    const {title,desc,image,bg,leftBtn,rightBtn}=props;
  return (
    <SectionContainer bg={bg}>
        <StyledText>
            <h1> {title}</h1>
            <p>{desc}</p>
        </StyledText>
        <ButtonsHolder>
        <ButtonGroup>
            <LeftButton>
                {leftBtn}
            </LeftButton>
            {rightBtn && <RightButton>
                {rightBtn}
            </RightButton>}
        </ButtonGroup>
        <StyledDownArrow src='/images/down-arrow.svg'>

        </StyledDownArrow>
        </ButtonsHolder>
       
    </SectionContainer>
  )
}

export default Section
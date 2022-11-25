import React from 'react'
import { ButtonGroup, ButtonsHolder, LeftButton, RightButton, SectionContainer, StyledDownArrow, StyledText } from '../Styles/SectionStyled'
import Fade from 'react-reveal/Fade';

function Section(props) {
    const {title,desc,bg,leftBtn,rightBtn}=props;
  return (
    <SectionContainer bg={bg}>
        <Fade bottom>
        <StyledText>
            <h1> {title}</h1>
            <p>{desc}</p>
        </StyledText>
        </Fade>
        
        <ButtonsHolder>
            <Fade bottom>
            <ButtonGroup>
            <LeftButton>
                {leftBtn}
            </LeftButton>
            {rightBtn && <RightButton>
                {rightBtn}
            </RightButton>}
        </ButtonGroup>
            </Fade>
       
        <StyledDownArrow src='/images/down-arrow.svg'>

        </StyledDownArrow>
        </ButtonsHolder>
       
    </SectionContainer>
  )
}

export default Section
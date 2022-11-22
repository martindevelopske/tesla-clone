import styled from "styled-components";

export const SectionContainer=styled.div`
width:100vw;
height:100vh;
background-image: url('./images/model-s.jpg');
background-size:cover;
background-position:center;
background-repeat: no-repeat;
`
export const StyledText=styled.div`
padding-top:15vh;
text-align: center;
`
export const ButtonGroup=styled.div`
display:flex;
`

export const  LeftButton=styled.div`
background-color: rgba(23,26,32,0.8);
height:40px;
width: 256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius: 100px;
opacity:0.85;
text-transform: uppercase;
font-size:12px;

`
export const RightButton=styled(LeftButton)`
`
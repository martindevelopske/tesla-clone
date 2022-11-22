import styled from "styled-components";

export const SectionContainer=styled.div`
width:100vw;
height:100vh;
background-image: url(${bg=>bg.bg});
background-size:cover;
background-position:center;
background-repeat: no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`
export const StyledText=styled.div`
padding-top:15vh;
text-align: center;
`
export const ButtonGroup=styled.div`
display:flex;
margin-bottom:30px;
@media(max-width: 768px){
    flex-direction:column;
}
`

export const  LeftButton=styled.div`
cursor:pointer;
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
margin:8px;

`
export const RightButton=styled(LeftButton)`
background-color:white;
opacity:0.65;
color:black;
`
export const StyledDownArrow=styled.img`
margin-bottom:5px;
margin-top:10px;
height: 40px;
animation: animateDown infinite 1.5s;
overflow-x: hidden;
`
export const ButtonsHolder=styled.div`
text-align:center`
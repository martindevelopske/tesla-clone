import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';


export const BurgerNav=styled.div`
position:fixed;
top:0;
right:0;
background-color:white;
width:200px;
height:100vh;
z-index:10;
display:flex;
flex-direction:column;
justify-content:right;
transition: transform 0.5s ease-in;

& li{
    list-style:none;
    margin-top:5px;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
}
& a{
    text-decoration:none;
    font-weight:500;
    padding: 0 10px;
}
@media(max-width:768px){
    width:70%;
}
`
export const StyledCloseIcon=styled(CloseIcon)`
position:fixed;
right:0;
top:0;
cursor:pointer;

`
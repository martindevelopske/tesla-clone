import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
export const HeaderContainer=styled.div`
min-height:60px;
display:flex;
position:fixed;
align-items:center;
padding:0 20px;
top:0;
width:100vw;
justify-content:space-between;
z-index:1;
`
export const StyledLogo=styled.img`
`
export const StyledMenu=styled.div`
display:flex;
align-items:center;
flex: 1;
justify-content: center;
& a{
    text-decoration:none;
    
}
& p{
    font-weight: 500;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
}
@media (max-width: 768px){
    display:none;
}
`
export const StyledRightMenu=styled.div`
display:flex;
align-items:center;
& a{
    text-transform: uppercase;
    text-decoration: none;
    margin-right:10px;
    font-weight:500;
    flex-wrap: no-wrap
}
@media(max-width:768px){
    & p{
        display:none;
    }
}`
export const CustomMenu=styled.div`
cursor:pointer;
width:50px;
height:25px;
border-radius:5px;
color:black;
background-color: rgb(238, 238, 238);
display:flex;
justify-content:center;
align-items: center;
display:none;
@media(max-width:768px){
    display:flex;
 }
`
import styled from "styled-components";

export const BurgerNav=styled.div`
position:fixed;
top:0;
right:0;
background-color:white;
width:200px;
height:100vh;
z-index:10;
& li{
    list-style:none;
}
& a{
    text-decoration:none;
    padding: 0 10px;
}

`
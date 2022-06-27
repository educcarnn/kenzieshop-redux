import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
ul{
    display: flex;
    justify-content: space-around;
}
li{
    list-style: none;
    width: 25%;
    display: flex;
    flex-direction: column;
}
body{
    box-sizing: border-box;
}
button{
    cursor: pointer;
}
img{
    width: 20%;
    margin: 0 auto;
}
`
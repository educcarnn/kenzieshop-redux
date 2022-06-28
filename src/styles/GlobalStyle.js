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
    border: none;
}
button:hover{
    background-color: brown;
    color: white;
}

img{
    width: 20%;
    margin: 0 auto;
}
`
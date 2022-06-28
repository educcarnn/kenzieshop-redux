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
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
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
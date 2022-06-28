// display: flex;
//     height: 13%;
//     /* width: 63rem; */
//     padding-left: 33%;
//     margin-left: -26%;
//     /* background-color: lightslategray; */
//     flex-direction: column;
//     /* justify-content: space-between; */
//     align-items: flex-start;
// }
import styled from "styled-components";

export const DivHeader = styled.div`

  margin-left: -46vw;
  width: 110vw;
  margin-top: -20rem;
  background-color: darkblue;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 800px) {
    margin-left: -30vw;
    width: 122%;
  }
`


export const UlItens = styled.ul`

  display: flex;
  flex-direction: column;
 
`;

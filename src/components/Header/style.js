import styled from "styled-components";

export const HeaderStyle = styled.div`
    display: flex;
    background-color: darkblue;
    padding-top: 1rem;
    margin-top: -18rem;
    width: 100%;
    gap: 27%;
    flex-direction: row;
    align-items: center;
    .name {
        margin-left: 5rem;
    }
    .buttonMove{
    border-radius: 4px;
    padding-top: 1rem;
    font-family: inherit;
    font-weight: 500;
    padding-bottom: 1rem;
  }
  @media (max-width: 800px) {
    .name {
        margin-left: 0rem;
    }
    position: fixed;
    display: flex;
    margin-top: -12rem;
    width: 100%;
    gap: 16%;
    height: -23rem;
    flex-direction: row;
    align-items: center;
  }

    
`;

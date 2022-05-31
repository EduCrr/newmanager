import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0px;
  .user {
    display: flex;
    .loggedUser {
      margin-right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        border-radius: 50%;
      }
    }
    .btnsTop {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      button {
        outline: 0;
        border: 0px;
        cursor: pointer;
        background-color: transparent;
        color: #dc9763;
        margin: 0px 5px;
        padding: 5px;
      }
    }
  }
`;

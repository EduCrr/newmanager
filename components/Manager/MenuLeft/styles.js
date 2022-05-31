import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  height: 100%;
  padding: 20px 0px;
  width: inherit;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 2px 8px 10px rgb(0 0 0 / 15%);
  .initial {
    width: 100%;
    .online {
      margin-top: 10px;
      margin-bottom: 30px;
      display: flex;
      text-align: center;
      font-weight: 500;
      align-items: center;
      justify-content: center;
      p {
        margin-left: 8px;
        font-weight: 600;
      }

      span {
        height: 15px;
        width: 15px;
        border-radius: 50%;
        background-color: #43e343;
      }
    }
    ul {
      margin-bottom: 30px;
      width: 100%;
      .menu {
        cursor: pointer;
        display: flex;
        padding: 15px 10px;
        width: 100% !important;
        svg {
          margin-right: 10px;
        }

        &:hover {
          background-color: #dc9763;
          color: white;
          a {
            color: white !important;
          }
        }
      }
      .active {
        background-color: #dc9763;
        a {
          color: white !important;
        }
      }
      li {
        display: flex;
        flex-direction: column;
        text-align: center;

        list-style-type: none;
        a {
        }
      }
    }
  }
`;

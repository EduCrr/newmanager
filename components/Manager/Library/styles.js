import styled from "styled-components";

export const Content = styled.div`
  .mediaTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #eee;

    .btnsGallery {
      display: flex;
      align-items: center;
      .categoryLibrary {
        margin-right: 20px;

        button {
          cursor: pointer;
          background-color: transparent;
          border: 0;
          outline: 0;
          padding: 0px 10px;
        }
        .active {
          background-color: #dc9763;
          color: white;
          padding: 10px;
          border-radius: 8px;
        }
      }
    }
  }
`;

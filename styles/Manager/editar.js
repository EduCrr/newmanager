import styled from "styled-components";

export const Content = styled.div`
  padding: 20px;
  width: 100%;
  form.globalForm {
    margin: 1rem 0px;
    input,
    select {
      width: 100%;
    }
    button {
      margin-top: 0px !important;
    }
  }
  .addImg {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .bt {
      margin-right: 10px;
      cursor: pointer;
      background-color: #dc9763;
      padding: 10px 20px;
      border: 0;
      border-radius: 5px;
      color: white;
    }
  }
  .containerImgs {
    display: flex;
    gap: 15px;
  }
  .contentImgs {
    width: 25%;
    border-radius: 15px;
    padding: 15px;
    margin: 2rem 0px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    img {
      object-fit: cover;
      height: 250px;
      width: 100%;
      border-radius: 15px;
      margin-bottom: 10px;
    }
    .btns {
      margin-left: auto;
      button {
        width: auto;
        cursor: pointer;
        background-color: #dc9763;
        padding: 5px;
        border: 0;
        border-radius: 5px;
        color: white;
        margin-bottom: 0px !important;
      }
    }
  }
`;

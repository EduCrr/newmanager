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
  }
  .containerImgs {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
  }
  .contentImgs {
    width: 23%;
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
      div {
        width: auto;
        cursor: pointer;
        background-color: #dc9763;
        padding: 4px;
        border: 0;
        border-radius: 5px;
        color: white;
        margin-bottom: 0px !important;
      }
    }
  }
`;

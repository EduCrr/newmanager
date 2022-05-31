import styled from "styled-components";

export const Content = styled.div`
  padding: 20px;
  .headerContent {
    margin: 1rem 0px;
  }

  form {
    max-width: 1100px;
    display: flex;
    flex-direction: column;

    .inputImage {
      height: 350px;
      width: 450px;
      .container {
        position: relative;
        width: 100%;
      }
      img.selected {
        margin: 1rem 0px;
        border-radius: 15px;
        height: 350px;
        width: 450px;
        object-fit: cover;
      }
      .image {
        opacity: 1;
        display: block;
        width: 100%;
        height: auto;
        transition: 0.5s ease;
        backface-visibility: hidden;
      }

      .middle {
        transition: 0.5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
      }

      .container:hover img {
        opacity: 0.4;
      }

      .container:hover .middle {
        opacity: 1;
      }
      .text {
        padding: 10px;
        border-radius: 5px;
        outline: 0;
        border: 0;
        background-color: #dc9763;
        cursor: pointer;
        color: white;
      }
    }
  }
`;

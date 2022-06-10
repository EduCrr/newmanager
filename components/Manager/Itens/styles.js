import styled from "styled-components";

export const Content = styled.div`
  padding: 20px;

  .add {
    display: flex;
    justify-content: flex-end;

    button {
      cursor: pointer;
      background-color: #dc9763;
      padding: 10px 20px;
      border: 0;
      border-radius: 5px;
      color: white;
    }
  }
  .addSlides {
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      cursor: pointer;
      background-color: #dc9763;
      padding: 10px 20px;
      border: 0;
      border-radius: 5px;
      color: white;
    }
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 1.5rem 0px;
    gap: 5px !important;
    width: 100%;
    .item {
      padding: 0px 2px;
      width: 33%;
      margin-bottom: 20px;
      svg {
        color: white !important;
      }
      img {
        width: 100%;
        height: 270px;
        object-fit: cover;
        border-radius: 15px;
      }
      .btnsItem {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          margin: 10px 0px;
          padding: 0px 5px;
        }

        button {
          cursor: pointer;
          margin-left: 10px;
          background-color: #dc9763;
          padding: 5px;
          border: 0;
          border-radius: 5px;
          color: white;
        }
      }
      .slide {
        display: flex;
        justify-content: flex-end;
        margin-top: 15px;
        button {
          cursor: pointer;
          background-color: #dc9763;
          padding: 5px;
          border: 0;
          border-radius: 5px;
          color: white;
        }
      }

      .files {
        opacity: 0.5 !important;
      }
    }
    .active {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 15px;
      button {
        cursor: pointer;
        margin-left: 10px;
        background-color: #39bd29;
        padding: 5px;
        border: 0;
        border-radius: 5px;
        color: white;
      }
    }
  }
  .mediaTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 30px;

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

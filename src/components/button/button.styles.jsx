import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
    width:auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 13px;
    background-color: #212121;
    color: #F6F6F6;
    text-transform: uppercase;
    font-family: "Lato", sans-serif;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: #F6F6F6;
      color: #212121;
      border: 1px solid #212121;
    }
`;	

export const GoogleButton = styled(BaseButton)`
  background-color: #6D9886;
  color: #F6F6F6;
  
  &:hover {
    color: #6D9886;
    background-color: #F6F6F6;
    border: 1px solid #6D9886;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: #F6F6F6;
    color: #212121;
    border: 1px solid #212121;

    &:hover {
      background-color: #212121;
      color: #F6F6F6;
      border: none;
    }
`;
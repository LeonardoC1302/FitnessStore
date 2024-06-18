import styled from "styled-components";

export const ShoppingIcon = styled.img`
  width: 25px;
  height: 25px;
  filter: invert(1);
`;

export const CartIconContainer = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 15px;
  color: #F6F6F6;
`;
  
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 480px) {
      height: 100px;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 2rem;
    }
    margin-bottom: 2.5rem;
    background-color: #212121;
    padding: 2rem;
`;

export const LogoContainer  = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  img{
      padding: 2.5rem;
      height: 90%;
      width: 100px;
      filter: invert(1);
    }
`;

export const NavLinks = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  @media (min-width: 480px) {
    flex-direction: row;
  }
  gap: 2rem;
`;

export const NavLink = styled(Link)`
  padding: 1rem 0;
  cursor: pointer;
  color: #F6F6F6;
  border-bottom: 2px solid transparent;
  text-transform: uppercase;
  font-size: 1.6rem;

  &:hover{
    border-bottom: 2px solid #F6F6F6;
  }
`;
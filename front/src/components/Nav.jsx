import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px;

  @media(max-width: 992px) {
    margin: 10px;
  }
`;

const LogoContainer = styled.a`
  visibility: ${(props) => (props.visibility)};
  font-size: 2.5em;
  cursor: pointer;
  text-decoration: none;
`
const LogoLoca = styled.span`
  color: black;
`
const LogoTrust = styled.span`
  color: #520058;
  font-weight: bold;
`
const NavMenu = styled.a`
  color: #520058;
  cursor: pointer;
  text-shadow: 0px 5px 10px gray;

  &:hover {
    text-decoration: underline;
  }
`

function Nav() {
  const homeUrl = useLocation().pathname;
  return (
    <NavContainer>
      <LogoContainer href="/" visibility={`${homeUrl === "/" ? "hidden" : "visibile"}`}>
          <LogoLoca>Loca</LogoLoca><LogoTrust>Trust</LogoTrust>
      </LogoContainer>
      <NavMenu href='/registration'>Connexion/Inscription</NavMenu>
    </NavContainer>
  )
}

export default Nav

import React from 'react';
import './Footer.css';
import styled from 'styled-components'

const FooterContainer = styled.div`
background-color: #e4e2e2;
  position: relative;
  margin-top: auto;
`
const FooterSectionContainer = styled.div`
  display : flex;
  flex-direction: row;
  justify-content: center;
`
const FooterLinksContainer = styled.div `
  width: 150px;
  margin: 1rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: rgb(58, 58, 58);
  text-align: center;
`
const FooterCopywrite = styled.div `
font-size: 13px;
  line-height: 15px;
  color: rgb(100, 100, 100);
  display: flex;
  justify-content: center;
  align-items: center;
`
const FooterBelowLinks = styled.div `
  margin: 1rem ;
`


export default function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterSectionContainer>
          <FooterLinksContainer>
          <h4>Services</h4>
            <ul>
                <li><a href="/login">Login</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/registration">Inscription</a></li>
              <li><a href="/ads">Annonces</a></li>
              </ul>
          </FooterLinksContainer>
          <FooterLinksContainer>
          <h4>La société</h4>
            <ul>
                <li><a href="#">A propos de nous</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Presse</a></li>
              <li><a href="#">Blog</a></li>
              </ul>
          </FooterLinksContainer>
          <FooterLinksContainer>
          <h4>Assistance</h4>
            <ul>
                <li><a href="#">A propos de nous</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Presse</a></li>
              <li><a href="#">Blog</a></li>
              </ul>
          </FooterLinksContainer>
        </FooterSectionContainer>
        <FooterSectionContainer>
          <FooterCopywrite>
            <p>© 2021 LocaTrust. Tous droits réservés.</p>
          </FooterCopywrite>   
          <FooterBelowLinks>
            <ul>
              <li><a href="#">Conditions générales</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
            </ul>  
          </FooterBelowLinks> 
        </FooterSectionContainer>
      </FooterContainer>
    </>
  )
}
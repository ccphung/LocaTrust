import React from 'react'
import Nav from '../components/Nav'
import styled from 'styled-components'
import Button from '../components/Button'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const AdContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AdWrapper = styled.div`
  max-width: 1024px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const AdDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const AdFeatures = styled.div`
  margin-left: 50px;
`

const AdFeaturesText = styled.p`
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
`

const AdImg = styled.img`
  width: 80%;
  max-width: 500px;
  height: auto; 
  object-fit: cover; 
  border-radius: 10px;
`

const Ad = () => {
  return (
    <>
        <Nav />
        <AdContainer>
          <AdWrapper>
          <Carousel 
            showArrows={false}  // Masque les boutons "Précédent" et "Suivant"
            showStatus={false}  // Masque le statut (ex : "1 sur 3")
            swipeable={true}
            useKeyboardArrows={true}
            emulateTouch={true} 
          >
              <AdImg src="assets/images/ad/appartment.jpg" alt="Apartment" />
              <AdImg src="assets/images/ad/appartment.jpg" alt="Apartment" />
              <AdImg src="assets/images/ad/appartment.jpg" alt="Apartment" />
            </Carousel>
        <AdDetail>
          <AdFeatures>
              <AdFeaturesText fw="bold" fs="2em">1500€/mois</AdFeaturesText>
              <AdFeaturesText>Appartement - Paris 16ème</AdFeaturesText>
              <AdFeaturesText>5 pièces - 75m² - Ascenseur</AdFeaturesText>
              <AdFeaturesText fw="bold" fs="1.2em">Caractéristiques</AdFeaturesText>
              <AdFeaturesText>Jardin</AdFeaturesText>
              <AdFeaturesText>Gardien</AdFeaturesText>
              <AdFeaturesText fw="bold" fs="1.2em">Conditions de location</AdFeaturesText>
              <AdFeaturesText>Minimum 6 mois</AdFeaturesText>
              <AdFeaturesText fw="bold" fs="1.2em">Disponibilité</AdFeaturesText>
              <AdFeaturesText>Immédiate</AdFeaturesText>
              <AdFeaturesText>Note : 4.5/5</AdFeaturesText>
          </AdFeatures>
        </AdDetail>
        <Button label="Contacter le propriétaire" width="300px"/>
      </AdWrapper>
    </AdContainer>
    </>
  )
}

export default Ad
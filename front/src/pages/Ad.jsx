import React from 'react'
import Nav from '../components/Nav'
import styled from 'styled-components'
import Checkbox from '../components/Checkbox'
import Button from '../components/Button'

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
  margin-top: 20px;
  justify-content: center;
`

const AdImg = styled.img`
    width: 50%;
    height: auto;
    object-fit: cover;
`

const AdFeatures = styled.div`
  margin-left: 50px;
`

const AdFeaturesTitle = styled.div`

`

const Ad = () => {
  return (
    <>
      <Nav />
        <AdContainer>
          <AdWrapper>
            <AdImg src="assets/images/ad/appartment.jpg"/>
            <AdDetail>
              <AdFeatures>
                  <p>1500€/mois</p>
                  <p>Appartement - Paris 16ème</p>
                  <p>5 pièces - 75m² - Ascenseur</p>

                  <h3>Caractéristiques</h3>
                  <p>Jardin</p>
                  <p>Gardien</p>

                  <h3>Conditions de location</h3>
                  <p>Minimum 6 mois</p>

                  <h3>Disponibilité</h3>
                  <p>Immédiate</p>

                  <p>Note : 4.5/5</p>

              </AdFeatures>
            </AdDetail>
            <Button label="Contacter le propriétaire" width="300px"/>
          </AdWrapper>
        </AdContainer>
    </>
  )
}

export default Ad
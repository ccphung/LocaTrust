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
`

const AdFilterContainer = styled.div`
    background: lightgray;
    padding: 15px;
`
const AdFilter = styled.div`
  display:flex;
  flex-direciton: column;
`

const AdFilterBox = styled.div`
  border: 1px solid ${(props) => (props.color)};
  background: white;
  padding: 5px;
  margin-left: 5px;
  color: ${(props) => (props.color)};
  width: 200px;
`
const AdDetail = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`

const AdImg = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
`

const AdFeatures = styled.div`
  margin-left: 50px;
`


const Ad = () => {
  return (
    <>
      <Nav />
        <AdContainer>
          <h3>Ma recherche</h3>
          <AdWrapper>
            <AdFilterContainer>
              <p>Lieu : Paris</p>
              <AdFilter>
                <Checkbox label="Appartement"/>
                <Checkbox label="Maison"/>
                <Checkbox label="Villa"/>
              </AdFilter>
              <p>Filtres</p>
              <AdFilter>
                  <AdFilterBox>Budget</AdFilterBox>
                  <AdFilterBox>Surface</AdFilterBox>
                  <AdFilterBox>Pièces</AdFilterBox>
                  <AdFilterBox>Etages</AdFilterBox>
                  <AdFilterBox color="purple">+ Ajouter d'autres filtres</AdFilterBox>
              </AdFilter>
            </AdFilterContainer>
            <AdDetail>
              <AdImg src="assets/images/ad/appartment.jpg"/>
              <AdFeatures>
                  <p>1500€/mois</p>
                  <p>Appartement - Paris 16ème</p>
                  <p>5 pièces - 75m² - Ascenseur</p>

                  <p>Note : 4.5/5</p>
                  <Button label="Accéder à l'annonce"/>
              </AdFeatures>
              
            </AdDetail>
          </AdWrapper>
        </AdContainer>
    </>
  )
}

export default Ad
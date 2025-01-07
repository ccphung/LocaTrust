import React from 'react'
import styled from 'styled-components'


const HomeContainer = styled.div`
  margin: 9rem 15rem 15rem 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const HomeTitle = styled.div`
  text-align: center;
`
const LogoLoca = styled.span`
  color: black;
  font-family: 'Laila';
  font-size: 3rem;
`
const LogoTrust = styled.span`
  color: #520058;
  font-family: 'Laila-bold';
  font-size: 3rem;
  `
const HomeSearchContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
`
const HomeSearchSection = styled.div`
  padding: 0 3rem;
  width: 100%;
  min-width: 10rem;
`

const HomeSearchBar = styled.input `
  padding: 1rem;
  font-size: 0.875rem;
  border-radius: 10px;
  width: 100%;

`
const HomeCheckBoxContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
`
const HomeCheckBox = styled.input`
  font-size: 0.875rem;
  margin-right: 0.5rem;
  padding: 2rem;
`
const Button = styled.button`
  display: block;
  padding: 1rem;
  margin: 0.25rem 0.25rem 0 0;
  background-color: #520058;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1rem;
  font-weight: 500;
  border-radius: 0.5rem;
  cursor: pointer;
  max-height: 3rem;
  min-width: 10rem;

    &:hover{
    background:#52005899;
  } 
`

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeTitle>
        <LogoLoca>Loca</LogoLoca><LogoTrust>Trust</LogoTrust>
        </HomeTitle>
        <HomeSearchContainer>
          <HomeSearchSection>
          <HomeSearchBar type="text" name="search" id="search" placeholder="Ville, Quartier, Département, ..." />
          <HomeCheckBoxContainer>
          <HomeCheckBox type="checkbox"/> 
          <p>Maison</p>           
          <HomeCheckBox type="checkbox" name="appartment" id="appartment" />
          <p>Appartement</p>           
          </HomeCheckBoxContainer>
          </HomeSearchSection>
          <Button  type="submit" method="POST" >Lancer la recherche</Button>
        </HomeSearchContainer>
      </HomeContainer>

    </>
  )
}

export default Home
import React from 'react'
import styled from 'styled-components'

const LoginContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:80vh;
`

const LoginForm = styled.form`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 500px;
  max-width: 1024px;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`

const LoginTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  color: #000;
`

const LoginInputContainer = styled.div`
  display:flex;
  flex-direction: column;
`

const LoginInput = styled.input`
  background-color: #fff;
  padding: 1rem;
  margin: 0.25rem;
  font-size: 0.875rem;
  line-height: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`

const LoginButton = styled.button`
  display: block;
  padding: 1rem;
  margin: 0.25rem 0.25rem 0 0;
  background-color: #520058;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1rem;
  font-weight: 500;
  width: 100%;
  border-radius: 0.5rem;
  text-transform: uppercase;
  cursor: pointer;

    &:hover{
    background:#52005899;
  } 
`;

const LoginLinkWrapper = styled.div`
  display:flex;
  justify-content: space-between;
`;

const LoginLink = styled.a`
  margin-top: 5px;
  cursor:pointer;
  text-decoration: underline;

  &:hover{
    color:#520058;
  } 
`


const Registration = () => {
  return (
    <>
      <LoginContainer>
          <LoginForm>
              <LoginTitle>
                  S'inscrire sur LocaTrust
              </LoginTitle>
              <LoginInputContainer>
                <LoginInput type="text" name="firstname" id="firstname" placeholder="Prénom"/>
                <LoginInput type="text" name="lastname" id="lastname" placeholder="Nom"/>
                <LoginInput type="email" name="email" id="email" placeholder="Adresse e-mail"/>
                <LoginInput type="password" name="password" id="password" placeholder="Mot de passe"/>
                <LoginInput type="password" name="password" id="password" placeholder="Répétez votre mot de passe"/>
              </LoginInputContainer>
              <LoginButton type="submit" method="POST" >S'inscrire</LoginButton>
              <LoginLinkWrapper>
                <LoginLink href="/login">Déjà inscrit ? Connectez-vous</LoginLink>
              </LoginLinkWrapper>
          </LoginForm>
      </LoginContainer>
    </>
  )
}

export default Registration
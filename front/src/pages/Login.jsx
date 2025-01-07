import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

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


const Login = () => {
  return (
    <>
      <LoginContainer>
          <LoginForm>
              <LoginTitle>
                  Bienvenue sur LocaTrust
              </LoginTitle>
              <LoginInputContainer>
                <LoginInput type="email" name="email" id="email" placeholder="Adresse e-mail"/>
                <LoginInput type="password" name="password" id="password" placeholder="Mot de passe"/>
              </LoginInputContainer>
              <Button label="Connexion" style="filled"/>
              <LoginLinkWrapper>
                <LoginLink>Mot de passe oublié ?</LoginLink>
                <LoginLink href='/registration'>Créer un compte</LoginLink>
              </LoginLinkWrapper>
          </LoginForm>
      </LoginContainer>
    </>
  )
}

export default Login
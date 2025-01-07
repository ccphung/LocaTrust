import React from 'react';
import styled from 'styled-components';

export const FilledButton = styled.button`
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

export const EmptyButton = styled.button`
  display: block;
  padding: 1rem;
  margin: 0.25rem 0.25rem 0 0;
  border: 2px solid #520058;
  color:  #520058;
  font-size: 0.875rem;
  line-height: 1rem;
  font-weight: 500;
  width: ${(props) => props.width || "100%"};
  border-radius: 1.5rem;
  text-transform: uppercase;
  cursor: pointer;
  background: white;

    &:hover{
    background:#52005899;
    color:white;
    border: 2px solid white;
  } 
`;

const Button = ({ label, style }) => {
  return (
    style === "filled" ? 
        <FilledButton width>{label}</FilledButton> 
        : <EmptyButton width>{label}</EmptyButton>
  );
};

export default Button;

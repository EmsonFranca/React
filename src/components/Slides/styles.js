import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  background: ${ (props) => props.color };
  border: solid 4px #000;
  border-radius: 1rem;
  padding: 1rem;
  gap: .6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 80%;
 
`;

export const Image = styled.img`
  width: 200px;
  border-radius: 1rem ;
 
`;
export const Title = styled.h1 `
  color: #000;
  font-size: 1rem;
  border: solid 2px #000;
  border-radius: 1rem;
`;

export const Power = styled.h2 `
  color: #000;
`;
export const  TextAlt = styled.h1`
  color: #000000;
  font-family: 'Time New Roman', Times, serif;
  background: blue;
  text-align: center;
`
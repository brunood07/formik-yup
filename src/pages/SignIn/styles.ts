import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  color: #fff;
  align-items: flex-start;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  border-radius: 50%;
`;

export const Button = styled.button`
  margin-top: 10px;
  border-radius: 4px;
  background-color: red;
  color: white;
`;

export const ValidationMsg = styled.div`
  color: red;
`;
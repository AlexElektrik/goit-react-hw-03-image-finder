import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #4f74dc;
`;

export const InputText = styled.input`
  padding: 10px 20px;
  font-size: 28px;
  border-style: none;
  border-radius: 10px 0 0 10px;
  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  padding: 0 15px;
  font-size: 16px;
  border-style: none;
  border-radius: 0 10px 10px 0;
  background-color: #fff;
  cursor: pointer;
`;

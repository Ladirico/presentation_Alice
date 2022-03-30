import styled from "styled-components";
interface Wewe {
  htmlFor?: string;
  color: string;
}

export const FormWrapper = styled.div`
  width: 95%;
  height: 95%;
  background: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SingleInputStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const LabelStyled = styled.label<Wewe>`
  font-weight: 500;
  margin-bottom: 3%;
  color: ${(props) => props.color};
`;

export const InputStyled = styled.input`
  width: 100%;
  &:focus-visible {
    border-color: orange;
  }
`;

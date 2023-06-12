import { styled } from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
      font-size: 1rem;
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
    }
  }
`

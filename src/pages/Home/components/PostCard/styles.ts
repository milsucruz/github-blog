import { styled } from 'styled-components'

export const PostCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  max-height: 16.25rem;

  border: 3px solid transparent;

  cursor: pointer;

  color: ${(props) => props.theme['base-text']};

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h2 {
      max-width: 15rem;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    overflow: hidden;
  }

  &:hover {
    border: 3px solid ${(props) => props.theme['base-border']};
    transition: border 0.2s;
  }
`

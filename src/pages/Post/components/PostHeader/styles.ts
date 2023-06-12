import { styled } from 'styled-components'

export const PostHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.25rem;
  padding: 2rem;
  margin-top: -6.5rem;

  width: 100%;

  background: ${(props) => props.theme['base-profile']};

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  header {
    display: flex;
    justify-content: space-between;

    font-size: 0.75rem;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    text-decoration: none;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
    }

    a:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    color: ${(props) => props.theme['base-title']};
  }

  ul {
    display: flex;
    gap: 1.5rem;
    margin-top: auto;

    list-style: none;

    color: ${(props) => props.theme['base-subtitle']};

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    svg {
      opacity: 0.4;
      font-size: 1.125rem;
    }
  }
`

import styled from 'styled-components'

export const PostContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 10rem;

  img {
    width: 100%;
    margin: 1rem 0 1rem;
  }

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.blue};
    margin: 1rem 0 1rem;
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  pre {
    background: ${(props) => props.theme['base-post']};
    padding: 1rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        line-height: 160% !important;
      }
    }
  }
`

import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;

  margin-bottom: 10rem;
`

export const PostsCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const PostsCardsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`

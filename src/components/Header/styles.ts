import { styled } from 'styled-components'
import banner from '../../assets/banner.png'

export const HeaderContainer = styled.div`
  background: url(${banner}) no-repeat;
  background-size: cover;
  height: 18.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 5rem;
  }
`

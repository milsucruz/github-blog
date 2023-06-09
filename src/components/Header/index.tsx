import { HeaderContainer } from './styles'

import logo from '../../assets/githubLogo.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="GitHub Blog logo" />
    </HeaderContainer>
  )
}

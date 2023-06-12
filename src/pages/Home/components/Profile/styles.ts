import { styled } from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;

  gap: 2rem;
  padding: 2rem 2rem 2rem 2.5rem;
  margin-top: -6.5rem;

  background: ${(props) => props.theme['base-profile']};

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  img {
    width: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme['base-title']};

  a {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    line-height: normal;
    gap: 0.5rem;
    text-transform: uppercase;

    color: ${(props) => props.theme.blue};

    /* border-top: 1px solid transparent; */
    border-bottom: 1px solid transparent;
  }

  a:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`

export const ProfileIcons = styled.ul`
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
    color: ${(props) => props.theme['base-label']};
    font-size: 1.125rem;
  }
`

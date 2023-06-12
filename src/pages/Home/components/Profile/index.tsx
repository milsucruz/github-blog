import { useCallback, useEffect, useState } from 'react'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import {
  ProfileContainer,
  ProfileDetails,
  ProfileHeader,
  ProfileIcons,
} from './styles'
import { api } from '../../../../lib/axios'
import { Spinner } from '../../../../components/Spinner'

interface IProfile {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: number
}

const username = import.meta.env.VITE_GITHUB_USERNAME

export function Profile() {
  const [profileData, setProfileData] = useState<IProfile>({} as IProfile)
  const [isLoading, setIsLoading] = useState(true)

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/${username}`)
      setProfileData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getProfileData()
  }, [getProfileData])

  return (
    <ProfileContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <img src={profileData.avatar_url} alt="Foto do Edmilson Cruz" />

          <ProfileDetails>
            <ProfileHeader>
              <h2>{profileData.name}</h2>
              <a href={profileData.html_url} target="_blank" rel="noreferrer">
                github
                <FontAwesomeIcon icon={faUpRightFromSquare} fontSize={12} />
              </a>
            </ProfileHeader>
            <p>{profileData.bio}</p>

            <ProfileIcons>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {profileData.login}
              </li>
              {profileData?.company && (
                <li>
                  <FontAwesomeIcon icon={faBuilding} />
                  {profileData.company}
                </li>
              )}
              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                {profileData.followers} seguidores
              </li>
            </ProfileIcons>
          </ProfileDetails>
        </>
      )}
    </ProfileContainer>
  )
}

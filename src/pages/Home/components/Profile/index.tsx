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

export function Profile() {
  return (
    <ProfileContainer>
      <img src="http://github.com/milsucruz.png" alt="Foto do Edmilson Cruz" />

      <ProfileDetails>
        <ProfileHeader>
          <h2>Edmilson Cruz</h2>
          <a
            href="http://github.com/milsucruz"
            target="_blank"
            rel="noreferrer"
          >
            github
            <FontAwesomeIcon icon={faUpRightFromSquare} fontSize={12} />
          </a>
        </ProfileHeader>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi qui
          amet impedit corporis? Ut nobis atque commodi provident libero iure
          explicabo. Vitae sit, dolor corrupti quos illum nam doloremque totam?
        </p>

        <ProfileIcons>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            milsucruz
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </li>
        </ProfileIcons>
      </ProfileDetails>
    </ProfileContainer>
  )
}

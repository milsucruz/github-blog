import { PostHeaderContainer } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <header>
        <a href="/">
          <FontAwesomeIcon icon={faChevronLeft} fontSize={12} />
          Voltar
        </a>
        <a href="https://github.com/milsucruz" target="_blank" rel="noreferrer">
          Ver no GitHub
          <FontAwesomeIcon icon={faUpRightFromSquare} fontSize={12} />
        </a>
      </header>

      <div>
        <h2>JavaScript data types and data structures</h2>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            milsucruz
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </li>
        </ul>
      </div>
    </PostHeaderContainer>
  )
}

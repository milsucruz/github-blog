import { PostHeaderContainer } from './styles'
import { dateFormatter } from '../../../../utils/formatter'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { IPost } from '../../../Home'
import { Spinner } from '../../../../components/Spinner'

interface PostHeaderProps {
  postData: IPost
  isLoading: boolean
}

export function PostHeader({ isLoading, postData }: PostHeaderProps) {
  const date = dateFormatter(postData.created_at)

  return (
    <PostHeaderContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <a href="/">
              <FontAwesomeIcon icon={faChevronLeft} fontSize={12} />
              Voltar
            </a>
            <a href={postData.html_url} target="_blank" rel="noreferrer">
              Ver no GitHub
              <FontAwesomeIcon icon={faUpRightFromSquare} fontSize={12} />
            </a>
          </header>

          <div>
            <h2>{postData.title}</h2>

            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {postData.user.login}
              </li>
              <li>
                <FontAwesomeIcon icon={faCalendarDay} />
                {date}
              </li>
              <li>
                <FontAwesomeIcon icon={faComment} /> {postData.comments}
              </li>
            </ul>
          </div>
        </>
      )}
    </PostHeaderContainer>
  )
}

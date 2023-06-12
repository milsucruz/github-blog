import { NavLink } from 'react-router-dom'
import { PostCardContent } from './styles'
import { IPost } from '../..'
import { dateFormatter } from '../../../../utils/formatter'

interface PostProps {
  post: IPost
}

export function PostCard({ post }: PostProps) {
  const date = dateFormatter(post.created_at)

  return (
    <NavLink to={`/post/${post.number}`}>
      <PostCardContent>
        <div>
          <h2>{post.title}</h2>
          <span>{date}</span>
        </div>

        <p>{post.body}</p>
      </PostCardContent>
    </NavLink>
  )
}

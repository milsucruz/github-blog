import { useCallback, useEffect, useState } from 'react'
import { PostHeader } from './components/PostHeader'
import { IPost } from '../Home'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`,
      )

      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getPostDetails()
  }, [getPostDetails])

  return (
    <div>
      <PostHeader isLoading={isLoading} postData={postData} />
    </div>
  )
}

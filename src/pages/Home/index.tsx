import { useCallback, useEffect, useState } from 'react'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, PostsCardsContainer, PostsCardsList } from './styles'
import { api } from '../../lib/axios'
import { Spinner } from '../../components/Spinner'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export interface IPost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(async (query: string = '') => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repoName}`,
      )
      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <HomeContainer>
      <Profile />
      <PostsCardsContainer>
        <SearchForm postsLength={posts.length} getPosts={getPosts} />
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <PostsCardsList>
              {posts.map((post) => (
                <PostCard key={post.number} post={post} />
              ))}
            </PostsCardsList>
          </>
        )}
      </PostsCardsContainer>
    </HomeContainer>
  )
}

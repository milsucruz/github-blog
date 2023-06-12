import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, PostsCardsContainer, PostsCardsList } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <PostsCardsContainer>
        <SearchForm />
        <PostsCardsList>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostsCardsList>
      </PostsCardsContainer>
    </HomeContainer>
  )
}

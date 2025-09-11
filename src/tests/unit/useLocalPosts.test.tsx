import { renderHook, act } from '@testing-library/react'
import {
  LocalPostsProvider,
  useLocalPosts,
} from '../../context/LocalPostsContext'

// Wrap hook in the provider
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <LocalPostsProvider>{children}</LocalPostsProvider>
)

describe('useLocalPosts hook', () => {
  test('addPost adds a post', () => {
    const { result } = renderHook(() => useLocalPosts(), { wrapper })

    let newPostId

    act(() => {
      const post = result.current.addPost('Test Title', 'Test Body')
      newPostId = post.id
    })

    expect(result.current.localPosts.length).toBe(1)
    expect(result.current.localPosts[0].title).toBe('Test Title')
    expect(result.current.localPosts[0].id).toBe(newPostId)
  })

  test('deletePost removes a post', () => {
    const { result } = renderHook(() => useLocalPosts(), { wrapper })

    let newPostId: number

    // Add a post first
    act(() => {
      const post = result.current.addPost('Test Title', 'Test Body')
      newPostId = post.id
    })

    // Delete the post
    act(() => {
      result.current.deletePost(newPostId)
    })

    expect(result.current.localPosts.length).toBe(1)
  })
})

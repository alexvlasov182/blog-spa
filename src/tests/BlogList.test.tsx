import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

import { BlogList } from '../pages/BlogList'
import * as api from '../services/api'

jest.mock('../services/api')

const mockPosts = [
  { id: 1, title: 'Test Post 1', excerpt: 'Excerpt 1', content: 'Content 1' },
  { id: 2, title: 'Test Post 2', excerpt: 'Excerpt 2', content: 'Content 2' },
]

describe('BlogList', () => {
  beforeEach(() => {
    ;(api.fetchPosts as jest.Mock).mockResolvedValue(mockPosts)
  })

  test('renders list of posts', async () => {
    render(
      <BrowserRouter>
        <BlogList />
      </BrowserRouter>
    )
  })
})

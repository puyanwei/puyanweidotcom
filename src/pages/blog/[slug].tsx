import { Component } from '@/types'

function BlogPost({ testId = `blog-post` }: Component) {
  return (
    <div
      data-testid={testId}
      className='grid h-screen text-gray-700 place-content-center'
    >
      THIS IS A BLOG POST
    </div>
  )
}

export default BlogPost

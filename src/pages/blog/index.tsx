import { Component } from '@/types'

function Blog({ testId = `blog-root-page` }: Component) {
  return (
    <div
      testdata-id={testId}
      className='grid h-screen text-gray-700 place-content-center'
    >
      THIS IS THE ROOT BLOG
    </div>
  )
}

export default Blog

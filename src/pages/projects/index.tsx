import { Component } from '@/types'

function Projects({ testId = `blog-root-page` }: Component) {
  return (
    <div
      testdata-id={testId}
      className='grid h-screen text-gray-700 place-content-center'
    >
      THIS IS THE PROJECT ROOT WHICH LINKS TO ALL THE PROJECTS
    </div>
  )
}

export default Projects

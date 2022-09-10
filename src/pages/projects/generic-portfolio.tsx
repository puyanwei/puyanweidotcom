import { Component } from '@/types'

function GenericPortfolioPage({
  testId = `project-generic-portfolio`,
}: Component) {
  return (
    <div
      data-testid={testId}
      className='grid h-screen text-gray-700 place-content-center'
    >
      <p>
        I made a joke portfolio webpage to create a template and have a fully
        tested and Storybook documented component library
      </p>
    </div>
  )
}

export default GenericPortfolioPage

import { Component } from '@/types'

function QuickScriptsPage({ testId = `project-quick-scripts` }: Component) {
  return (
    <div
      data-testid={testId}
      className='grid h-screen text-gray-700 place-content-center'
    >
      I made a vs code extension to help me run package.json scripts quicker
    </div>
  )
}

export default QuickScriptsPage

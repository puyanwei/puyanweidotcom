import { Component } from '@/types'

function SpinlyzerPage({ testId = `project-spinlyzer` }: Component) {
  return (
    <div
      data-testid={testId}
      className='grid h-screen text-gray-700 place-content-center'
    >
      <p>
        I am in the process of making a website which analyzes results from
        playing online poker.
      </p>

      <p>
        I was also interested in using the T3 stack, which has typesafe
        definitions where the backend can pass on its types to the front end
      </p>
    </div>
  )
}

export default SpinlyzerPage

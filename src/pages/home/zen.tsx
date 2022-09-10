import { Component } from '@/types'

function ZenPage({ testId = `home-zen-page` }: Component) {
  return (
    <div
      testdata-id={testId}
      className='grid h-screen text-gray-700 place-content-center'
    >
      THIS IS ZEN
    </div>
  )
}

export default ZenPage

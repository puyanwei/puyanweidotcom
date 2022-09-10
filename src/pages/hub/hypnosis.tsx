import { Component } from '@/types'

function HypnosisPage({ testId = `hub-hypnosis-page` }: Component) {
  return (
    <div
      testdata-id={testId}
      className='grid h-screen overflow-hidden text-center text-gray-700 place-content-center animate-pulse'
    >
      <p>Look into my eyes.</p>
      <p>You are feeling very sleepy...</p>
    </div>
  )
}

export default HypnosisPage

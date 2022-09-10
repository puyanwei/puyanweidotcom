import { Component } from '@/types'

function AboutMePage({ testId = `about-me-root` }: Component) {
  return (
    <div className='grid h-screen text-gray-700 place-content-center'>
      Hi! I'm Puyan Wei
      <br />
      Contact me via puyanwei@gmail.com
    </div>
  )
}

export default AboutMePage

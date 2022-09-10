import { Component } from '@/types'

function HubRootPage({ testId = `hub-root-page` }: Component) {
  return (
    <div className='grid h-screen text-gray-700 place-content-center'>
      THIS IS THE HUB. THIS IS MY AREA FOR EXPERIMENTATION
    </div>
  )
}

export default HubRootPage

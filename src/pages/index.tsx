import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='grid h-screen text-white bg-teal-800 place-content-center'>
      <h1 className='pb-8'>
        This page will randomly choose a home page and forward you to it
      </h1>

      <ul className='flex flex-col text-center'>
        <li className='flex flex-col p-4'>
          <Link href='/'>
            <span className='underline cursor-pointer'>Home</span>
          </Link>
          <Link href='/home/zen'>Zen</Link>
        </li>
        <li className='flex flex-col p-4'>
          <Link href='/about'>
            <span className='underline cursor-pointer'>About</span>
          </Link>
          <Link href='/about/cv-quick'>CV Quick</Link>
          <Link href='/about/cv-detailed'>CV</Link>
        </li>
        <Link href='/blog'>
          <span className='underline cursor-pointer'>Blog</span>
        </Link>
        <li className='flex flex-col p-4'>
          <Link href='/hub'>
            <span className='underline cursor-pointer'>The Hub</span>
          </Link>
          <Link href='/hub/hypnosis'>Hypnosis</Link>
        </li>
        <li className='flex flex-col p-4'>
          <Link href='/projects'>
            <span className='underline cursor-pointer'>Projects</span>
          </Link>
          <Link href='/projects/quick-scripts'>Quick Scripts</Link>
          <Link href='/projects/generic-portfolio'>Generic Portfolio</Link>
          <Link href='/projects/spinlyzer'>Spinlyzer</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home

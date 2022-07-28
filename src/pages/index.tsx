import type { NextPage } from 'next'

import { HeroHome } from '@/views'

const Home: NextPage = () => {
  return (
    <>
      <HeroHome />
      <div className='h-[100vh]'></div>
    </>
  )
}

export default Home

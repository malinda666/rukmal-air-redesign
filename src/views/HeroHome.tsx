import { FC } from 'react'

import { Title } from '@/components'

const HeroHome: FC = () => {
  return (
    <div className='relative w-full h-screen flex items-center justify-center'>
      {/* <div className=''>image grid</div> */}
      <div className=''>
        <Title content='title' />
      </div>
    </div>
  )
}

export default HeroHome

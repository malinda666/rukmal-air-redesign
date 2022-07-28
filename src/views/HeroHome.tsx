import { FC } from 'react'

import { Title } from '@/components'

// import HomeVideo from '/public/assets/bg-video.mp4'

const HeroHome: FC = () => {
  return (
    <div className='relative w-full h-screen flex items-center justify-center overflow-hidden'>
      {/* <div className=''>image grid</div> */}
      <div className='absolute w-auto pr-0 lg:pr-8 z-10 transform bottom-[5vh]'>
        <video autoPlay loop muted className='w-auto h-[60vh]'>
          <source src='/assets/bg-video.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='absolute top-0 mt-16 flex flex-col items-center'>
        <Title content='rukmal' wrapperCls='z-0' />
        <Title content='air tours' delay={0.3} wrapperCls='z-50' />
      </div>
      <div className='absolute left-0 top-1/4 w-1/5 pl-8 hidden'>
        <p className='relative w-full text-third'>
          Feel the wind in your hair and the sun on your face as you experience
          the thrill of flying in a helicopter. <br /> A once-in-a-lifetime
          opportunity to experience the breathtaking beauty of Sri Lanka.
        </p>
      </div>
      <div className='absolute right-0 top-3/4 w-auto mr-24'>
        <svg
          width='22'
          height='90'
          viewBox='0 0 22 90'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          opacity='1'
          className='text-third'
        >
          <path d='M11 0L11 88' stroke='currentColor' strokeWidth='1.5'></path>
          <path
            d='M1 78L11 88L21 78'
            stroke='currentColor'
            strokeWidth='1.5'
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default HeroHome

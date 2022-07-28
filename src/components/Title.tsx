import { FC } from 'react'

interface TitleProps {
  content: string
}

const Title: FC<TitleProps> = ({ content }) => {
  return (
    <div className='text-[16vw] font-title'>
      <span>{content}</span>
    </div>
  )
}

export default Title

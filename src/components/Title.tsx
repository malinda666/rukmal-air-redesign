import { FC, MutableRefObject, useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface TitleProps {
  content: string
  delay?: number
  wrapperCls?: string
}

const Title: FC<TitleProps> = ({ content, delay, wrapperCls }) => {
  const titleRef = useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const charArray = gsap.utils.toArray(
      titleRef.current.querySelectorAll('span')
    )
    gsap.fromTo(
      charArray,
      {
        y: '80%',
        opacity: 0,
      },
      {
        y: '0%',
        opacity: 1,
        ease: 'power4.out',
        duration: 1.25,
        stagger: { amount: 0.25, from: 'start' },
        delay: delay ?? 0,
      }
    )
  }, [])

  return (
    <div
      className={[
        'text-[15vw] font-title text-light leading-none overflow-hidden mix-blend-hard-light uppercase',
        wrapperCls,
      ].join(' ')}
      ref={titleRef}
    >
      {content.split('').map((char, i) => (
        <span
          className='inline-block whitespace-pre'
          key={`${i.toString()}char`}
        >
          {char}
        </span>
      ))}
    </div>
  )
}

export default Title

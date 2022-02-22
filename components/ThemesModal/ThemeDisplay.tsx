import { SingleThemeType } from "@/types/ThemeTypes"
import { prefixStyles } from '@/helpers/styles'

type PropsType = {
  base: string,
  primary: string,
  secondary: string,
  text: string
}

export default function ThemeDisplay(props: SingleThemeType) {
  return (
    <span
      style={{
        '--theme-base': props.base,
        '--theme-primary': props.primary,
        '--theme-secondary': props.secondary,
        '--theme-text': props.text
      } as any}
      className={prefixStyles('w-20 inline-flex flex-col h-36 bg-green-50 rounded-lg shadow-md', {
        'md': 'w-56',
        'lg': 'w-72'
      })}
    >
      {/* Header */}
      <div className='flex w-full h-4 px-1.5 bg-green-200 rounded-t-lg items-center'>
        {/* Icon */}
        <span className='inline-block w-3 md:w-7 h-2 mr-3 bg-green-400 rounded-sm' />

        {/* Navbar */}
        <span className='hidden lg:inline-block w-6 h-1 mr-2 bg-green-900 rounded-full' />
        <span className='hidden lg:inline-block w-6 h-1 mr-2 bg-green-900 rounded-full' />
        <span className='hidden lg:inline-block w-6 h-1 mr-2 bg-green-900 rounded-full' />
        <span className='hidden lg:inline-block w-6 h-1 mr-2 bg-green-900 rounded-full' />
      </div>

      {/* Wrapper */}
      <span className='px-2 md:px-12 lg:px-8 py-2 self-center w-full'>
        
        {/* Section 1 */}
        <div className='flex flex-col lg:flex-row w-full justify-between mb-3'>
          {/* Small Title */}
          <div className='block lg:hidden w-16 h-1.5 bg-green-400 rounded-full mb-0.5' />
          {/* Description */}
          <div className='block lg:hidden w-10 h-0.5 bg-pink-600 rounded-full mb-1' />

          {/* Image */}
          <span className='mr-2 mb-2 lg:mb-0 inline-block w-full lg:w-1/2 h-12 bg-gray-200 rounded-sm' />

          {/* Text Wrapper */}
          <span className='w-full lg:w-1/2'>
            {/* Title */}
            <div className='hidden lg:block w-16 h-1.5 bg-green-400 rounded-full mb-0.5' />
            {/* Description */}
            <div className='hidden lg:block w-10 h-0.5 bg-pink-600 rounded-full mb-1' />

            {/* Text */}
            <div className='w-full h-1 bg-green-900 rounded-full mb-0.5' />
            <div className='w-11/12 h-1 bg-green-900 rounded-full mb-0.5' />
            <div className='w-full h-1 bg-green-900 rounded-full mb-0.5' />
            <div className='w-10/12 h-1 bg-green-900 rounded-full mb-0.5' />
            <div className='w-1/2 h-1 bg-green-900 rounded-full mb-0.5' />
          </span>
        </div>

        {/* Section 2 */}
        <div className='hidden lg:flex w-full justify-between flex-row-reverse'>
          {/* Small Title */}
          <div className='block lg:hidden w-16 h-1.5 bg-green-400 rounded-full mb-0.5' />
          {/* Description */}
          <div className='block lg:hidden w-10 h-0.5 bg-pink-600 rounded-full mb-1' />

          {/* Image */}
          <span className='ml-2 mb-1 md:mb-0 inline-block w-full lg:w-1/2 h-12 bg-gray-200 rounded-sm' />

          {/* Text Wrapper */}
          <span className='w-full lg:w-1/2'>
            {/* Title */}
            <div className='hidden lg:block w-16 h-1.5 bg-green-400 rounded-full mb-0.5' />
            {/* Description */}
            <div className='hidden lg:block w-10 h-0.5 bg-pink-600 rounded-full mb-1' />

            {/* Text */}
            <div className='w-full h-1 bg-green-900 rounded-full mb-0.5' />
            <div className='w-11/12 h-1 bg-green-900 rounded-full mb-0.5' />
            <div className='w-full h-1 bg-green-900 rounded-full mb-0.5' />
            <div className='w-10/12 h-1 bg-green-900 rounded-full mb-0.5' />
            <div className='w-1/2 h-1 bg-green-900 rounded-full mb-0.5' />
          </span>
        </div>
      </span>
    </span>
  )
}

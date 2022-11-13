import Image from 'next/image'
import React from 'react'
import {PhoneIcon} from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <header className='w-full h-24 flex items-center bg-gradient-to-t from-[#464341] to-[#010101] text-[#FFFFFF] px-5 sm:px-1'>
        <div className=' w-[1133px] flex justify-between items-center mx-auto'>
             <div className='flex flex-row gap-2'>
                <Image className='h-[20px] w-[20px] sm:h-[36px] sm:w-36[px]' src={'/logo.png'} height={36} width={36} alt='logo'/>
                <Image className='h-[18px] w-[95px] sm:h-[32px] sm:w-[170px]' src={'/logo2.png'} height={32} width={170} alt='logo'/>
             </div>
             <div>
                <h4 className='hidden sm:inline-block sm:text-2xl'>+7(495) 495-49-54</h4>
                <PhoneIcon className='sm:hidden text-[#FFFFFF] w-[14.65px] h-[19.2px]'/>
             </div>
        </div>
    </header>
  )
}

export default Header


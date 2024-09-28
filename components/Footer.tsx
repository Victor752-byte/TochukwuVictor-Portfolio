import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] md:mb-5 pb-8 md:pb-12' id='contact'>
        <div className='w-full absolute left-0 bottom-0'>
            <img
            src='/footer-grid.svg'
            alt='grif'
            className='w-full h-full opacity-50'
            />
        </div>

        <div className='flex flex-col items-center'>
            <h1 className='heading lg;max-w-[45vw]'>
                Ready to take {' '} <span className='text-purple'>your</span>
                {' '}digital presence to the next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how i can help you achieve your golas.</p>
            <a href='mailto:tochukwuvictor563@gmail.com'>
                <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow/>}
                position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center gap-4'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Tochukwu Victor</p>

            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <Link 
                    href={profile.route}
                    key={profile.id}
                    className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
                    >
                        <img
                        src={profile.img}
                        alt={profile.id}
                        width={20}
                        height={20}
                        />
                    </Link>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { companies, testimonials } from '@/data'
import Image from 'next/image'

const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
    <h1 className='heading'>
      Kind words from {' '}
      <span className='text-purple'>satisfied clients</span>
    </h1>

    {/* project box */}
    <div className='flex flex-col items-center max-lg:mt-10'>
        
        <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='slow'
        />
       
       <div className='flex flex-wrap items-center justify-center gap-5 md:gap-16 max-lg:mt-10 mt-10'>
        {companies.map(({id, img, name, nameImg}) =>(
            <div key={id}
            className='flex md:max-w-60 max-w-32 gap-2'
            >
              { id == 5 ? (
                <Image
                src={img}
                width={180}
                height={180}
                alt='logo'
                />
              ) : (
                <img
                src={img}
                alt={name}
                className='md:w-12 w-5'
                />
              )}
                
                {nameImg ? (
                  <img
                  src={nameImg}
                  alt={name}
                  className='md:w-12 w-20'
                  />
                ) : (
                  <div className='my-auto'>{name}</div>
                )}
                
            </div>
        ))}
       </div>

    </div>
    </div>
  )
}

export default Clients

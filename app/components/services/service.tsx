import React from 'react'
import { servicesType } from '~/types/types'
import Image from '../../../public/images/dry-cleaning.png'

type serviceProps = {
  service: servicesType
}

const Service : React.FC<serviceProps> = ({service}) => {
  return (
    <a href={`/pricing/${service.name}`} className='w-full md:w-80 p-3 h-24 gap-2 rounded-md flex flex-row items-center bg-white hover:drop-shadow-lg transition-all duration-500 ease-in-out'>
      <section className='flex justify-center opacity-100 items-center overflow-hidden h-[50px] w-[50px]'>
          <img className=' h-full w-full' src={Image} />
      </section>
      <section className='flex flex-col gap-[3px] opacity-100'>
        <p>{service.name}</p>
        <p>{service.short_desc}</p>
      </section>
    </a>
  )
}

export default Service
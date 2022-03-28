import React from 'react'
import { useLoaderData } from 'remix'
import { servicesType } from '~/types/types'
import Category from './category'

const Service = () => {

  const {service} = useLoaderData<{service: servicesType}>()

  return (
    <div className='flex flex-col flex-1 w-auto h-auto gap-2'>
        <h2 className='font-heading text-[32px] font-semibold'>{service.name}</h2>
        <p className='font-text text-[16px]'>{service.detailed_desc}</p>
        <section className='flex flex-col gap-8 mt-5'>
            {service.categories.map((category) => {
                return <Category key={category.id} category={category} />
            })}
        </section>
    </div>
  )
}

export default Service
import React from 'react'
import { servicesType } from '~/types/types'
import Service from './service'

type containerProps = {
    services: servicesType[]
}

const Container : React.FC<containerProps> = ({services}) => {
  return (
    <section className='flex flex-col gap-5'>
        {services.map((service)  => {
            return <Service key={service.id} service={service} />
        })}
    </section>
  )
}

export default Container
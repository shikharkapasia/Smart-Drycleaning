import React from 'react'
import { useLoaderData } from 'remix'
import useInView from '~/hooks/useInView'
import { indexPageDataType } from '~/types/types'
import Testimonial from '../Testimonials/testimonial'

const TestimonialsList = () => {

  const {testimonials} = useLoaderData<indexPageDataType>()

  const parentRef = React.useRef<HTMLDivElement>(null)
  
  const {ref,inView} = useInView({threshold: 0.5})

  return (
    <div ref={ref} className='flex flex-col w-[80%] my-[50px]'>
       <h1 className={`transition duration-500 delay-100 text-center font-heading font-bold text-[48px] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'} `}>{testimonials.heading}</h1>
       <p className={`transition duration-500 delay-300 text-center mt-3 font-text text-[16px] ${inView ? 'opacity-100' : 'opacity-0'}`}>{testimonials.sub_heading}</p>
       <section ref={parentRef} className='flex flex-col items-center max-h-[100vh] sm:flex-row py-[50px] h-auto gap-10 overflow-x-scroll no-scrollbar'>
       {testimonials.data.map((testimonial) => {
         return  <Testimonial options={{threshold: 0.25,root: parentRef?.current}} key={Math.random()*100} testimonial={testimonial} />
       })}
       </section>
    </div>
  )
}

export default TestimonialsList
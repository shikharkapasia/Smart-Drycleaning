import React from "react"
import { IntersectionOptions } from "react-intersection-observer"
import useInView from "~/hooks/useInView"
import { testimonialsType } from "~/types/types"

type testimonialsProps = {
    testimonial: testimonialsType,
    options: IntersectionOptions
}

const Testimonial : React.FC<testimonialsProps> = ({testimonial,options}) => {

  const {ref,inView} = useInView(options)

  return (
    <div ref={ref} className={`hover:shadow-lg hover:translate-y-3 transition duration-500 delay-100 min-w-[250px] w-[250px] min-h-[250px] h-[250px] bg-white rounded-lg flex flex-col items-center justify-center p-4 ${inView ? ' opacity-100 scale-100' : 'opacity-0 scale-0'} `}>
           <p className='text-[14px] font-text font-semibold mb-3 min-h-[100px] h-[100px]'>"{testimonial.review}"</p>
           <p className="text-[16px] font-text font-extrabold">{testimonial.name}</p>
           <p className='text-text-gray text-[14px] font-normal'>{testimonial.source}</p>
           <a href={`/reviews/${testimonial.id}`}>Read Full Review</a>
    </div>
  )
}

export default Testimonial
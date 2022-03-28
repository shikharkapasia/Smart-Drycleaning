import React from 'react'
import { IntersectionOptions } from 'react-intersection-observer'
import useInView from '~/hooks/useInView'
import { featuresType } from '~/types/types'

type featureProps = {
  feature: featuresType
  options: IntersectionOptions
}

const Feature : React.FC<featureProps> = ({feature,options}) => {

  const {ref,inView} = useInView(options)

  return ( <div ref={ref} className={`transition duration-500 even:delay-100 odd:delay-300 flex flex-col-reverse sm:flex-row sm:even:flex-row-reverse ${inView ? ' opacity-100 scale-100' : 'opacity-0 scale-0'} `}>
          <section className={`flex flex-col flex-1 items-start justify-center gap-3`}>
            <p className=" text-text-gray text-[14px] font-bold">
            FAST CUSTOMER SUPPORT
            </p>
            <h1 className="text-[32px] font-heading leading-[44px] font-semibold">
              {feature.title}
            </h1>
            <p className="text-[16px] font-text font-normal leading-6">
              {feature.desc}
            </p>
            <button className=" transition duration-300 delay-100 hover:bg-hover-black bg-black rounded-md font-text px-3 py-2 text-white mt-2">
              Contact Us
            </button>
          </section>
          <section className="flex-1 flex justify-center items-center">
            <p>Image Here</p>
          </section>
        </div>
  ) 
}

export default Feature
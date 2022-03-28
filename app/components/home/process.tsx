import React from 'react'
import { useLoaderData } from 'remix'
import useInView from '~/hooks/useInView'
import { indexPageDateType } from '~/types/types'
import Step from '../process/step'

const Process : React.FC = () => {

    const {process} = useLoaderData<indexPageDateType>()

    const parentRef = React.useRef(null)

    const {ref,inView} = useInView({threshold: 0.25})
    

  return (
    <div className='relative min-h-[100vh] min-w-[100%] bg-inherit flex'>
       <section ref={ref} className={`w-[80%] min-h-[80vh] bg-white flex flex-col sm:flex-row m-auto p-10 gap-10 transition-opacity duration-500`} >
         <div className={`transition duration-500 delay-[100ms] flex-1 flex flex-col ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[100%]"}`}  >
             <section className='flex-1 flex justify-center items-center'>
                 <p>Image Here</p>
             </section>
             <section className='flex-1 flex flex-col gap-4'>
             <h1 className='font-heading text-[42px] font-bold'>{process.heading}</h1>
             <h1 className='font-text text-[14px] font-normal'>{process.sub_heading}</h1>
             </section>
         </div>
         <div ref={parentRef} className={`transition duration-500 delay-[200ms] flex-1 flex flex-col gap-10 ${inView ? "opacity-100" : "opacity-0"}`}>
            {process.data.map((step) => {
               return <Step step={step} key={step.id} options={{threshold: 0.5,root: parentRef?.current}} />
            })}
         </div>
       </section>
       <span className='absolute w-[75%] h-[80vh] m-auto left-0 right-0 bottom-0 top-0 bg-[#F2F2F2] z-[-1] translate-y-1 shadow-lg'></span>
    </div>
  )
}

export default Process 
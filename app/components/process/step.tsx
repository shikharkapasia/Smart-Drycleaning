import React from 'react';
import { IntersectionOptions } from 'react-intersection-observer';
import useInView from '~/hooks/useInView';
import { processStepDataType } from '~/types/types';

type StepProps = {
    step: processStepDataType,
    options: IntersectionOptions
}

const Step : React.FC<StepProps> = ({step,options}) => {

    const {ref,inView} = useInView(options)

  return (
    <section ref={ref} key={step.id} className={`hover:-translate-y-2 transition duration-500 delay-[${(step.id*100)+200}ms] flex-1 border-b-2 border-text-gray last:border-none ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`} >
        <h1 className='font-heading text-[32px] font-bold'>Step {step.id}</h1>
        <p className='font-text text-[14px] font-normal'>{step.data}</p>
    </section>
  )
}
export default Step
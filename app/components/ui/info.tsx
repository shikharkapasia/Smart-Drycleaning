import React from 'react'

type infoProps = {
    heading: string,
    subHeading: string
}

const Info : React.FC<infoProps> = ({heading,subHeading}) => {
  return (
    <section className='flex w-[80%] flex-col items-center'>
        <h1 className='font-heading text-[32px] text-black text-center font-bold'>{heading}</h1>
        <div className=' bg-blue h-[6px] w-10 rounded-sm'></div>
        <p className='mt-4 font-text text-[16px] text-text-gray text-center'>{subHeading}</p>
    </section>
  )
}

export default Info
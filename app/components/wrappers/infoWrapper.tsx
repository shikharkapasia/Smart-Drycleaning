import React from 'react'
import Info from '../ui/info'

type InfoWrapperProps = {
    heading: string,
    subHeading: string
}

const InfoWrapper : React.FC<InfoWrapperProps> = ({children,heading,subHeading}) => {
  return (
    <div className='flex flex-col items-center gap-[50px] py-[50px] mt-[50px] w-full'>
        <Info heading={heading} subHeading={subHeading} />
        {children}
    </div>
  )
}

export default InfoWrapper
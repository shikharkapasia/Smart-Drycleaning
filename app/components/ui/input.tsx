import React, { HTMLInputTypeAttribute } from 'react'

type inputProps = {
   type: string,
   label: HTMLInputTypeAttribute,
   name: string,
   placeholder: string
   [key: string]: string
}

const Input : React.FC<inputProps> = ({label,type,placeholder,name,...props}) => {
  return (
    <div className='flex flex-col gap-1'>
        <label className='font-text font-normal text-[14px]' htmlFor={name}>{label}</label>
        <input className=' placeholder:font-text placeholder:font-semibold placeholder:text-black h-10 text-[14px] p-1 px-2 rounded-md outline-none border-none' type={type} placeholder={placeholder} name={name} />
    </div>
  )
}

export default Input
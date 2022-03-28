import React from 'react'
import { storesType } from '~/types/types'
import {FaRegAddressBook, FaRegCalendarAlt} from 'react-icons/fa'
import {BiTime} from 'react-icons/bi'
import {FiPhoneCall} from 'react-icons/fi'

type storeProps = {
    store: storesType
}

const Store : React.FC<storeProps> = ({store}) => {
  return (
    <div className='flex flex-col bg-white p-5 gap-2 rounded-lg hover:shadow-lg transition-shadow duration-500'>
        <h1 className='font-heading font-semibold text-black text-[24px] mb-5'>{store.name}</h1>
        <section className='flex items-center gap-2 font-text text-[14px]'>
            <FaRegAddressBook />
            <p>{store.address}</p>
        </section>
        <section className='flex items-center gap-2 font-text text-[14px]'>
            <FaRegCalendarAlt />
            <p>{store.openOn}</p>
        </section>
        <section className='flex items-center gap-2 font-text text-[14px]'>
            <BiTime />
            <p>{store.timing}</p>
        </section>
        <section className='flex items-center gap-2 font-text text-[14px]'>
            <FiPhoneCall />
            <p>{store.phoneNumber}</p>
        </section>
        <section className='flex items-center gap-2 font-text text-[14px] mt-5'>
            <button className='h-10 w-32 p-2 bg-blue text-white rounded-md px-3'>Get Direction</button>
            <button className='h-10 w-32 p-2 bg-blue text-white rounded-md px-3' >Call</button>
        </section>
    </div>
  )
}

export default Store
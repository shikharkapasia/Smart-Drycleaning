import React from 'react'
import { useLoaderData } from 'remix'
import { storesType } from '~/types/types';
import Info from '../ui/info';
import Store from './store';

const Container = () => {

    const {stores} = useLoaderData<{stores: storesType[]}>();

  return (
    <div className='flex flex-col justify-center gap-5 items-center w-screen'>
        <section className='w-[80%] grid grid-rows-3 md:grid-rows-2 md:grid-cols-2 gap-10 py-5'>
            {stores.map((store) => {
                  return <Store key={store.id} store={store} />
            })}
        </section>
    </div>
  )
}

export default Container
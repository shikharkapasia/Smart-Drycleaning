import React from 'react'
import { categoryType, itemOperation } from '~/types/types'
import Item from './item'

type categoryProps = {
    category: categoryType
}

const Category : React.FC<categoryProps> = ({category}) => {
  return (
    <div className='flex flex-col gap-3'>
        <span className='font-text text-[18px] text-text-gray text-left font-semibold'>{category.name}</span>
        <section className='flex flex-col gap-2'>
            {category.items.map((item) => {
               return <Item key={item.id} item={item} operation={itemOperation.ADD} />
            })}
        </section>
    </div>
  )
}

export default Category
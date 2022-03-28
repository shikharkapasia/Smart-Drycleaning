import React from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { BiMinusCircle } from 'react-icons/bi'
import { itemOperation, itemType } from '~/types/types'
import { CartContext, CartContextType } from '../context/cartContext'

type itemProps = {
    item: itemType
    operation: itemOperation
    classes?: string
}

const Item : React.FC<itemProps> = ({item,operation = itemOperation.ADD,classes = ''}) => {

  const {add,remove} = React.useContext(CartContext) as CartContextType;

  return (
    <div className={`flex flex-row items-center gap-3 ` + classes}>
        <p className='flex-1 font-text text-[16px]'>{item.name}</p>
        <p className='font-text text-[16px]'>{item.price}</p>
        {operation === itemOperation.ADD && <BsPlusCircle color='#2C4EFF' onClick={add.bind(null,item)}  />}
        {operation === itemOperation.SUBTRACT && <BiMinusCircle color='#2C4EFF' onClick={remove.bind(null,item.id)}  />}
    </div>
  )
}

export default Item
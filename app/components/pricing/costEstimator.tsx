import React from "react";
import { CSSTransition } from "react-transition-group";
import { itemOperation } from "~/types/types";
import { CartContext, CartContextType } from "../context/cartContext";
import Item from "./item";

type costEstimatorProps = {
  open: boolean;
};

const CostEstimator: React.FC<costEstimatorProps> = ({ open }) => {

  const { cart } = React.useContext(CartContext) as CartContextType;

  return (
    <CSSTransition
      timeout={200}
      in={open}
      classNames={{
        enter: "h-0",
        enterActive: "h-auto transition duration-[200ms]",
        exit: "h-auto",
        exitActive: "h-0 transition duration-[200ms]",
      }}
      unmountOnExit
    >
      <div className="fixed flex flex-col gap-5 min-w-[calc(90%-98px)] p-5  bg-white bottom-10 right-24 h-0 animate-grow-vertical">
        <p className=' font-text text-blue text-[18px] font-semibold'>Cost Estimation</p>
        <section className="flex flex-col gap-2">
          {cart.items.map((cartItem) => {
            return <div className="flex gap-2 flex-row justify-between items-center"  key={cartItem.item.id} >
             <p>{cartItem.quantity}x </p>
             <Item item={cartItem.item} classes='flex-1' operation={itemOperation.SUBTRACT} />
             </div>
          })}
        </section>
        {cart.items.length === 0 && <section className="flex justify-center items-center py-5">{<p className="font-text text-[16px]">No item added yet.</p>}</section>}
        <section className="py-2 border-t-2 border-t-text-gray flex flex-row justify-between items-center">
          <p className="font-text text-[16px] font-semibold">Total Price</p>
          <p className="font-text text-[16px] font-bold">{cart.estimatedCost}</p>
        </section>
      </div>
    </CSSTransition>
  );
};

export default CostEstimator;

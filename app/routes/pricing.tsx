import React from "react";
import { BsBag } from "react-icons/bs";
import { LoaderFunction, Outlet, useLoaderData } from "remix";
import CostEstimator from "~/components/pricing/costEstimator";
import Container from "~/components/services/container";
import { servicesData } from "~/data/data";
import { servicesType } from "~/types/types";
import { CgClose } from "react-icons/cg";
import CartProvider, { CartContext, CartContextType } from "~/components/context/cartContext";
import Cart from "~/components/ui/cart";
import Info from "~/components/ui/info";
import InfoWrapper from "~/components/wrappers/infoWrapper";

export const loader: LoaderFunction = async (): Promise<servicesType[]> => {
  return servicesData;
};

const PricingPage = () => {

  const services = useLoaderData<servicesType[]>();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  return (
    <CartProvider>
      <InfoWrapper heading="Our Pricing" subHeading="Lorem ipsum dolor sit amet consectetur adipiscing elit">
        <div className="flex w-[80%] flex-col md:flex-row gap-10">
          <Container services={services} />
          <Outlet />
          <Cart open={open} handleOpen={handleOpen} />
          <CostEstimator open={open} />
        </div>
      </InfoWrapper>
    </CartProvider>
  );
};

export default PricingPage;

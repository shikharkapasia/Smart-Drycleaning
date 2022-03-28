import React from "react";
import { useInView } from "react-intersection-observer";
import { useLoaderData, useLocation } from "remix";
import { indexPageDateType } from "~/types/types";
import Feature from "../features/feature";

const FeaturesList = () => {

  const {features} = useLoaderData<indexPageDateType>()

  const parentRef = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={parentRef} className="flex flex-col w-[80%] min-h-[100vh] h-auto gap-40 my-20 overflow-hidden">
      {features.data.map((feature) => {
          return <Feature key={Math.random()*100} feature={feature} options={{threshold: 0.2,root: parentRef?.current}} />
      })}
    </div>
  );
};

export default FeaturesList;

import React from "react";
import { LoaderFunction, useLoaderData } from "remix";
import Service from "~/components/pricing/service";
import { servicesData } from "~/data/data";

export const loader: LoaderFunction = async ({ params }) => {
  const name = params.service;
  const service = servicesData.filter((service) => service.name === name);
  return {
    service: service[0],
  };
};

const SingleService = () => {
  return (
    <>
      <Service />
    </>
  );
};

export default SingleService;

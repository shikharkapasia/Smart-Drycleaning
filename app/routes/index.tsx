import React from "react";
import Features from "~/components/home/featuresList";
import LandingPage from "~/components/home/landingPage";
import Process from "~/components/home/process";
import ReviewsPage from "~/components/home/testimonialsList";
import { featuresData, processStepData, testimonialData } from "~/data/data";
import { indexPageDataType } from "~/types/types";

export async function loader() : Promise<indexPageDataType> {
     const data : indexPageDataType = {
       testimonials: {
         heading: "Testimonials",
         sub_heading: "People love what we do and we want to let your know",
         data: testimonialData
       },
       process: {
         heading: "How it's works",
         sub_heading: "Wow this project is so awesome! Let me tell you why right here, right now.",
         data: processStepData
       },
       features: {
         data: featuresData
       }
     }
     return data
}

export default function Index() {

  return (
    <div className="h-auto relative z-20 w-screen overflow-x-hidden flex flex-col items-center scroll-smooth">
      <LandingPage />
      <Features />
      <Process />
      <ReviewsPage />
    </div>
  );
}

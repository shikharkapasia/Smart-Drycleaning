import React from 'react'
import { LoaderFunction } from 'remix'
import Container from '~/components/stores/container'
import InfoWrapper from '~/components/wrappers/infoWrapper'
import { storesData } from '~/data/data'

export const loader : LoaderFunction = async () => {
    return {
        stores: storesData
    }
}

const Index : React.FC = () => {
  return (
    <InfoWrapper heading='Our Stores' subHeading='Lorem ipsum dolor sit amet consectetur adipiscing elit'>
      <Container />
    </InfoWrapper>
  )
}

export default Index
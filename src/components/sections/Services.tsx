import { services } from '@/constants'
import React from 'react'
import { ServiceCard } from '@/components/ui'


type Props = {}

const Services = (props: Props) => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
    {services.map((item) => (
      <ServiceCard 
        key={item.label} 
        label={item.label} 
        imgURL={item.imgURL}
        subtext={item.subtext}
      />
    ))}
  </section>
  )
}

export default Services
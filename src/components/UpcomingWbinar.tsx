import React from 'react'
import { UpcomingHeading } from './UpcomingHeading'
import { UpcomingCards } from './UpcomingCards'

const UpcomingWbinar = () => {
  return (
    <div>
      <UpcomingHeading />
      <div className='flex mt-12 item-center justify-center mb-12'>
        <UpcomingCards />
        {/* <UpcomingCards />
        <UpcomingCards /> */}
      </div>

    </div>
  )
}

export default UpcomingWbinar
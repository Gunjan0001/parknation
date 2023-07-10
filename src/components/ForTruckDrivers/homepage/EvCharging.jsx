import React from 'react'
import HeroSectionEVCharging from '../../../assests/images/webp/HeroSectionEVCharging.webp'

const EvCharging = () => {
  return (
    <div className='flex container justify-between items-center'>
        <div className='w-1/2'>
            <h4 className='text-4xl font-bold text-[#020202] mb-4'>EV charging facility</h4>
            <p className='text-base font-normal text-black opacity-[0.699999988079071] pr-32'>Nibh mauris dignissim sit imperdiet adipiscing feugiat in lectus. Pellentesque tortor nunc orci volutpat at adipiscing donec pellentesque. Fermentum tellus iaculis quisque et turpis purus.Nibh mauris dignissim sit imperdiet adipiscing feugiat in lectus. Pellentesque tortor nunc orci volutpat at adipiscing donec pellentesque. Fermentum tellus iaculis quisque et turpis purus.</p>
        </div>
        <div className='w-1/2'>
            <img src={HeroSectionEVCharging} alt=""  className='w-full max-w-[522px]'/>

        </div>
    </div>
  )
}

export default EvCharging
import React from 'react'
import HeroSectionEVCharging from '../../../assests/images/webp/HeroSectionEVCharging.webp'

const EvCharging = () => {
  return (
    <div className='lg:flex container lg:justify-between justify-center items-center lg:flex-row flex-col-reverse lg:pt-32 md:pt-24 sm:pt-20 pt-6 lg:pb-20 pb-10'>
        <div className='lg:w-1/2 w-full lg:mt-0 mt-7'>
            <h4 className='lg:text-4xl text-3xl font-bold text-[#020202] lg:mb-4 mb-3'>EV charging facility</h4>
            <p className='lg:text-base text-sm font-normal text-black opacity-[0.699999988079071] lg:pr-32'>Nibh mauris dignissim sit imperdiet adipiscing feugiat in lectus. Pellentesque tortor nunc orci volutpat at adipiscing donec pellentesque. Fermentum tellus iaculis quisque et turpis purus.Nibh mauris dignissim sit imperdiet adipiscing feugiat in lectus. Pellentesque tortor nunc orci volutpat at adipiscing donec pellentesque. Fermentum tellus iaculis quisque et turpis purus.</p>
        </div>
        <div className='lg:w-1/2 w-full'>
            <img src={HeroSectionEVCharging} alt="" className='w-full lg:max-w-[522px]'/>

        </div>
    </div>
  )
}

export default EvCharging
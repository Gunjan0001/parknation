import React from 'react'
import HeroSectionAboutUsMenWithTruck from '../../../assests/images/webp/HeroSectionAboutUSMenWithTruck.webp'


const HeroAboutUs = () => {
  return (
    <div className='container'>
       <div className='lg:flex items-center justify-between'>
       <div className='lg:w-2/5 md:full relative '>
          <img src={  HeroSectionAboutUsMenWithTruck} alt="" />
</div>
        <div className='lg:w-1/2 md:5/6 px-2'>
          <h4 className='text-4xl font-bold text-[#020202] mb-4'>About us</h4>
          <p className='text-base font-normal text-black opacity-[0.699999988079071] mb-5'>ParkNation are a team of industry experts who are focused on delivering valuable solutions for the trucking industry combining efficient, easy to use facilities with cutting edge technology in groundbreaking new ways.</p>
          <p className='text-base font-normal text-black opacity-[0.699999988079071] mb-6'>With our highly professional team and staff, we are dedicated to promoting safe trucking operations through our high capacity parking solution with wide drive aisles and oversized parking spaces for ease of use.</p>
          <button className='fext-base text-[#EB2022] font-semibold px-7 py-4 border border-[#EB2022] rounded-[10px] hover:text-white hover:bg-[#EB2022] transition-all duration:200 ease-linear'>Read more</button>
        </div>
       </div>

    </div>
  )
}

export default HeroAboutUs
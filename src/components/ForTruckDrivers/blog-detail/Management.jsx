import React from 'react'
import MenWithMobile from '../../../assests/images/webp/MenWithMobile.webp'

const Management = () => {
  return (
    <section>
      <div className='container'>
        <div className='max-w-[873px]'>
          <h2 className='text-4xl text-black font-bold mb-[17px]'>Excel spreadsheets make it difficult to scale, collaborate, and organize documents, as there is no document management</h2>
         <div className='flex gap-20 mb-8'>
         <p className='text-base font-normal text-black opacity-[0.699999988079071]'>Published on March: 24/2023</p>
          <p className='text-base font-normal text-black opacity-[0.699999988079071]'>Read Time:  6 min</p>
         </div>
         <img src={MenWithMobile} alt="" className='border-transparent rounded-[20px] mb-16 p-2'/>
         <h3 className='text-md font-bold text-[#020202]'>TLDR - Here's what you need to know:</h3>

          
        </div>
      </div>
    </section>
  )
}

export default Management
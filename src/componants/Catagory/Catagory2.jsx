import React from 'react'
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";

import Image3 from "../../assets/category/speaker.png";


import Button from "../Shared/Button";

const Catagory = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

         {/* first col */}
         <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray/100 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Speaker</p>
                <Button
                text="Browse"
                bgColor={"bg-white"}
                textColor={"text-primary"}/>
              </div>
            </div>
            <img src={Image3} alt="" className='w-[350px] absolute -right-4 lg:top-[5px] inset-y-0 left-25 '/>
          </div>

          {/* second col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Gamming</p>
                <Button
                text="Browse"
                bgColor={"bg-white"}
                textColor={"text-brandGreen"}/>
              </div>
            </div>
            <img src={Image1} alt="" className='w-[180px] pb-6 absolute -right-4 lg:top-[40px] inset-y-9 left-16   '/>
          </div>
          {/* third col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Gadget</p>
                <Button
                text="Browse"
                bgColor={"bg-white"}
                textColor={"text-brandBlue"}/>
              </div>
            </div>
            <img src={Image2} alt="" className='w-[180px] absolute -right-2 lg:top-[40px] inset-y-8 left-13 '/>
          </div>

         

        </div>
      </div>
    </div>
  )
}

export default Catagory
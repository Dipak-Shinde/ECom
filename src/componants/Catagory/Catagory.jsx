import React from 'react'
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";

import Image3 from "../../assets/category/macbook.png";

import Button from "../Shared/Button";

const Catagory = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* first col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                <Button
                text="Browse"
                bgColor={"bg-primary"}
                textColor={"text-white"}/>
              </div>
            </div>
            <img src={Image1} alt="" className='w-[320px] absolute buttom-0'/>
          </div>
          {/* second col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Gadget</p>
                <Button
                text="Browse"
                bgColor={"bg-white"}
                textColor={"text-brandYellow"}/>
              </div>
            </div>
            <img src={Image2} alt="" className='w-[320px] absolute -right-4 lg:top-[40px] inset-y-8 left-8'/>
          </div>

          {/* third col */}
          <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Laptop</p>
                <Button
                text="Browse"
                bgColor={"bg-white"}
                textColor={"text-primary"}/>
              </div>
            </div>
            <img src={Image3} alt="" className='w-[350px] absolute -right-4 lg:top-[5px] inset-y-0 left-25'/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Catagory

import React from 'react'
import { FaFacebook,FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export const Footer = () => {
  return (
    <div className='w-full bg-[#b2c1d2] text-[#1D3557] px-8'>
      <div className='max-w-[1000px] mx-auto h-full flex flex-col justify-center items-center'> 

        <div className='pt-8 text-xl md:text-2xl text-center'>
          <p className='md:text-4xl text-2xl  border-b-2 inline border-[#1D3557] font-medium'>FAQ's</p>

          <div className='flex flex-col justify-center py-4'>
            <span>What is Trekking? </span>
            <span>Which treks are suitable for beginners?</span>
            <span>What is the best time for a trek in Nepal?</span>
          </div>
        </div>

        <div className='w-full flex flex-col md:flex-row justify-between py-[50px]'>

          <div className="text-center md:text-left text-xl md:text-2xl">
            <p className='md:text-4xl text-2xl border-b-2 inline border-[#1D3557] font-medium'>SITEMAP</p>
            <ul className='py-4'>
              <li>Why with us?</li>
              <li>Our Way</li>
              <li>Testimonials</li>
              <li>Trekking Permit Fees</li>
              <li>Terms & Conditions</li>
              <li>Cancellation Policy</li>
            </ul>
          </div>

          <div className='py-[50px] md:py-0 text-center md:text-right text-xl md:text-2xl'>
            <p className='md:text-4xl text-2xl border-b-2 inline border-[#1D3557] font-medium'>Packages</p>
            <ul className='py-4'>
              <li>Annapurna Base Camp - 10 days - $1000</li>
              <li>Annapurna Base Camp - 10 days - $1000</li>
              <li>Annapurna Base Camp - 10 days - $1000</li>
              <li>Annapurna Base Camp - 10 days - $1000</li>
            </ul>
          </div>

        </div>


        <div className='flex flex-col justify-center items-center py-[20px]'>
          <div className='text-center text-2xl'>
            <ul className=''>
              <li className='md:text-4xl text-2xl font-medium'>Trek manager Nepal (P) Ltd.</li>
              <li>P.O.Box: , Thamel, Kathmandu, Nepal</li>
              <li>Hotel nothing second Floor</li>
              <li>Near by Restaurant.</li>
              <li>Tel: +977 65354</li>
            </ul>
          </div>

          <div className='py-[20px] flex flex-col items-center justify-center'>
            <div className='flex justify-between py-4 w-[80%]'>
              <FaFacebook className='' size={60}/>
              <FaLinkedin className='' size={60}/>
              <HiOutlineMail className='' size={60}/>
            </div>
              <p className='text-xl md:text-2xl border-b-2 inline border-[#1D3557]'>Created by Kaustub Niraula</p>
              <div className='border-b-2 inline border-[#1D3557] py-[2px] w-[80%]'></div>
              <div className='border-b-2 inline border-[#1D3557] py-[2px] w-[60%]'></div>
              <div className='border-b-2 inline border-[#1D3557] py-[2px] w-[40%]'></div>
              <div className='border-b-2 inline border-[#1D3557] py-[2px] w-[20%]'></div>
              <div className='border-b-2 inline border-[#1D3557] py-[2px] w-[10%]'></div>
            
          </div>
          
        </div>

      </div>
    </div>
  )
}

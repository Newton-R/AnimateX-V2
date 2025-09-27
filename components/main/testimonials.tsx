import React from 'react'
import { SectionPill } from '../sub/sectionpill'
import { Heart } from 'lucide-react'
import { VerticalCarousel } from '../sub/verticalcarousel'

export const Testimonials = () => {
  return (
    <div>
       <div className='center-container'>
            <div className='w-full md:w-[80%] flex-col-center gap-4'>
                <SectionPill icon={<Heart size={18}/>} text='Testimonials'/>
                <h2 className='section-head'>What developers are saying about us.</h2>
                <VerticalCarousel/>
            </div>
       </div>
    </div>
  )
}

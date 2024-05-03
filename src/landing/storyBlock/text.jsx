import React from 'react'
import Card from './card'

const Text = () => {
  return (
    <>
      <div className='flex flex-col items-center text-white '>
        <h1 className='font-extrabold text-2xl mt-12' >Storyblocks help you<br /> every step of the way</h1>
        <p className='w-1/2  text-sm text-center my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium optio. Quasi consectetur voluptate velit deleniti, omnis, perferendis quod incidunt saepe totam obcaecati assumenda quia veniam, voluptatibus optio provident mollitia.</p>
      </div>
      <Card />
    </>
  )
}

export default Text
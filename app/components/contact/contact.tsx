import React from 'react'
import Input from '../ui/input'

const Contact : React.FC = () => {
  return (
    <div className='flex-1 h-[80vh] w-[80%] mx-auto flex flex-col md:flex-row justify-center align-middle min-h-[calc(100vh)]'>
      <section className='hidden md:flex justify-center items-center md:flex-1'>
        <h1>Image Here</h1>
      </section>
      <form className='md:flex-1 flex flex-col gap-5 my-auto'>
        <div className='flex flex-col '>
           <h1 className='font-heading font-semibold text-[42px]'>Contact Us</h1>
           <p className='font-text font-normal text-[16px]'>Explore the future with us.<br/>Feel free to get in touch.</p>
        </div>
        <Input name='name' label='Name' placeholder='Enter your name here.' type='text' />
        <Input name='email' label='Email' placeholder='Enter your Email here.' type='email' />
        <Input name='message' label='Message' placeholder='Enter your message here.' type='text' />
        <button className='h-10 bg-blue text-white font-text font-semibold text-[14px] rounded-md' type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Contact
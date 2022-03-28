import { Logo } from './logo'

const Footer = () => {
  return (
    <div className='w-[100%] min-h-[200px] bg-blue flex justify-center items-center mx-auto h-auto  gap-10 py-[30px]'>
       <main className='w-[80%] gap-10 grid grid-cols-1 md:grid-cols-4 '>
      
       <section className='flex flex-col items-start gap-3 font-[14px]  text-white font-text'>
          <Logo color='white' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam turpis ligula, pharetra sit amet urna non, tempor tincidunt diam. Nunc ac pharetra turpis.</p>
       </section>
       <section className='flex flex-col items-start font-semibold gap-3 font-[14px]  text-white font-text'>
          <p className='text-[12px] font-normal font-heading'>Our Service</p>
          <a>Home</a>
          <a>Home</a>
          <a>Home</a>
          <a>Home</a>
       </section>
       <section className='flex flex-col items-start font-semibold gap-3 font-[14px]  text-white font-text'>
          <p className='text-[12px] font-normal font-heading'>Follow Us</p>
          <a>Facebook</a>
          <a>Facebook</a>
          <a>Facebook</a>
       </section>
       <section className='flex flex-col items-start font-semibold gap-3 font-[14px]  text-white font-text'>
           <p className='text-[12px] font-normal font-heading'>Company</p>
           <a>Privacy Policy</a>
           <a>Terms Of Service</a>
       </section>
       </main>
    </div>
  )
}

export default Footer
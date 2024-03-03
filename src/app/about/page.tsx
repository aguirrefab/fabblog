import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className='flex text-center md:text-left flex-col md:flex-row items-center justify-between gap-10'>
      <section className=' md:flex-1 flex flex-col gap-8 '>
        <h3 className='text-md text-blue-500'>About Fabblog</h3>
        <h2 className='text-5xl font-extrabold'>
          We create digital ideas that are bigger, bolder, braver and better.
        </h2>
        <p>
          At Fabblog, we are not just another agency; we are your partners in
          crafting compelling narratives and fostering meaningful connections
          with your audience. With a fusion of innovation and expertise.
        </p>
        <div className='flex gap-10 justify-center md:justify-start'>
          <div>
            <h3 className='text-2xl font-bold text-blue-600'>10 K+</h3>
            <p className='text-xs'>Year of experience</p>
          </div>
          <div>
            <h3 className='text-2xl font-bold text-blue-600'>234 K+</h3>
            <p className='text-xs'>People reacher</p>
          </div>
          <div>
            <h3 className=' text-2xl font-bold text-blue-600'>5 K+</h3>
            <p className='text-xs'>Software solutions implented</p>
          </div>
        </div>
      </section>
      <section className='hidden md:flex md:justify-center md:items-center md:flex-1'>
        <Image
          src={'/about.png'}
          height={350}
          width={350}
          alt='agency-work-team'
        />
      </section>
    </div>
  );
}

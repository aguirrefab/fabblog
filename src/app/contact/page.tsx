'use client';

import { ContactForm } from '@/components/ui/contactForm';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className='flex text-center md:text-left flex-col md:flex-row items-center justify-between gap-10'>
      <section className='hidden md:flex md:justify-center md:items-center md:flex-1'>
        <div className='flex-col'>
          <h3 className='text-lg text-blue-500 font-bold'>Lets talk!</h3>
          <Image
            src={'/contact.png'}
            height={350}
            width={350}
            alt='agency-work-team'
          />
        </div>
      </section>
      <section className=' md:flex-1  '>
        <ContactForm />
      </section>
    </div>
  );
}

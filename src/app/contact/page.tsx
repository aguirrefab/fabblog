'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  // Define your form fields and their validation rules using Zod schema
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  email: z.string().email()
})

export default function ContactPage() {
  const form = useForm({
    resolver: zodResolver(formSchema) // Use zodResolver with your Zod schema
  })

  const handleSubmit = (data) => {
    console.log(data) // Handle form submission here
  }

  return (
    <div className="flex text-center md:text-left flex-col md:flex-row items-center justify-between gap-10">
      <section className="hidden md:flex md:justify-center md:items-center md:flex-1">
        <div className="flex-col">
          <h3 className="text-lg text-blue-500 font-bold">Lets talk!</h3>
          <Image
            src={'/contact.png'}
            height={350}
            width={350}
            alt="agency-work-team"
          />
        </div>
      </section>
      <section className=" md:flex-1 flex flex-col gap-8 ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <button type="submit">Submit</button>
          </form>
        </Form>
      </section>
    </div>
  )
}

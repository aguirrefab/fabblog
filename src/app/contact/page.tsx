'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z
  .object({
    // Define your form fields and their validation rules using Zod schema
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty(),
    email: z.string().email().nonempty(),
    password: z.string().nonempty().min(4),
    passwordConfirm: z.string().nonempty().min(4)
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm
    },
    {
      message: 'Passwords do not match',
      path: ['passwordConfirm']
    }
  )

export default function ContactPage() {
  const form = useForm({
    resolver: zodResolver(formSchema) // Use zodResolver with your Zod schema
  })

  const handleSubmit = (data) => {
    console.log(data) // Handle form submission here
  }

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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className='max-w-md w-full flex flex-col gap-4'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Email address'
                        type='email'
                        {...field}
                      ></Input>
                    </FormControl>
                  </FormItem>
                )
              }}
            />
            <div className='flex flex-1 gap-4'>
              <FormField
                control={form.control}
                name='firstName'
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Name'
                          type='string'
                          {...field}
                        ></Input>
                      </FormControl>
                    </FormItem>
                  )
                }}
              />
              <FormField
                control={form.control}
                name='lastName'
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Last name'
                          type='string'
                          {...field}
                        ></Input>
                      </FormControl>
                    </FormItem>
                  )
                }}
              />
            </div>

            <div className='flex flex-1 gap-4'>
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Password'
                          type='password'
                          {...field}
                        ></Input>
                      </FormControl>
                    </FormItem>
                  )
                }}
              />
              <FormField
                control={form.control}
                name='passwordConfirm'
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Password Confirm</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Password Confirm'
                          type='password'
                          {...field}
                        ></Input>
                      </FormControl>
                    </FormItem>
                  )
                }}
              />
            </div>

            <Button type='submit'>Enviar</Button>
          </form>
        </Form>
      </section>
    </div>
  )
}

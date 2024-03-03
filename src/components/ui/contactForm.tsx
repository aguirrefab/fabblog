import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  email: z.string().email().nonempty(),
  message: z
    .string()
    .min(10, {
      message: 'Mesage must be at least 10 characters.'
    })
    .max(160, {
      message: 'Mesage must not be longer than 30 characters.'
    })
});

export const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema) // Use zodResolver with your Zod schema
  });

  const handleSubmit = (data) => {
    console.log(data); // Handle form submission here
  };
  return (
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
            );
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
                    <Input placeholder='Name' type='string' {...field}></Input>
                  </FormControl>
                </FormItem>
              );
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
              );
            }}
          />
        </div>
        <FormField
          control={form.control}
          name='bio'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Tell us your message or questions'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Enviar</Button>
      </form>
    </Form>
  );
};

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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
      return data.password === data.passwordConfirm;
    },
    {
      message: 'Passwords do not match',
      path: ['passwordConfirm']
    }
  );

export const SuscriptionForm = () => {
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
              );
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
              );
            }}
          />
        </div>

        <Button type='submit'>Enviar</Button>
      </form>
    </Form>
  );
};

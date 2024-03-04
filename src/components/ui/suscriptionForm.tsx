import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z
  .object({
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
      message: "Passwords do not match",
      path: ["passwordConfirm"]
    }
  );

export const SuscriptionForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema) // Use zodResolver with your Zod schema
  });

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="max-w-md w-full flex flex-col gap-4"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input placeholder="Email address" type="email" {...field} />
                </FormControl>
              </FormItem>
            );
          }}
        />
        <div className="flex flex-1 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" type="string" {...field} />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last name" type="string" {...field} />
                  </FormControl>
                </FormItem>
              );
            }}
          />
        </div>

        <div className="flex flex-1 gap-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password Confirm</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Password Confirm"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
        </div>

        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  );
};

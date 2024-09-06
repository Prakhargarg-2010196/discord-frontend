'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { z } from 'zod';
export default function SignUpForm() {
    const SignUpFormSchema = z.object({
        username: z
            .string({ required_error: 'You forgot to enter your username' })
            .min(5, 'Username should be of minimum 5 letters'),
        password: z
            .string({
                required_error: 'You forgot to provide your password',
            })
            .min(8, 'Password should be of minimum 8 characters'),
        email: z
            .string({ required_error: 'You forgot to provide your email' })
            .email(),
        dob: z.string().date(),
    });
    //TODO: Add when backend is also validating for confirm password
    // .refine(
    //     (values) => {
    //         return values.password === values.confirmPassword;
    //     },
    //     {
    //         message: 'Passwords must match!',
    //         path: ['confirmPassword'],
    //     }
    // );;

    const form = useForm<z.infer<typeof SignUpFormSchema>>({
        resolver: zodResolver(SignUpFormSchema),
        defaultValues: {
            username: '',
            password: '',
            email: '',
            dob: '2002-10-23',
        },
    });

    const onSubmit = (values: z.infer<typeof SignUpFormSchema>) => {
        console.log(values.email);
    };
    return (
        <>
            <h2 className="rounded-full bg-zinc-900 text-white p-4 text-center">
                Sign Up Page
            </h2>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your username"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is your email.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />{' '}
                    <FormField
                        control={form.control}
                        name="dob"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Date Of Birth</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your date of birth"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Password Field */}
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Password"
                                        type="password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is your profile password
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="self-center" type="submit">
                        Submit
                    </Button>
                </form>
            </Form>
        </>
    );
}

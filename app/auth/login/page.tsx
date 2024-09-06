'use client';
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';

export default function LoginForm() {
    const loginForm = useForm({
        defaultValues: {
            uid: '',
            password: '',
        },
    });
    return (
        <>
            <h2 className="rounded-full bg-zinc-900 text-white p-4 text-center">
                Login Page
            </h2>
            <Form {...loginForm}>
                <form>
                    <FormField
                        control={loginForm.control}
                        name="uid"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username/Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your username/email to login"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={loginForm.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your password to login"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </>
    );
}

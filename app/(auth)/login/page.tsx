'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Button } from '~/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { useLoginMutation } from '~/lib/redux/auth/slices/auth-api-slice';
import { setCredentials } from '~/lib/redux/auth/slices/auth-slice';
import { useAppDispatch } from '~/lib/redux/hooks/redux-hook';

export default function LoginForm() {
    const router = useRouter();
    const [login, { isLoading, error, success, isError }] = useLoginMutation();
    const dispatch = useAppDispatch();
    const loginForm = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
    });
    const onSubmit = async (credentials) => {
        try {
            const response = await login(credentials).unwrap();
            if (response?.data.token) {
                dispatch(setCredentials({ accessToken: response.data.token }));
                router.push('/');
            }
        } catch (e) {console.log("error occured while logging in")}
    };
    return (
        <>
            <h2 className="rounded-full bg-zinc-900 text-white p-4 text-center">
                Login Page
            </h2>
            <Form {...loginForm}>
                <form
                    onSubmit={loginForm.handleSubmit(onSubmit)}
                    className="flex flex-col gap-3"
                >
                    <FormField
                        control={loginForm.control}
                        name="username"
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
                    <Button className="self-center w-1/4" type="submit">
                        Login
                    </Button>
                </form>
            </Form>
        </>
    );
}

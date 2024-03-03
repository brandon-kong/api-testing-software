'use client';

import { Button, Input } from "@/components";
import Typography from "@/components/typography";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";

import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAuth } from '@/components/providers/auth-provider';
import { useRouter } from "next/navigation";
import LoginModal from "@/components/login-modal";

type FormValues = {
    email: string;
    password: string;
}

export default function Login() {

    const router = useRouter();
    const { signIn } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = async (e) => {
        const res = await signIn('email-password', {
            email: e.email,
            password: e.password,
            callbackUrl: '/',
            redirect: false
        });

        if (res?.ok) {
            router.push('/');
        }
    }

  return (
    <main className="">

        <div
        className={'fixed h-full flex items-center justify-center max-w-lg w-full transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'}>
            <LoginModal />
        </div>
        
       <div
        id={'background'}
        className={'absolute h-[853px] w-full -z-10'}
        >
            <div
            className={'relative h-full w-full'}
            >
                <div className={'absolute blob w-full h-full opacity-30'} />
                <div className={'w-full h-[100px] opacity-60 bg-gradient-to-b from-black to-transparent'} />
=            <Image draggable={false} src={'/backgrounds/grid2.webp'} alt={'background'} fill  
            className={'absolute w-full opacity-50 select-none'}
            />
            </div>
        
        </div>

        <div
        id={'main'}
        className={'pt-42 hidden'}
        >

        
            <div
            className={'mx-auto relative h-screen flex gap-8 flex-col items-center justify-center text-secondary-100 max-w-md'}
            >
                <div
                className={'flex flex-col gap-4 w-full items-start justify-start'}
                >
                    <Typography variant={'h1'}>
                        Login
                    </Typography>

                    <Typography variant={'p-large'} className={'text-secondary-300'}>
                        Login to your account
                    </Typography>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className={'w-full flex flex-col gap-4'}>
                    <Input variant={'solid'} placeholder={'Email'} className={'w-full'} 
                    {...register('email', { required: 'Email is required' })}
                    />
                    <Input variant={'solid'} type={'password'} placeholder={'Password'} className={'w-full'}
                    {...register('password', { required: 'Password is required' })}
                    />
                    <Button variant={'primary'}  className={'w-full'}>
                        Login
                    </Button>

                    <div
                    className={'flex items-center justify-center w-full'}
                    >
                        <Typography variant={'p-small'} className={'text-secondary-300'}>
                            Don&apos;t have an account?
                        </Typography>

                        <Button href={'/account/create'} variant={'text'} className={'text-primary-500'}>
                            Register
                        </Button>
                    </div>

                    <div
                    className={'flex items-center justify-center w-full gap-4'}
                    >
                        <hr className={'w-full border-secondary-900 h-0.5'} />
                        <Typography variant={'p-small'} className={'text-secondary-500'}>
                            or
                        </Typography>
                        <hr className={'w-full border-secondary-900 h-0.5'} />
                    </div>

                    <div
                    className={'flex flex-col items-center justify-center w-full gap-4'}
                    >
                        <Button variant={'secondary'} className={'relative flex items-center justify-center gap-2 w-full'}>
                            <FontAwesomeIcon icon={faGithub} size={'2x'} className={'absolute left-2'} />
                            Login with Github
                        </Button>
                        <Button variant={'secondary'} className={'flex relative items-center justify-center gap-2 w-full'}>
                            <FontAwesomeIcon icon={faGoogle} size={'2x'} className={'absolute left-2'} />
                            Login with Google
                        </Button>
                    </div>
                </form>
               
            </div>
        </div>
      
    </main>
  );
}

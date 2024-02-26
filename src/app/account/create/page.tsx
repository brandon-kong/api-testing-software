'use client';

import { Button, Input } from "@/components";
import Typography from "@/components/typography";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";

import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAuth } from '@/components/providers/auth-provider';
import { useRouter } from "next/navigation";

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password1: string;
    password2: string;
};


export default function CreateAccount() {

    const router = useRouter();
    const { signIn } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = async (e) => {

        if (e.password1 !== e.password2) {
            return;
        }

        const res = await signIn('register-email-password', {
            email: e.email,
            password1: e.password1,
            password2: e.password2,
            first_name: e.firstName,
            last_name: e.lastName,
            
            callbackUrl: '/',
            redirect: false
        });

        if (res?.ok) {
            router.push('/');
        }
    }

  return (
    <main className="relative">
       <div
        id={'background'}
        className={'absolute h-[853px] w-full'}
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
        className={'pt-42'}
        >

        
            <div
            className={'mx-auto relative h-screen flex gap-8 flex-col items-center justify-center text-secondary-100 max-w-md'}
            >
                <div
                className={'flex flex-col gap-4 w-full items-start justify-start'}
                >
                    <Typography variant={'h1'}>
                        Create Account
                    </Typography>

                    <Typography variant={'p-large'} className={'text-secondary-300'}>
                        Create an account to get started
                    </Typography>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className={'w-full flex flex-col gap-4'}>
                    <div className={'flex gap-4 w-full'}>
                        <Input variant={'solid'} size={'lg'} placeholder={'First Name'} className={'w-full'}
                        {...register('firstName', { required: 'First Name is required' })}
                        />

                        <Input variant={'solid'} size={'lg'} placeholder={'Last Name'} className={'w-full'}
                        {...register('lastName', { required: 'Last Name is required' })}
                        />
                    </div>
                    <Input variant={'solid'} size={'lg'} placeholder={'Email'} className={'w-full'} 
                    {...register('email', { required: 'Email is required' })}
                    />
                    <Input variant={'solid'} size={'lg'} type={'password'} placeholder={'Password'} className={'w-full'}
                    {...register('password1', { required: 'Password is required' })}
                    />
                    <Input variant={'solid'} size={'lg'} type={'password'} placeholder={'Confirm password'} className={'w-full'}
                    {...register('password2', { required: 'Password is required' })}
                    />
                    <Button variant={'primary'}  className={'w-full'}>
                        Create Account
                    </Button>

                    <div
                    className={'flex items-center justify-center w-full'}
                    >
                        <Typography variant={'p-small'} className={'text-secondary-300'}>
                            Already have an account?
                        </Typography>

                        <Button href={'/account/login'} variant={'text'} className={'text-primary-500'}>
                            Login
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

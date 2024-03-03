import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import Link from "next/link";

const variants = cva(
    'flex items-center justify-center cursor-pointer px-4 py-2 text-neutral-500 rounded-full font-medium tracking-normal leading-normal transition-colors duration-300 ease-in-out',
    {
        variants: {
            variant: {
                'primary': 'bg-primary-500 text-primary-950 hover:bg-primary-400',
                'secondary': 'bg-secondary-300 hover:bg-secondary-400 text-secondary-950',
                'outline': 'bg-transparent border border-neutral-500 text-neutral-500',
                'ghost': 'bg-transparent text-neutral-400 hover:bg-neutral-800',
                'text': 'px-1 bg-transparent text-neutral-400 hover:text-neutral-200 h-fit'
            },

            size: {
                'sm': 'text-xs',
                'md': 'text-sm h-10',
                'lg': 'text-lg',
                'icon': 'p-1 aspect-square w-fit h-auto'
            }
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        }
    }
)

type ButtonOrAnchorProps<T extends HTMLElement> = Omit<React.HTMLAttributes<T>, 'size'> & VariantProps<typeof variants>;

export type ButtonProps = ButtonOrAnchorProps<HTMLButtonElement> & ButtonOrAnchorProps<HTMLAnchorElement> & {
    href?: string;
};

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps> (
    ({ variant, size, href, className, children, ...props }, ref) => {
        if (href) {
            return (
                <Link
                className={twMerge(variants({ variant, size, className }))}
                ref={ref as React.Ref<HTMLAnchorElement>}
                href={href}
                {...props}
                >
                    {children}
                </Link>
            );
        }
        return (
            <button
            className={twMerge(variants({ variant, size, className }))}
            ref={ref as React.Ref<HTMLButtonElement>}
            {...props}
            >
                { children }
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
export { variants as ButtonVariants };
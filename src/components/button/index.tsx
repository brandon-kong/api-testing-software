import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const variants = cva(
    'cursor-pointer px-4 py-2 text-neutral-500 rounded-full font-medium tracking-normal leading-normal transition-colors duration-300 ease-in-out',
    {
        variants: {
            variant: {
                'primary': 'bg-primary-500 text-primary-950 hover:bg-primary-600',
                'secondary': 'bg-neutral-200 text-neutral-800',
                'outline': 'bg-transparent border border-neutral-500 text-neutral-500',
                'ghost': 'bg-transparent text-neutral-400 hover:bg-neutral-800',
                'text': 'bg-transparent text-neutral-500 hover:text-neutral-800'
            },

            size: {
                'sm': 'text-xs',
                'md': 'text-sm',
                'lg': 'text-lg',
            }
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        }
    }
)

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, 
VariantProps<typeof variants> 
{}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps> (
    ({ variant, className, children, ...props }, ref) => {
        return (
            <button
            className={twMerge(variants({ variant, className }))}
            ref={ref}
            {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
export { variants as ButtonVariants };
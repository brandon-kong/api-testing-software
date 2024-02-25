import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const variants = cva(
    'px-4 py-2 text-neutral-500 rounded-full font-medium tracking-normal leading-normal transition-colors duration-300 ease-in-out outline-none focus:outline-none',
    {
        variants: {
            variant: {
                'unstyled': 'rounded-none bg-transparent px-0 py-0 text-neutral-500 hover:text-neutral-400',
                'primary': 'bg-primary-500 text-primary-950 hover:bg-primary-400',
                'secondary': 'bg-neutral-200 text-neutral-800',
                'outline': 'bg-transparent border border-neutral-500 text-neutral-500',
                'ghost': 'bg-transparent text-neutral-400 hover:bg-neutral-800',
                'text': 'px-1 bg-transparent text-neutral-400 hover:text-neutral-200'
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

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof variants> {}


const Input = React.forwardRef<HTMLInputElement, InputProps> (
    ({ variant, size, className, ...props }, ref) => {
        return (
            <input
            className={twMerge(variants({ variant, size, className }))}
            ref={ref}
            {...props}
            />
        );
    }
);

Input.displayName = 'Input';

export default Input;
export { variants as InputVariants };
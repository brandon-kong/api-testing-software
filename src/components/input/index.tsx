import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const variants = cva(
    'px-4 py-2 text-neutral-500 rounded-full font-normal tracking-normal leading-normal transition-colors duration-300 ease-in-out outline-none focus:outline-none',
    {
        variants: {
            variant: {
                'unstyled': 'rounded-none bg-transparent px-0 py-0 text-neutral-500 hover:text-neutral-400',
                'primary': 'bg-primary-500 text-primary-950 hover:bg-primary-400',
                'solid': 'bg-secondary-950 text-secondary-100 hover:bg-secondary-900',
            },

            size: {
                'sm': 'text-xs',
                'md': 'text-sm h-10',
                'lg': 'h-14',
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
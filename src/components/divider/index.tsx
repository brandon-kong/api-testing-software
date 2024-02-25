import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const variants = cva(
    'border-neutral-500',
    {
        variants: {
            variant: {
                'horizontal': 'border-t  w-full my-4',
                'vertical': 'border-l h-6 w-0',
            }
        },
        defaultVariants: {
            variant: 'horizontal',
        }
    }
)

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement>, 
VariantProps<typeof variants> 
{}

const Divider = React.forwardRef<HTMLHRElement, DividerProps> (
    ({ variant, className, children, ...props }, ref) => {
        return (
            <hr 
            className={twMerge(variants({ variant, className }))}
            ref={ref}
            {...props}
            >
                {children}
            </hr>
        );
    }
);

Divider.displayName = 'Divider';

export default Divider;
export { variants as DividerVariants };
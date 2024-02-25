import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const variants = cva(
    'text-base font-sans',
    {
        variants: {
            variant: {
                'h1': 'text-4xl xl:text-5xl font-semibold leading-tight tracking-[-0.05em]',
                'h2': 'text-4xl font-semibold leading-tight tracking-normal',
                'h3': 'text-3xl font-semibold tracking-tight leading-normal',
                'h4': 'text-2xl font-semibold tracking-normal leading-snug',
                'h5': 'text-lg font-bold',
                'h6': 'text-base font-bold',
                'subtitle': 'text-xs font-medium tracking-widest leading-normal uppercase text-gray-400',
                'p': 'text-lg tracking-tight leading-normal',
                'p-small': 'text-sm tracking-tight leading-snug',
                'p-xsmall': 'text-xs tracking-tight leading-snug',
                'p-large': 'text-md xl:text-xl tracking-tight leading-normal',
                'span': 'text-base',
            }
        },
        defaultVariants: {
            variant: 'p',
        }
    }
)

const variantMapping: Record<string, React.ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle: 'p',
    p: 'p',
    'p-small': 'p',
    'p-xsmall': 'p',
    'p-large': 'p',
    span: 'span',
};

type Variant = keyof typeof variantMapping;

export interface TypographyProps extends React.HTMLAttributes<HTMLElement>, 
VariantProps<typeof variants> 
{}

const Typography = React.forwardRef<HTMLElement, TypographyProps> (
    ({ variant, className, children, ...props }, ref) => {
        const Component = variantMapping[variant as Variant];
        return (
            <Component 
            className={twMerge(variants({ variant, className }))}
            ref={ref}
            {...props}
            >
                {children}
            </Component>
        );
    }
);

Typography.displayName = 'Typography';

export default Typography;
export { variants as TypographyVariants };
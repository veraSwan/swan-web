import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/90 glow-pink-purple hover:glow-pink-purple-lg',
				destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-[#C05775]/50 hover:glow-pink-purple',
				secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
        'primary-cta': 'bg-white text-[#0E0F12] shadow-[0_0_20px_-5px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_-5px_hsl(var(--accent-glow)/0.4)] hover:bg-[#F8F9FA] hover:scale-[1.02] active:scale-[0.98] duration-500 ease-out border border-transparent rounded-full font-bold tracking-wide',
        'secondary-cta': 'bg-transparent border border-[#E5E7EB]/20 text-[#E5E7EB] hover:text-white hover:border-[#C05775]/60 hover:bg-[#C05775]/5 hover:shadow-[0_0_25px_-5px_hsl(var(--accent-glow)/0.25)] hover:scale-[1.02] active:scale-[0.98] duration-500 ease-out rounded-full font-medium tracking-wide',
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
        xl: 'h-14 px-10 text-lg rounded-full',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button';
	return (
		<Comp
			className={cn(buttonVariants({ variant, size, className }))}
			ref={ref}
			{...props}
		/>
	);
});
Button.displayName = 'Button';

export { Button, buttonVariants };
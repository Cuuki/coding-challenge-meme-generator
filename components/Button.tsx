import type { ComponentPropsWithoutRef, ReactElement } from 'react';

type ButtonProps = {
  variant: 'success' | 'danger';
  children: string | ReactElement;
} & ComponentPropsWithoutRef<'button'>;

export const Button = ({ variant, children, ...rest }: ButtonProps) => {
  const variantClassNames = {
    success: ['text-slate-900', 'bg-green-500', 'hover:bg-green-700', 'focus:ring-green-400'],
    danger: ['text-slate-900', 'bg-rose-500', 'hover:bg-rose-700', 'focus:ring-rose-400'],
  };

  return (
    <button
      className={[
        'mr-4',
        'py-2',
        'px-4',
        'font-semibold',
        'rounded-lg',
        'shadow-md',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-opacity-75',
        ...variantClassNames[variant],
      ].join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
};

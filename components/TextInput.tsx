import type { ComponentPropsWithoutRef, FormEvent } from 'react';

type TextInputProps = {
  value: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
} & ComponentPropsWithoutRef<'input'>;

export const TextInput = ({ value, onChange, ...rest }: TextInputProps) => {
  return (
    <input
      className="block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      value={value}
      type="text"
      onChange={onChange}
      {...rest}
    />
  );
};

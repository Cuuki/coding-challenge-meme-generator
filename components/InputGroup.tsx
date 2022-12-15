import type { ComponentPropsWithoutRef, ReactElement } from 'react';
import type { TextInput } from './TextInput';

type InputGroupProps = {
  label: string | ReactElement;
  children: ReactElement<typeof TextInput>;
} & ComponentPropsWithoutRef<'label'>;

export const InputGroup = ({ label, children, ...rest }: InputGroupProps) => {
  return (
    <label className="block mb-4" {...rest}>
      <span className="text-sm font-bold">{label}</span>
      {children}
    </label>
  );
};

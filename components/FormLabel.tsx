import type { ComponentPropsWithoutRef, ReactElement } from 'react';
import type { TextInput } from './TextInput';

type FormLabelProps = {
  text: string | ReactElement;
  children: ReactElement<typeof TextInput>;
} & ComponentPropsWithoutRef<'label'>;

export const FormLabel = ({ text, children, ...rest }: FormLabelProps) => {
  return (
    <label className="block mb-4" {...rest}>
      <span className="text-sm font-bold">{text}</span>
      {children}
    </label>
  );
};

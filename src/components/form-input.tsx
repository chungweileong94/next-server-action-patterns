import {type ComponentProps, cloneElement} from 'react';

import {type InputProps} from '~/components/ui/input';
import {Label} from '~/components/ui/label';
import {type SelectTrigger} from '~/components/ui/select';
import {cn} from '~/lib/utils';

interface FormInputProps {
  id: string;
  label: string;
  message?: string;
  error?: boolean;
  className?: string;
  children: React.ReactElement<InputProps | ComponentProps<typeof SelectTrigger>>;
}

export const FormInput = ({id, label, message, error, className, children}: FormInputProps) => {
  return (
    <div className={cn('grid w-full items-center gap-1.5', className)}>
      <Label htmlFor={id} className={cn(error && 'text-destructive')}>
        {label}
      </Label>
      {cloneElement(children, {
        id,
        className: cn(children.props.className, error && 'border-destructive focus-visible:ring-destructive'),
      })}
      {!!message && (
        <p className={cn('text-sm text-muted-foreground', error && 'font-medium text-destructive')}>{message}</p>
      )}
    </div>
  );
};

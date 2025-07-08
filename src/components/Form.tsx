import React from 'react';
import { useForm } from 'react-hook-form';
import { ZodTypeAny, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface IFormProps<T extends ZodTypeAny> {
  method: 'GET' | 'POST' | 'DIALOG';
  children?: React.ReactNode;
  schema: T;
  defaultValues?: z.infer<T>;
  className?: string;
  label?: string;
  onSubmit: (values: z.infer<T>) => void;
}

export function Form<T extends ZodTypeAny>(props: IFormProps<T>) {
  const { schema, defaultValues, onSubmit, className, children } = props;

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
  } = useForm<z.infer<T>>({ resolver: zodResolver(schema), defaultValues });

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${className} space-y-4 max-w-md p-4 border rounded shadow`}
      >
        {children}
      </form>
    </>
  );
}

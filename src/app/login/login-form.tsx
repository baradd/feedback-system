'use client';

import { Button } from '@/components/Button';
import { Form } from '@/components/Form';
import { Input } from '@/components/Inputs';
import { AuthService } from '@/lib/api/auth.service';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(2, { message: 'Password is too short' }),
});

type loginFormData = z.infer<typeof loginSchema>;

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: loginFormData) => {
    const authService = new AuthService();
    const response = await authService.login(values.email, values.password);
  };

  return (
    <>
      <Form<typeof loginSchema>
        method="POST"
        schema={loginSchema}
        label="Login"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          {...register('email')}
          name="email"
          label="E-mail"
          placeholder="example@example.com"
          type="email"
          error={errors.email?.message}
        ></Input>
        <Input
          {...register('password')}
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
          error={errors.password?.message}
        ></Input>
        <Button
          type="submit"
          variant="primary"
          loading={isSubmitting}
          value="Login"
        >
          Login
        </Button>
      </Form>
    </>
  );
};

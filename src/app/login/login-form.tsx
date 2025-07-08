import { Form } from '@/components/Form';
import { Input } from '@/components/Inputs';
import { AuthService } from '@/lib/api/auth.service';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6),
});

type loginFormData = z.infer<typeof loginSchema>;

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '1',
      password: '',
    },
  });

  const onSubmit = async (values: loginFormData) => {
    //call login
    const authService = new AuthService();
    const response = await authService.login(values.email, values.password);
  };

  return (
    <>
      <Form<loginFormData>
        method="POST"
        schema={loginSchema}
        label="Login"
        onSubmit={onSubmit}
      >
        <Input
          name="email"
          label="E-mail"
          placeholder="example@example.com"
          type="email"
        ></Input>
        <Input
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
        ></Input>
      </Form>
    </>
  );
};

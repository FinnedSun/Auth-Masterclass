import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Isi Email',
  }),
  password: z.string().min(1, {
    message: 'Password is requared',
  }),
})

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: 'Isi Nama',
  }),
  email: z.string().email({
    message: 'Isi Email',
  }),
  password: z.string().min(6, {
    message: 'Minimal 6 karakter!',
  }),
})

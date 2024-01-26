'use server'

import * as z from 'zod'
import { AuthError } from 'next-auth'

import { signIn } from '@/auth'
import { LoginSchema } from '@/schemas'
import { DEFAULT_LOGIN_REDERECT } from '@/routes'

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validetedFields = LoginSchema.safeParse(values)

  if (!validetedFields.success) {
    return { error: 'Ivalid fields!' }
  }

  const { email, password } = validetedFields.data

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDERECT,
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Incvalid credentials!' }
        default:
          return { error: 'Something went wrong!' }
      }
    }

    throw error
  }
}

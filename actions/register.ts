'use server'

import * as z from 'zod'
import { RegisterSchema } from '@/schemas'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validetedFields = RegisterSchema.safeParse(values)

  if (!validetedFields.success) {
    return { error: 'Ivalid fields!' }
  }

  return { success: 'Email terkirim!' }
}

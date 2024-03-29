'use server'

import * as z from 'zod'
import bcrypt from 'bcryptjs'

import { RegisterSchema } from '@/schemas'
import { db } from '@/lib/db'
import { getUserByEmail } from '@/data/user'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validetedFields = RegisterSchema.safeParse(values)

  if (!validetedFields.success) {
    return { error: 'Ivalid fields!' }
  }

  const { name, email, password } = validetedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: 'Email telah digunakan!' }
  }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  })

  return { success: 'User dibuat!' }
}

import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'teste', 'production'])
    .default('production'),
  DATABASE_URL: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables')
}

export const env = _env.data

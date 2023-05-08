import { expect, test, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { app } from '../app'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})
test('user should be able to create a new transaction', async () => {
  const response = await request(app.server).post('/transactions').send({
    title: 'New transaction',
    amount: 500,
    type: 'credit',
  })

  expect(response.status).toEqual(201)
})

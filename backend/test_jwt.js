import jwt from 'jsonwebtoken'

const secret = 'testsecret'
const payload = 'test@example.com' + 'password123'

const token = jwt.sign(payload, secret)
console.log('Token:', token)

try {
  const decoded = jwt.verify(token, secret)
  console.log('Decoded:', decoded)
  console.log('Type of decoded:', typeof decoded)
  console.log('Is match:', decoded === payload)
} catch (e) {
  console.log('Error verifying:', e.message)
}

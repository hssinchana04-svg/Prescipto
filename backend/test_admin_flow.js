import fetch from 'node-fetch'; // Fallback if global fetch isn't working, but separate check needed.
// Actually Node 22 has global fetch.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import FormData from 'form-data';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'http://localhost:4000/api/admin';

async function testAdminFlow() {
  console.log('1. Testing Admin Login...');

  const loginResponse = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD
    })
  });

  const loginData = await loginResponse.json();

  if (!loginData.success) {
    console.error('Login Failed:', loginData);
    return;
  }

  console.log('Login Successful! Token received.');
  const token = loginData.token;

  console.log('\n2. Testing Add Doctor...');

  // Locate the image file
  // Ideally we'd use the one found in frontend/src/assets, but pathing might be tricky relative to backend.
  // Let's assume absolute path for now based on previous `list_dir`.
  const imagePath = path.resolve(__dirname, '../frontend/src/assets/doc1.png');

  if (!fs.existsSync(imagePath)) {
    console.error('Test image not found at:', imagePath);
    return;
  }

  const form = new FormData();
  form.append('image', fs.createReadStream(imagePath));
  form.append('name', 'Test Doctor');
  form.append('email', 'testdoc' + Date.now() + '@example.com');
  form.append('password', 'password123');
  form.append('speciality', 'General physician');
  form.append('degree', 'MBBS');
  form.append('experience', '4 Years');
  form.append('about', 'Dr. Test is a test doctor.');
  form.append('fees', '50');
  form.append('address', JSON.stringify({ line1: '123 Test St', line2: 'Test City' }));

  const addDocResponse = await fetch(`${BASE_URL}/add-doctor`, {
    method: 'POST',
    headers: {
      'atoken': token,
      ...form.getHeaders()
    },
    body: form
  });

  const addDocData = await addDocResponse.json();
  console.log('Add Doctor Response:', addDocData);
}

try {
  await testAdminFlow();
} catch (error) {
  console.error("Test failed with error:", error);
}

const fs = require('fs');
const FormData = require('form-data');
const axios = require('axios');

// Test configuration
const API_BASE_URL = 'https://sfa-back-end.vercel.app/api';
const TEST_CUSTOMER_ID = 'CUST001'; // Replace with a valid customer ID
const TEST_TOKEN = 'YOUR_JWT_TOKEN_HERE'; // Replace with a valid JWT token

async function testFileUpload() {
  try {
    console.log('🚀 Testing file upload functionality...');
    
    // Create a test file
    const testFileName = 'test-document.txt';
    const testContent = 'This is a test document for file upload testing.';
    fs.writeFileSync(testFileName, testContent);
    
    console.log(`📄 Created test file: ${testFileName}`);
    
    // Create form data
    const formData = new FormData();
    formData.append('file', fs.createReadStream(testFileName), {
      filename: testFileName,
      contentType: 'text/plain',
    });
    formData.append('customerId', TEST_CUSTOMER_ID);
    formData.append('description', 'Test document upload from script');
    
    console.log('📤 Uploading file...');
    
    // Make the request
    const response = await axios.post(`${API_BASE_URL}/ar/documents/upload`, formData, {
      headers: {
        ...formData.getHeaders(),
        'Authorization': `Bearer ${TEST_TOKEN}`,
      },
      timeout: 30000,
    });
    
    console.log('✅ Upload successful!');
    console.log('Response:', JSON.stringify(response.data, null, 2));
    
    // Clean up test file
    fs.unlinkSync(testFileName);
    console.log(`🗑️ Cleaned up test file: ${testFileName}`);
    
  } catch (error) {
    console.error('❌ Upload failed:', error.message);
    
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
    
    // Clean up test file if it exists
    if (fs.existsSync('test-document.txt')) {
      fs.unlinkSync('test-document.txt');
    }
  }
}

// Instructions for usage
console.log(`
📋 File Upload Test Script
==========================

To use this script:

1. Install dependencies:
   npm install form-data axios

2. Update the configuration:
   - Replace TEST_CUSTOMER_ID with a valid customer ID
   - Replace TEST_TOKEN with a valid JWT token

3. Run the script:
   node test-upload.js

4. Alternative: Use curl command:
   curl -X POST https://sfa-back-end.vercel.app/api/ar/documents/upload \\
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
     -F "file=@test-file.txt" \\
     -F "customerId=CUST001" \\
     -F "description=Test upload"
`);

// Run the test if this file is executed directly
if (require.main === module) {
  testFileUpload();
}

module.exports = { testFileUpload };

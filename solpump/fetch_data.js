const axios = require('axios');

const url = 'https://backend.solpump.com/api/v1/affiliate?sort=Most+Wagered';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ3YWxsZXRBZGRyZXNzIjoiRzc5dlBuWFhyVk1mdHl6VHI1ajg4UWdyMVRZTDNhM3ZwdnNUaDNtTU1Sak4iLCJ1c2VyIjoiOWRmMzk0YWEtZDY4MC00OWZhLWJiZmMtMzFlZTE0MmY1MzJhIiwic3RhdGUiOiJMT0dHRURfSU4ifQ.-EnRlKjBvV3axk1lPobjwMF6vjrtFj0UW75-Ak2_0tY';

const config = {
    headers: {
        'Authorization': `Bearer ${token}`,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Origin': 'https://solpump.com',
        'Referer': 'https://solpump.com/',
    }
};

async function fetchData() {
    try {
        console.log('Sending request to:', url);
        const response = await axios.get(url, config);
        console.log('Request successful!');
        console.log(JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.error('An error occurred while fetching the data.');
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Headers:', JSON.stringify(error.response.headers, null, 2));
            console.error('Data:', JSON.stringify(error.response.data, null, 2));
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
    }
}

fetchData();

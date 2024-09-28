const axios = require('axios');

const handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': 'https://jesse-chong.netlify.app',  
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "Successful preflight call." })
    };
  }

  try {
    const body = JSON.parse(event.body);
    const response = await axios.post('https://leetcode.com/graphql', body, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      timeout: 5000
    });

    return {
      statusCode: 200,
      headers, 
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    if (error.response) {
      return {
        statusCode: error.response.status,
        headers: {
          ...headers
        },
        body: JSON.stringify(error.response.data)
      };
    } else {
      return {
        statusCode: 500,
        headers: {
          ...headers
        },
        body: JSON.stringify({ error: 'An error occurred while fetching data from LeetCode' })
      };
    }
  }
};

module.exports = { handler };

const https = require('https');

const options = {
  hostname: 'api.example.com',
  port: 443,
  path: '/users?page=2&per_page=10',
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  console.log('headers:', res.getHeaders());

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.end();

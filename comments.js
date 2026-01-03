// Create web server
const http = require('http');

// Define server port
const PORT = 3000;

// Create server
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/comments') {
        // Sample comments data
        const comments = [
            { id: 1, text: 'This is the first comment.' },
            { id: 2, text: 'This is the second comment.' },
            { id: 3, text: 'This is the third comment.' }
        ];

        // Set response header
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // Send comments as JSON response
        res.end(JSON.stringify(comments));
    } else {
        // Handle 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Start server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`Request received for: ${req.url}`); // This shows in terminal

    let filePath = '';
    let contentType = 'text/html';

    // ROUTING LOGIC
    if (req.url === '/' || req.url === '/home') {
        filePath = path.join(__dirname, 'index.html');
    } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'about.html');
    } else if (req.url === '/contact') {
        filePath = path.join(__dirname, 'contact.html');
    } else if (req.url === '/style.css') {
        filePath = path.join(__dirname, 'style.css');
        contentType = 'text/css';
    } else {
        filePath = path.join(__dirname, '404.html');
    }

    // READING THE FILE
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end(`Server Error: ${err.code}`);
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Open browser and go to: http://localhost:${PORT}/home`);
});
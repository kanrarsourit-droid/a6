How the Node.js Server Works:

This server is built using Node.js's built-in http, fs (File System), and path modules. It operates on a request-response cycle:

Server Creation: We use http.createServer() to initialize the server, which listens for incoming browser requests on Port 3000.

Routing Logic: When a request is received, the server checks the URL (req.url) to decide what resource to serve:

If the URL is / or /home, it prepares to serve index.html.

If the URL is /about, it prepares about.html.

If the URL is /contact, it prepares contact.html.

It also handles CSS requests (/style.css) to ensure the pages are styled correctly.

File Serving: Once the correct file path is determined, the fs.readFile method reads the file from the hard drive asynchronously.

Success (200 OK): If the file exists, the server sends the file content back to the browser with the correct Content-Type (text/html or text/css).

Error (404 Not Found): If the user requests a route that doesn't exist, the server returns the 404.html error page.

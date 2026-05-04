const http = require('http');

const port = process.env.PORT || 3000;
const env = process.env.APP_ENV || "not-set";

http.createServer((req, res) => {
  res.end(`Hello Zeyan 🚀\n app is live: ${env}`);
}).listen(port);

console.log("Server running...");
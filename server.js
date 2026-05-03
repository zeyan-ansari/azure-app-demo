const http = require('http');
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.end('Hello Zeyan 🚀 Your app is LIVE!');
}).listen(port);

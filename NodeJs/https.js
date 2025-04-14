const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("key.pem"), // Your private key
  cert: fs.readFileSync("cert.pem"), // Your SSL/TLS certificate
};

https
  .createServer(options, (req, res) => {
    res.writeHead(200);
    res.end("Hello, Secure World!");
  })
  .listen(443, () => {
    console.log("HTTPS server running on port 443");
  });

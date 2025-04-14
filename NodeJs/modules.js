// 1. EventEmitter Module
// The events module allows working with event-driven programming using the EventEmitter class.

const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

myEmitter.emit("greet", "Alice");

// 2. Stream Module
// Streams are used to handle continuous data flow, such as reading/writing large files.

const fs = require("fs");

const readableStream = fs.createReadStream("example.txt", "utf8");

readableStream.on("data", (chunk) => {
  console.log(`Received data: ${chunk}`);
});

// 3. FS (File System) Module
// Handles file operations like reading, writing, and deleting files.

const fs = require("fs");

// Writing to a file
fs.write("test.txt", "Hello Node.js!", (err) => {
  if (err) {
    console.error(err);
  }
});

// Reading from a file
const data = fs.read("test.txt", "utf8", (data, error) => {
  if (error) {
    console.error(error);
  }
});
console.log(data);

// 4. Net Module
// The net module is used for creating TCP or IPC servers and clients.

const net = require("net");

const server = net.createServer((socket) => {
  socket.write("Hello Client!\n");
  socket.on("data", (data) => {
    console.log(`Client says: ${data}`);
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

// 5. Global Objects
// Global objects like __dirname, __filename, console, and setTimeout() are available everywhere.
console.log(__dirname); // Prints current directory
console.log(__filename); // Prints file name

// 6. OS Module
// Provides system-related functionalities like CPU info, memory usage, and OS type.
const os = require("os");

console.log(`Platform: ${os.platform()}`);
console.log(`Free Memory: ${os.freemem()}`);
console.log(`Total Memory: ${os.totalmem()}`);

// 7. HTTP Module
// The http module is used to create web servers.

const http = require("http");

const httpServer = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

httpServer.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});

// 8. Path Module
// Handles file and directory paths.

const path = require("path");
const e = require("express");

console.log(path.join(__dirname, "test", "file.txt"));
console.log(path.basename("/home/user/file.txt")); // file.txt
console.log(path.extname("index.html")); // .html

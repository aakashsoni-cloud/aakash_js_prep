# Streams in Node.js

Streams in Node.js are a powerful way to handle data efficiently.

Stream allow to handle large amount of data or data that comes from external sources incrementally rather 
than once.

This allow to make a efficiently, especially when dealing with large files, network communication, or real-time data processing. They allow you to process data chunk by chunk instead of loading everything into memory at once.

## **Types of Streams in Node.js**
Node.js provides four types of streams:

1. **Readable Streams** - Used for reading data (e.g., `fs.createReadStream()`).
2. **Writable Streams** - Used for writing data (e.g., `fs.createWriteStream()`).
3. **Duplex Streams** - Can be both readable and writable (e.g., `net.Socket`).
4. **Transform Streams** - A type of duplex stream that can modify or transform as data is written and read (e.g., `zlib.createGzip()`).

---

## **Working with Streams**
Streams work with events like:
- `data` - When a chunk of data is available.
- `end` - When there is no more data.
- `error` - If an error occurs.
- `finish` - When writing is completed (for writable streams).

### **1. Readable Stream Example**
```javascript
const fs = require('fs');

const readableStream = fs.createReadStream('input.txt', { encoding: 'utf8' });

readableStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readableStream.on('end', () => {
  console.log('No more data.');
});

readableStream.on('error', () => {
  console.log('Error occurs in fetching the data.');
});
```



### **2. Writable Stream Example**

```javascript
const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, world!\n');
writableStream.end(); // Marks the end of writing

writableStream.on('finish', () => {
  console.log('Write completed.');
});
```


### **3. Duplex Stream Example**

```javascript
const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writableStream);
```


```js

const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');

  // The `socket` is a Duplex Stream (both readable and writable)
  
  // Readable: Receive data from the client
  socket.on('data', (data) => {
    console.log('Received from client:', data.toString());

    // Writable: Send data back to the client (Echo)
    socket.write(`Echo: ${data}`);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });

  socket.on('error', (err) => {
    console.error('Socket error:', err);
  });
});

// Start the server on port 5000
server.listen(5000, () => {
  console.log('Server listening on port 5000');
});


```


### **4. Transform Stream Example**

```javascript
const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();
const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('input.txt.gz');

readableStream.pipe(gzip).pipe(writableStream);
```


## Chaining 

Chaining is a mechanism to connect output of one stream to another stream and create a chain of multiple stream operations. It is normally used with piping operations.

### Syntax

```js
const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writableStream);
```
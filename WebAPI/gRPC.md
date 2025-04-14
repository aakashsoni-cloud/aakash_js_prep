1. What is gRPC?
**gRPC (Google Remote Procedure Call)** is a high-performance **RPC framework** using HTTP/2 and Protocol Buffers (Protobuf).

**Think: “Fast function calls across the network”**

2. Types of RPCs
gRPC supports 4 interaction patterns:

    Type	                     Description                              Real World Use
    Unary	                Single request → single response	          Login API
    Server Streaming	    Single request → stream of responses	      Chat history
    Client Streaming	    Stream of requests → single response	      File upload
    Bidirectional Streaming	Stream of requests ↔ stream of responses	  Live chat, Games


3. Why use gRPC?
🚀 Fast (binary Protobuf + HTTP/2)
🔒 Built-in TLS support
🛠️ Code generation for client/server
💬 Streaming support
📦 Great for microservices


4. React + gRPC?
Browser ➡️ uses gRPC-Web.

5. gRPC Use Cases in React
💬 Real-time chat (BiDi)
📊 Live dashboards (Server streaming)
🕹️ Multiplayer games (BiDi)
📁 File upload (Client streaming)
🔍 Fast search/autocomplete (Unary)
📽️ Video/audio calls (BiDi)
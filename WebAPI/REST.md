# 1. REST (Representational State Transfer) – Core Concepts

✅ Key Principles (for a REST):
- **Stateless**: Every request is independent; no session stored on server.
- **Resources are key**: Everything is a resource (e.g., /users, /posts/123)
- **Standard HTTP methods**:
    GET: Read
    POST: Create -> Used to create a new document with secure data
    PUT: Update -> Used to replace an existing resource
    PATCH: Update -> Used to update only the specific properties
    DELETE: Remove -> Used to remove data from a database
    OPTION: Preflight (CORS) -> Used to request information from a target resource such as allow headers 
- **URL structure** is clean and predictable (e.g., /users/5/posts)
- Uses standard **HTTP status codes** (200 OK, 404 Not Found, 201 Created, etc.)


✅ RESTful = follows these principles
❌ RESTless = violates some or all REST principles

# 2. Why RESTful is generally preferred
- Scalability: Stateless = better load distribution
- Caching: GET requests can be cached
- Consistency: Predictable, uniform interface
- Interoperability: Follows web standard



3. When to go RESTless
- You need flexibility beyond REST constraints
- The system is more action-oriented (like GraphQL, RPC)
- You're building internal APIs where readability or simplicity matters more than standardization


🎯 Summary – Cheat Sheet

RESTful	                           RESTless
Resource-oriented (/users/1)	Action-oriented use gRPC (/getUser)
Uses all HTTP verbs properly	Often uses only POST
Stateless communication	        May store session state
Easy to cache and scale	        Harder to cache
Standardized & readable	        Custom, sometimes faster
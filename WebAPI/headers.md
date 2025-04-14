# 🌐 Web Headers Cheat Sheet (Caching, Security & Optimization)

## 🔒 Security Headers

| Header                      | Purpose                                         | Typical Value                                     | When to Use                        |
|----------------------------|--------------------------------------------------|---------------------------------------------------|-------------------------------------|
| `Content-Security-Policy`  | Prevents XSS and content injection              | `default-src 'self'`                              | Always – customize per app         |
| `Strict-Transport-Security`| Forces HTTPS connections                        | `max-age=63072000; includeSubDomains; preload`    | Always on HTTPS sites              |
| `X-Frame-Options`          | Prevents clickjacking                           | `DENY` or `SAMEORIGIN`                            | Always                             |
| `X-Content-Type-Options`   | Disables MIME-type sniffing                     | `nosniff`                                         | Always                             |
| `Referrer-Policy`          | Controls referrer header info                   | `no-referrer-when-downgrade`                      | Recommended                        |
| `Permissions-Policy`       | Restricts use of browser features               | `geolocation=(), camera=()`                       | Highly recommended                 |

---

## 📦 Caching Headers

| Header             | Purpose                                         | Typical Value                                     | When to Use                         |
|--------------------|--------------------------------------------------|---------------------------------------------------|--------------------------------------|
| `Cache-Control`    | Defines caching policy                          | `public, max-age=31536000, immutable`             | For static assets (JS, CSS, images) |
|                    |                                                  | `no-store`                                        | For sensitive/dynamic content       |
| `ETag`             | Identifies file version for smart caching       | `"abc123"`                                        | Optional, for dynamic content       |
| `Last-Modified`    | Used for conditional requests                    | `Tue, 08 Apr 2025 07:00:00 GMT`                   | With `If-Modified-Since` header     |
| `Expires`          | Legacy expiration time                          | `Tue, 01 Jan 2030 00:00:00 GMT`                   | Rarely used now                     |
| `Vary`             | Tells cache to vary response based on headers   | `Accept-Encoding`                                 | Required with compression           |

---

## ⚡ Optimization Headers

| Header              | Purpose                                   | Typical Value         | When to Use                          |
|---------------------|-------------------------------------------|-----------------------|---------------------------------------|
| `Content-Encoding`  | Indicates compression type (gzip/br)      | `gzip`, `br`          | For static/server-side compression   |
| `Transfer-Encoding` | Streams content in chunks                 | `chunked`             | APIs or streaming                    |
| `Connection`        | Controls TCP connection behavior          | `keep-alive`          | To reuse HTTP connection             |

---
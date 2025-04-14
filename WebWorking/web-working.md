when you type a URL (e.g., https://www.google.com) in your browser and press Enter, the following steps happen:
 
1. Browser Parses the URL
    Extracts protocol (HTTPS), domain (google.com), and path (/search).
2. Browser Checks Cache
    If the page is cached, it loads instantly.
    If not, it moves to DNS lookup.
3. DNS Lookup (Domain to IP Address)
    The browser converts google.com → 142.250.190.14 using:
        Browser cache
        OS cache
        Router cache
        ISP DNS server
        Recursive DNS lookup if needed  
4. TCP Connection (3-Way Handshake)
    Browser connects to Google’s server via TCP/IP:
    SYN → Client requests connection.
    SYN-ACK → Server acknowledges.
    ACK → Connection is established.
5. TLS Handshake (If HTTPS)
    SSL/TLS encryption ensures a secure connection.
    Browser verifies server certificate (from a trusted CA).
6. Browser Sends an HTTP Request
    Example:
    
    GET /search?q=MongoDB HTTP/1.1
    Host: www.google.com
    Requests the webpage from the server.

7. Server Processes the Request
    Load Balancer distributes traffic.
    Web Server (e.g., Nginx) handles requests.
    1. Forward Proxy -> hide the servers
    2. Reverse Proxy -> Hide the client like anonymous search
    Application Server runs backend logic.
    Database retrieves data if needed.
8. Server Sends an HTTP Response (HTML Only)
Example:
 

HTTP/1.1 200 OK
Content-Type: text/html
Contains only HTML.

9. Browser Requests Additional Resources (CSS, JS, Images)
    Browser scans HTML and sends separate requests for:
    CSS (styles.css) → Applies styles.
    JavaScript (app.js) → Runs interactivity.
    Images (logo.png) → Loads visuals.
10. Browser Renders the Page
    Parses HTML → Builds DOM (Document Object Model).
    Parses CSS → Applies styles (CSSOM).
    Executes JavaScript → Adds interactivity.
    Paints & Composites → Displays the final webpage.
11. Additional Requests & Optimizations
    Lazy loading loads images only when needed.
    Caching stores assets to speed up future visits.
# What is a service worker?
 A service worker is a script that runs in the background, separate from the web page.
 Used for caching, push notifications, background sync, offline support.

# Can a service worker manipulate the DOM?
 No. Service workers cannot directly access or manipulate the DOM.
 They communicate with web pages via postMessage or respond to network requests.

# Uses of a service worker 
    1. Offline access to web pages
    2. Background sync
    3. Push notifications
    4. Advanced caching for performance

# Limitations of Service Workers
    ⚠️ HTTPS Required – Service workers only work on secure origins (HTTPS or localhost).
    ⚠️ No Access to DOM – They cannot directly manipulate the DOM (use postMessage instead).
    ⚠️ Storage Limits – Browsers impose cache size limits.


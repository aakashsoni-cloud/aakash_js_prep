# XSS (Cross-Site Scripting) – Example with a Comment Box
1️⃣ Imagine You Have a Simple Comment Box
You create a webpage where users can post comments.
 
<input type="text" id="comment">
<button onclick="postComment()">Post Comment</button>
<div id="comments"></div>
And your JavaScript code to display the comment is:
 
```js
function postComment() {
    let comment = document.getElementById("comment").value;
    document.getElementById("comments").innerHTML += `<p>${comment}</p>`;  // ❌ DANGEROUS
}
```

2️⃣ A Normal User Posts a Safe Comment
User enters: "Hello, this is a nice blog!"
It is displayed normally:

<p>Hello, this is a nice blog!</p>

✅ This is fine because there is no malicious code.
 
3️⃣ A Hacker Exploits XSS with a Malicious Comment
Instead of a normal comment, a hacker types:
 
<script>alert('You are hacked!');</script>
Since your JavaScript directly injects this into the page using .innerHTML, it will be executed.
 
🚨 What Happens?
 
When another user visits the page, the hacker's script runs automatically in their browser.
This could be a harmless alert (just for demonstration), but a real hacker could:
Steal user cookies (document.cookie)
Modify the webpage content
Redirect users to a phishing site

4️⃣ How to Prevent XSS in the Comment Box?

✅ Fix 1: Sanitize User Input (Escape HTML Tags)
Instead of allowing <script>, convert special characters into safe text.
 
Modify your postComment function like this:

```js
function sanitizeInput(input) {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
 
function postComment() {
    let comment = document.getElementById("comment").value;
    let safeComment = sanitizeInput(comment);
    document.getElementById("comments").innerHTML += `<p>${safeComment}</p>`;  // ✅ SAFE
}
```

🔹 Now, if a hacker enters <script>alert('Hacked!')</script>, it will be displayed as:
 
Edit
<p>&lt;script&gt;alert('Hacked!')&lt;/script&gt;</p>

✅ The script is shown as text and does NOT execute!
 
✅ Fix 2: Use innerText Instead of innerHTML
A simpler and safer approach is to use innerText, which automatically treats input as text instead of HTML.
 
```js
function postComment() {
    let comment = document.getElementById("comment").value;
    let commentBox = document.getElementById("comments");
   
    let newComment = document.createElement("p");
    newComment.innerText = comment;  // ✅ SAFE
    commentBox.appendChild(newComment);
}
```
Now, even if a hacker enters <script>alert('Hacked!')</script>, it will be displayed as plain text instead of executing.
 
 
# What is CSRF (Cross-Site Request Forgery)?
🔴 CSRF tricks a logged-in user into making an unwanted request.
 
💡 Think of it like this:
 
You are logged into your bank and open a fake website.
That website automatically sends a request to your bank, transferring money to the attacker without you knowing.
🚨 Since you're already logged in, your bank thinks YOU made the request!
 
🛠️ How Does CSRF Work? (Example)
Imagine your bank has this money transfer API:
 
POST https://yourbank.com/transfer
Body: { "amount": 5000, "to": "hacker_account" }
If a user is logged in, this request automatically goes through.
 
Now, a hacker sends you an email with this hidden request:
 
<img src="https://yourbank.com/transfer?amount=5000&to=hacker">
When you open the email, your browser automatically makes this request, and 💰 money is stolen.
 
🛡️ How to Prevent CSRF in JavaScript?
✅ 1. Use CSRF Tokens
A CSRF token is a secret value that must be sent with every request.
 
The server only processes requests with a valid token.
 
<input type="hidden" name="csrf_token" value="random_token_here">
 
✅ 2. Use SameSite Attribute in Cookies
Prevent browsers from sending cookies on cross-site requests:
 
Set-Cookie: session_id=xyz; SameSite=Strict
 
✅ 3. Use CORS (Cross-Origin Resource Sharing)
Restrict which websites can send requests to your API:
 
Access-Control-Allow-Origin: https://yourwebsite.com
 
✅ 4. Don't Use GET for Sensitive Actions
Avoid actions like money transfers using GET requests. Instead, use POST with authentication.
 
 
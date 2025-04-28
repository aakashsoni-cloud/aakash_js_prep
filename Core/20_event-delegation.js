/* ✅ Event Delegation
Event delegation is a pattern that uses event propagation (usually bubbling) to handle events at a 
higher level in the DOM, 
rather than attaching individual listeners to each child element.

🎯 Why use it?
Efficient: fewer event listeners

Useful for dynamic content (e.g., adding list items dynamically)
*/

document.getElementById('event-delegation-list').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      console.log('Clicked:', e.target.textContent);
    }
  });
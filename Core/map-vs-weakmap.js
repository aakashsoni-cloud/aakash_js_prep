const userPreferences = new Map();
userPreferences.set('theme', 'dark');
userPreferences.set('fontSize', '14px');
userPreferences.set('language', 'en');

console.log(userPreferences.get('theme')); // 'dark'

// Iterate over preferences
for (const [key, value] of userPreferences.entries()) {
    console.log(`${key}: ${value}`);
}


// WeakMap


const elementMetadata = new WeakMap();

const button = document.getElementById('clickMe');
elementMetadata.set(button, { clicked: 0 });

// Increment the click count
button.addEventListener('click', () => {
    const data = elementMetadata.get(button);
    data.clicked++;
    console.log(`Button clicked ${data.clicked} times`);
});

// When `button` is removed from the DOM, its metadata will be garbage collected.

// Predefined sustainable lifestyle tips
const tips = [
    "Reduce, reuse, and recycle to minimize waste.",
    "Use energy-efficient light bulbs to save energy.",
    "Turn off electronics when not in use.",
    "Opt for public transportation or carpool to reduce emissions.",
    "Support renewable energy sources like solar or wind power.",
    // More tips as needed...
];

// Function to handle login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple login validation
    if (username === 'user' && password === 'password') {
        // Hide the login section and show the tip section
        document.getElementById('login-section').classList.add('hidden');
        document.getElementById('tip-section').classList.remove('hidden');
        generateTip(); // Display a random tip on login
    } else {
        document.getElementById('login-error').textContent = 'Invalid username or password!';
    }
}

// Function to generate a random sustainable tip
function generateTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    document.getElementById('tip-display').innerHTML = `<p>${tips[randomIndex]}</p>`;
}

// Function to navigate to the Home Page
function goHome() {
    window.location.href = 'home.html'; // Navigate to the home page
}

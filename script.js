// Get the button and body elements
const toggleButton = document.getElementById('darkModeToggle');
const bodyElement = document.body;

// Check for saved user preference in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    bodyElement.classList.add('dark-mode');
    toggleButton.textContent = 'Switch to Light Mode';
}

// Add an event listener for the button to toggle dark mode
toggleButton.addEventListener('click', function() {
    bodyElement.classList.toggle('dark-mode'); // Toggle the dark-mode class on the body

    // Change the button text based on the current mode
    if (bodyElement.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
        localStorage.setItem('darkMode', 'enabled'); // Save preference
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
        localStorage.setItem('darkMode', 'disabled'); // Save preference
    }
});

 

// Add functionality to the "I'm Feeling Lucky" button
document.getElementById('lucky-button').addEventListener('click', function () {
    window.location.href = 'https://www.google.com/doodles';
});

// Add functionality to the search bar
document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    const query = document.getElementById('search-input').value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});

// Add functionality to the "Today's Googly" link
document.getElementById('googly-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = 'https://www.google.com/search?q=first-ever+women%27s+ODI+World+Cup';
});

// Add functionality to the language links
const languageLinks = document.querySelectorAll('.language-link');
languageLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        const lang = this.getAttribute('data-lang');
        window.location.href = `https://www.google.com/?hl=${lang}`;
    });
});

const appsIcon = document.querySelector('.apps-icon');
const appsDropdown = document.querySelector('.apps-dropdown');

appsIcon.addEventListener('click', () => {
    appsDropdown.style.display = appsDropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
    if (!appsIcon.contains(event.target) && !appsDropdown.contains(event.target)) {
        appsDropdown.style.display = 'none';
    }
});
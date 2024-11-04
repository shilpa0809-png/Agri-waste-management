document.addEventListener("DOMContentLoaded", () => {
    // Display the Intro section initially
    showSection('intro');

    // Add click event listeners to navigation links
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetSectionId = link.getAttribute('href').substring(1); // Remove the "#" from the href
            showSection(targetSectionId);
        });
    });
});


// Accordion Interaction
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const accordion = this.parentElement;
        const content = accordion.querySelector('.accordion-content');

        // Toggle active class
        accordion.classList.toggle('active');

        // Handle max-height for accordion content
        if (accordion.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = 0;
        }
    });
});



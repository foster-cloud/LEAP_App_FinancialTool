// Accordion 
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const accordion = this.parentElement;
        accordion.classList.toggle('active');
    });
});


// btn close

// Get the elements
const openDivBtn = document.getElementById('issue-info-btn');
const closeDivBtn = document.getElementById('code-info-container-close');
const newDiv = document.getElementById('code-info-container');

// Show the new div when clicking the open button
openDivBtn.addEventListener('click', function() {
    newDiv.style.display = 'flex';
});

// Hide the new div when clicking the close icon
closeDivBtn.addEventListener('click', function() {
    newDiv.style.display = 'none';
});



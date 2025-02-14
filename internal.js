// // Select all tabs and contents
// const tabs = document.querySelectorAll('.tab');
// const contents = document.querySelectorAll('.tab-content');

// // Add click event to each tab
// tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         // Remove active class from all tabs and contents
//         tabs.forEach(t => t.classList.remove('active'));
//         contents.forEach(c => c.classList.remove('active'));

//         // Add active class to the clicked tab and corresponding content
//         tab.classList.add('active');
//         document.getElementById(`content-${tab.dataset.tab}`).classList.add('active');
//     });
// });

// 02
// // Set the first tab as active by default
// document.querySelector('.tab[data-tab="1"]').classList.add('active');
// document.getElementById('content-1').classList.add('active');


// document.querySelectorAll('.tab').forEach(tab => {
//     tab.addEventListener('click', function() {
//         // Hide all tab content sections
//         document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');
        
//         // Get the corresponding content ID based on the clicked tab's data attribute
//         const tabNumber = tab.getAttribute('data-tab');
//         document.getElementById(`content-${tabNumber}`).style.display = 'block';
//     });
// });


// 03
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove('active'));
    
    // Add active class to clicked tab
    tab.classList.add('active');
    
    // Hide all content
    contents.forEach((content) => content.style.display = 'none');
    
    // Show the respective content
    const contentId = tab.getAttribute('data-tab');
    document.querySelector(`#content-${contentId}`).style.display = 'flex';
  });
});



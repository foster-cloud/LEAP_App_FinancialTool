// // Function to handle 'Select All' functionality
// document.querySelector('.checkbox-select-all svg').addEventListener('click', function() {
//     const checkboxes = document.querySelectorAll('.open_list_row svg');
//     const closeButton = document.querySelector('.open_list-select_all button');

//     // Toggle selection of all checkboxes
//     checkboxes.forEach(checkbox => {
//         checkbox.classList.toggle('selected');
//     });

//     // Activate Close button if at least one checkbox is selected
//     const anySelected = document.querySelectorAll('.open_list_row svg.selected').length > 0;
//     closeButton.disabled = !anySelected;
//     updateCount();
// });

// // Function to handle individual checkbox selection
// document.querySelectorAll('.open_list_row svg').forEach((checkbox, index) => {
//     checkbox.addEventListener('click', function() {
//         checkbox.classList.toggle('selected');
//         const closeButton = document.querySelector('.open_list-select_all button');

//         // Activate Close button if at least one checkbox is selected
//         const anySelected = document.querySelectorAll('.open_list_row svg.selected').length > 0;
//         closeButton.disabled = !anySelected;
//         updateCount();
//     });
// });

// // Function to clear selected open list items when close button is clicked
// document.querySelector('.open_list-select_all button').addEventListener('click', function() {
//     const selectedItems = document.querySelectorAll('.open_list_row svg.selected');

//     selectedItems.forEach(item => {
//         item.closest('.open_list_row').remove(); // Remove selected row
//     });

//     // Deactivate Close button after clearing
//     this.disabled = true;
//     updateCount();
// });

// // Function to update the count and dummy timestamp
// function updateCount() {
//     const count = document.querySelectorAll('.open_list_row').length;
//     document.querySelector('.count-timer-title').innerText = `Count ${count}`;

//     // Update dummy timestamp for each remaining open_list_row
//     document.querySelectorAll('.open_list-time-stamp').forEach((timestamp, index) => {
//         timestamp.innerText = `${2 + index}:24 min ago`; // Dummy update
//     });
// }


// Above no working FYI  
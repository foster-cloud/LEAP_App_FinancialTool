// Java Script handing the Toggle Interaction -->

document.addEventListener('DOMContentLoaded', function() {
    const collapseIcon = document.getElementById('side-menu__action--collapse');
    const expandIcon = document.getElementById('side-menu__action--expand');
    const menuTitle = document.getElementById('side-menu__action__title');

    collapseIcon.addEventListener('click', function() {
        collapseIcon.style.display = 'none';
        expandIcon.style.display = 'inline';
        menuTitle.style.display = 'inline';
        // Additional code to collapse the side menu if needed
    });

    expandIcon.addEventListener('click', function() {
        expandIcon.style.display = 'none';
        collapseIcon.style.display = 'inline';
        menuTitle.style.display = 'none';
        // Additional code to expand the side menu if needed
    });
});


// five start : Favorite > Hover and Selected

document.addEventListener("DOMContentLoaded", () => {
    let stars = document.querySelectorAll(".favorite-star");

    stars.forEach(star => {
        let isSelected = false;

        star.addEventListener("click", () => {
            isSelected = !isSelected;
            updateStar(star, isSelected);
        });

        star.addEventListener("mouseover", () => {
            if (!isSelected) {
                star.classList.add("hovered");
            }
        });

        star.addEventListener("mouseout", () => {
            if (!isSelected) {
                star.classList.remove("hovered");
            }
        });
    });

    function updateStar(star, isSelected) {
        if (isSelected) {
            star.classList.add("selected");
            star.classList.remove("hovered");
        } else {
            star.classList.remove("selected");
        }
    }
});




document.addEventListener("DOMContentLoaded", function() {
    // Select the more link
    var moreLink = document.querySelector('.more-link');

    // Select the additional content
    var additionalContent = document.querySelector('.additional-content');

    // Add click event listener to the more link
    moreLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        additionalContent.style.display = 'block'; // Display the additional content
        moreLink.style.display = 'none'; // Hide the more link
    });
});

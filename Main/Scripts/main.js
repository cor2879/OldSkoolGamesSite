$(document).ready(function() {
    $('.menu-button').click(function() {
        $('nav ul').toggle(); // Simple show/hide toggle for the menu
    });

    // Handle category filter button clicks
    $('.filter-btn').click(function() {
        // Remove active class from all buttons and add to the clicked button
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        // Get the category to filter by
        var category = $(this).data('category');

        // Show all updates if 'all' is selected, otherwise filter by category
        if (category === 'all') {
            $('.update-item').show();
        } else {
            $('.update-item').hide();
            $('.update-item[data-category="' + category + '"]').show();
        }
    });
});
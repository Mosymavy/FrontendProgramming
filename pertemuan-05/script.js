$(document).ready(function() {
    $('.question').on('click', function() {
        $('.answer').not($(this).next('.answer')).slideUp();
        
        $(this).next('.answer').slideToggle();
    });
});
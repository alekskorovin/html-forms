document.querySelectorAll('.box-model').forEach(function(element) {
    element.addEventListener('mouseover', function(event) {
        element.classList.add('hover');
        event.stopPropagation();

    });
    element.addEventListener('mouseout', function(event) {
        element.classList.remove('hover');
        event.stopPropagation();
    });
});
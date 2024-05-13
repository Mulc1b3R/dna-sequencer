const images = document.querySelectorAll('img');

let draggedImg = null;

images.forEach(img => {
    img.addEventListener('dragstart', function(event) {
        draggedImg = event.target;
    });

    img.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    img.addEventListener('drop', function(event) {
        if (draggedImg) {
            event.preventDefault();
            if (event.target !== draggedImg) {
                const temp = event.target.src;
                event.target.src = draggedImg.src;
                draggedImg.src = temp;
            }
        }
    });
});
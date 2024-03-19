document.addEventListener('scroll', function () {
    var scrollThreshold = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollTop = document.documentElement.scrollTop;

    var changeThreshold = .5;

    if (scrollTop / scrollThreshold > changeThreshold) {
        document.body.style.backgroundColor = "rgb(189, 60, 51)";
    } else {
        document.body.style.backgroundColor = "white";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.clickable-image');

    images.forEach(image => {
        image.addEventListener('click', function () {
            this.style.opacity = 1;
        });
    });
});

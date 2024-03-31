const imageContainer = document.querySelector('.image-container');

imageContainer.addEventListener('mouseenter', function() {
    this.classList.add('zoomed'); /* Mouse üstüne gelindiğinde yakınlaşma sınıfını ekler */
});

imageContainer.addEventListener('mouseleave', function() {
    this.classList.remove('zoomed'); /* Mouse çekildiğinde yakınlaşma sınıfını kaldırır */
});
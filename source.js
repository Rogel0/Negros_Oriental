var currentImage = 0;
        var images = document.querySelectorAll('.carousel img');
        var buttons = document.querySelectorAll('.carousel button');

        function showImage(n) {
            images[currentImage].classList.remove('active');
            currentImage = (n + images.length) % images.length;
            images[currentImage].classList.add('active');
        }

        function prevImage() {
            showImage(currentImage - 1);
        }

        function nextImage() {
            showImage(currentImage + 1);
        }

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.display = 'block';
        }

        showImage(currentImage);
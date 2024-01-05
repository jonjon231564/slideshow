const image1 = document.getElementById("dog1");
const image2 = document.getElementById("dog2");
const image3 = document.getElementById("dog3");
let isOpaque = true;
image2.style.opacity = 0;
image3.style.opacity = 0;
image1.style.opacity = 1;
let i = 1;
let j = 2

function changeImage() {
    if (i === 1) {
        image1.style.opacity = 0;
        image2.style.opacity = 1;
    } else if (i === 2) {
        image2.style.opacity = 0;
        image3.style.opacity = 1;
    } else if (i === 3) {
        image3.style.opacity = 0;
        image1.style.opacity = 1;
    }

    i++;
    j++;
    if (i > 3) {
        i = 1;
    }
    if (j > 3) {
        j = 1;
    }
}





setInterval(changeImage, 2000);
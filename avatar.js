function changeAvatar(layer, image) {
    document.getElementById(layer).src = "imgs/" + image;
}

function downloadAvatar() {
    html2canvas(document.querySelector("#avatar")).then(canvas => {
        let link = document.createElement("a");
        link.download = 'avatar.png';
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}
function filterGender(gender) {
    const hairImages = document.querySelectorAll("#hair-section img");
    const eyesImages = document.querySelectorAll("#eyes-section img");

    hairImages.forEach(img => {
        img.style.display = 'none';
    });
    eyesImages.forEach(img => {
        img.style.display = 'none';
    });

    if (gender === 'female') {
        hairImages.forEach((img, index) => {
            if (index < 4) {
                img.style.display = 'block';
            }
        });
        eyesImages.forEach((img, index) => {
            if (index >= 4) {
                img.style.display = 'block';
            }
        });
    } else {
        hairImages.forEach((img, index) => {
            if (index >= 4) {
                img.style.display = 'block';
            }
        });
        eyesImages.forEach((img, index) => {
            if (index < 4) {
                img.style.display = 'block';
            }
        });
    }
}

function changeAvatar(layer, image) {
    document.getElementById(layer).src = "imgs/" + image;
}

function downloadAvatar() {
    const downloadButton = document.getElementById("download-btn");
    
    // Start downloading animation
    downloadButton.classList.add("downloading");
    downloadButton.textContent = "Downloading...";

    html2canvas(document.querySelector("#avatar")).then(canvas => {
        let link = document.createElement("a");
        link.download = 'avatar.png';
        link.href = canvas.toDataURL("image/png");
        link.click();

        // Show success animation after download
        downloadButton.classList.remove("downloading");
        downloadButton.classList.add("success");
        downloadButton.textContent = "Success🎉!!";
        
        // Reset button after a delay
        setTimeout(() => {
            downloadButton.classList.remove("success");
            downloadButton.textContent = "Download";
        }, 2000); // Resets the button text after 2 seconds
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

// Event listener for the download button
document.getElementById("download-btn").addEventListener("click", downloadAvatar);

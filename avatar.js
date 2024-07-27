function changeAvatar(layer, image) {
    document.getElementById(layer).src = `images/${image}`;
}

function downloadAvatar() {
    html2canvas(document.getElementById('avatar')).then(canvas => {
        let link = document.createElement('a');
        link.download = 'avatar.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

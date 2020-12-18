function changeImageParam() {
    const width = document.getElementById("img-width").value;
    const height = document.getElementById("img-height").value;
    const border = document.getElementById("img-border").value;
    const alt = document.getElementById("img-alt").value;
    const img = document.getElementById("image");
    img.width = width || 300;
    img.height = height || 200;
    img.border = border || 1;
    img.alt = alt || "Image";
}

function swichImage() {
    const random = Math.floor(Math.random() * 4) + 1;
    const img = document.getElementById("image");
    img.src = './images/' + random + '.jpg';
}
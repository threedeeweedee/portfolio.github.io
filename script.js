// Function to open the full-size image when the "after" image is clicked
function openImage(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');

    modal.style.display = "block";
    modalImage.src = imageSrc;
}

// Function to close the modal when clicked outside the image
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

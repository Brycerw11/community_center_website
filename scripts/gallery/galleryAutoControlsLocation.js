const alignmentImage = document.getElementById("PhotoGalleryPhoto");
const movedElement = document.getElementById("photoGalleryControls");

function updateWindowSize() {
    // Set the alignment-width variable
    // movedElement.style.setProperty('--alignment-width', alignmentImage.width); 

    movedElement.style.setProperty('--window-width', window.innerWidth);
    movedElement.style.setProperty('--element-width', movedElement.style.width);

}


  
updateWindowSize();
window.addEventListener("resize", updateWindowSize);
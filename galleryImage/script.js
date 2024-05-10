document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const gallery = document.getElementById("image-gallery");

    const images = [
        { src: "media/sport14.jpeg", category: "sport" },
        { src: "media/sport13.jpeg", category: "sport" },
        { src: "media/sport99.jpeg", category: "sport" },
        { src: "media/arc1.jpeg", category: "architecture" },
        { src: "media/arc2.jpeg", category: "architecture" },
        { src: "media/arc3.jpeg", category: "architecture" },
        { src: "media/sport44.jpeg", category: "sport" },
        { src: "media/nature1.jpeg", category: "nature" },
        { src: "media/nature2.jpeg", category: "nature" },
        { src: "media/nature3.jpeg", category: "nature" },
        { src: "media/nature4.jpeg", category: "nature" },
        { src: "media/nature5.jpeg", category: "nature" },
        { src: "media/sport11.jpeg", category: "sport" },
        { src: "media/sport10.jpeg", category: "sport" },
        { src: "media/sport9.jpeg", category: "sport" },
        { src: "media/sport8.jpeg", category: "sport" },
        { src: "media/sport2.jpeg", category: "sport" },
        { src: "media/sport1.jpeg", category: "sport" },
        { src: "media/nature6.jpeg", category: "nature" },
        { src: "media/nature7.jpeg", category: "nature" },
        { src: "media/nature8.jpeg", category: "nature" },
        { src: "media/sport7.jpeg", category: "sport" },
        { src: "media/sport6.jpeg", category: "sport" },
        { src: "media/sport5.jpeg", category: "sport" },
        { src: "media/sport3.jpeg", category: "sport" },
        { src: "media/nature9.jpeg", category: "nature" },
        { src: "media/nature10.jpeg", category: "nature" },
        { src: "media/arc4.jpeg", category: "architecture" },
        { src: "media/animal2.jpeg", category: "animals" },
        { src: "media/animal3.jpeg", category: "animals" },
        { src: "media/animal4.jpeg", category: "animals" },
        { src: "media/animal5.jpeg", category: "animals" },
        { src: "media/animal6.jpeg", category: "animals" },
        { src: "media/arc5.jpeg", category: "architecture" },
        { src: "media/arc6.jpeg", category: "architecture" },
        { src: "media/animal7.jpeg", category: "animals" },
        { src: "media/animal8.jpeg", category: "animals" },

    ];
    function displayImages(category) {
        gallery.innerHTML = "";
        if (category === "all") {
            images.forEach(image => createImage(image.src));
        } else {
            const filteredImages = images.filter(image => image.category === category);
            filteredImages.forEach(image => createImage(image.src));
        }
    }
    
    function createImage(src, caption) {
        const imageItem = document.createElement("div");
        imageItem.classList.add("image-item");
    
        const img = document.createElement("img");
        img.src = src;
    
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImage.src = this.src;
            captionText.innerHTML = caption;
        });
    
        imageItem.appendChild(img);
        gallery.appendChild(imageItem);
    }


    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");
            displayImages(category);
        });
    });
    displayImages("all");
});

document.addEventListener("DOMContentLoaded", function() {
    galleryImageContainer.innerHTML = ""
    galleryImagesArray.map((item, index)=> {
        let divElement = document.createElement('div');
        divElement.classList.add('gallery_card')
        divElement.setAttribute("onmouseenter", `galleryMouseEnter${index+1}()`);
        divElement.setAttribute("onmouseleave", `galleryMouseLeave${index+1}()`);
        divElement.innerHTML = `
            <img class="gallery_card_image" id="card_image_${index+1}" src=${item} alt="" srcset="">
            <div class="gallery_card_content" id="gallery_card_content_${index+1}">
                <h4 style="
                    margin: 0px; 
                    font-size: 30px;
                    font-weight: 700;
                    text-transform: capitalize;">Simorgh Hotel</h4>
                <span style="font-size: 16px;">Building</span>
            </div>
        `
        galleryImageContainer.appendChild(divElement);
    })
})
let galleryImageContainer = document.querySelector('.gallery_card_wrapper');
const galleryImagesArray = [
    "https://demo.phlox.pro/hotel/wp-content/uploads/sites/239/2020/11/man-pan-KTSYy-3XVSo-unsplash-1590x1590.jpg",
    "https://demo.phlox.pro/hotel/wp-content/uploads/sites/239/2020/11/roberto-nickson-RiOhen_OLPs-unsplash-1590x1590.jpg",
    "https://demo.phlox.pro/hotel/wp-content/uploads/sites/239/2020/11/pexels-carmen-cobo-1103808-1590x1590.jpg",
    "https://demo.phlox.pro/hotel/wp-content/uploads/sites/239/2020/11/taylor-simpson-Z8s3PRQVuUk-unsplash-1590x1590.jpg",
    "https://demo.phlox.pro/hotel/wp-content/uploads/sites/239/2020/11/pexels-pixabay-262048-1590x1590.jpg",
    "https://demo.phlox.pro/hotel/wp-content/uploads/sites/239/2020/11/patrick-robert-doyle-AH8zKXqFITA-unsplash-1190x1190.jpg",
    "https://demo.phlox.pro/hotel/wp-content/uploads/sites/239/2020/11/grant-durr-MMAR9BUs0FU-unsplash-1590x1590.jpg",
    "https://demo.phlox.pro/hotel/wp-content/uploads/sites/239/2020/11/pexels-pixabay-262048-1590x1590.jpg"
]

document.addEventListener("DOMContentLoaded", function() {
    galleryImageContainer.innerHTML = ""
    galleryImagesArray.map((item, index)=> {
        let divElement = document.createElement('div');
        divElement.classList.add('gallery_card')
        divElement.innerHTML = `
            <img class="gallery_card_image" src=${item} alt="" srcset="">
            <div class="gallery_card_content">
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
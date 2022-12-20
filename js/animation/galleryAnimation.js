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

function galleryMouseEnter1() {
    tl.to(`#card_image_1`, 0.15, {
        width: '110%',
        height: '110%',
        zIndex: 1
    }).to(`#gallery_card_content_1`, 0.15, {
        opacity: 1,
        bottom: '9%'
    })
}
function galleryMouseEnter2() {
    tl.to(`#card_image_2`, 0.15, {
        width: '110%',
        height: '110%',
        zIndex: 1
    }).to(`#gallery_card_content_2`, 0.15, {
        opacity: 1,
        bottom: '9%'
    })
}
function galleryMouseEnter3() {
    tl.to(`#card_image_3`, 0.15, {
        width: '110%',
        height: '110%',
        zIndex: 1
    }).to(`#gallery_card_content_3`, 0.15, {
        opacity: 1,
        bottom: '9%'
    })
}
function galleryMouseEnter4() {
    tl.to(`#card_image_4`, 0.15, {
        width: '110%',
        height: '110%',
        zIndex: 1
    }).to(`#gallery_card_content_4`, 0.15, {
        opacity: 1,
        bottom: '9%'
    })
}
function galleryMouseEnter5() {
    tl.to(`#card_image_5`, 0.15, {
        width: '110%',
        height: '110%',
        zIndex: 1
    }).to(`#gallery_card_content_5`, 0.15, {
        opacity: 1,
        bottom: '9%'
    })
}
function galleryMouseEnter6() {
    tl.to(`#card_image_6`, 0.15, {
        width: '110%',
        height: '110%',
        zIndex: 1
    }).to(`#gallery_card_content_6`, 0.15, {
        opacity: 1,
        bottom: '9%'
    })
}
function galleryMouseEnter7() {
    tl.to(`#card_image_7`, 0.15, {
        width: '110%',
        height: '110%',
        zIndex: 1
    }).to(`#gallery_card_content_7`, 0.15, {
        opacity: 1,
        bottom: '9%'
    })
}
function galleryMouseEnter8() {
    tl.to(`#card_image_8`, 0.15, {
        width: '110%',
        height: '110%',
        zIndex: 1
    }).to(`#gallery_card_content_8`, 0.15, {
        opacity: 1,
        bottom: '9%'
    })
}

function galleryMouseLeave1() {
    tl.to(`#gallery_card_content_1`, 0.15, {
        opacity: 0,
        bottom: 0
    }).to(`#card_image_1`, 0.15, {
        width: '100%',
        height: '100%',
        zIndex: 0
    })
}
function galleryMouseLeave2() {
    tl.to(`#gallery_card_content_2`, 0.15, {
        opacity: 0,
        bottom: 0
    }).to(`#card_image_2`, 0.15, {
        width: '100%',
        height: '100%',
        zIndex: 0
    })
}
function galleryMouseLeave3() {
    tl.to(`#gallery_card_content_3`, 0.15, {
        opacity: 0,
        bottom: 0
    }).to(`#card_image_3`, 0.15, {
        width: '100%',
        height: '100%',
        zIndex: 0
    })
}
function galleryMouseLeave4() {
    tl.to(`#gallery_card_content_4`, 0.15, {
        opacity: 0,
        bottom: 0
    }).to(`#card_image_4`, 0.15, {
        width: '100%',
        height: '100%',
        zIndex: 0
    })
}
function galleryMouseLeave5() {
    tl.to(`#gallery_card_content_5`, 0.15, {
        opacity: 0,
        bottom: 0
    }).to(`#card_image_5`, 0.15, {
        width: '100%',
        height: '100%',
        zIndex: 0
    })
}
function galleryMouseLeave6() {
    tl.to(`#gallery_card_content_6`, 0.15, {
        opacity: 0,
        bottom: 0
    }).to(`#card_image_6`, 0.15, {
        width: '100%',
        height: '100%',
        zIndex: 0
    })
}
function galleryMouseLeave7() {
    tl.to(`#gallery_card_content_7`, 0.15, {
        opacity: 0,
        bottom: 0
    }).to(`#card_image_7`, 0.15, {
        width: '100%',
        height: '100%',
        zIndex: 0
    })
}
function galleryMouseLeave8() {
    tl.to(`#gallery_card_content_8`, 0.15, {
        opacity: 0,
        bottom: 0
    }).to(`#card_image_8`, 0.15, {
        width: '100%',
        height: '100%',
        zIndex: 0
    })
}
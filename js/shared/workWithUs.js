let workWithUsAnimatable = document.querySelector('.work_with_us_animatable')
let homePageLandingImage = document.querySelector('.section_1_image')

let workWithUsAnimatableAnimated = false
let homePageLandingImageAnimated = false

if(ScrollTrigger.isInViewport(homePageLandingImage) && !homePageLandingImageAnimated) {
    homePageLandingImageAnimated = true
    tl.to('.section_1_image', 2,{
        height: '100%',
        opacity: 1
    })
    tl.to('.section_1_content', 2,{
        height: '100%',
        opacity: 1,
        y: 0
    })
}

function scrollTriggerOnUpdate() {
    if(ScrollTrigger.isInViewport(workWithUsAnimatable) && !workWithUsAnimatableAnimated) {
        workWithUsAnimatableAnimated = true
        tl.to('.work_with_us_animatable', 1.8,{
            height: '100%',
        })
        tl.to('.work_with_us_content', 2,{
            y: 0,
            opacity: 1
        }, 2)
    }
    if(ScrollTrigger.isInViewport(homePageLandingImage) && !homePageLandingImageAnimated) {
        homePageLandingImageAnimated = true
        tl.to('.section_1_image', 2,{
            height: 500,
            opacity: 1
        })
        tl.to('.section_1_content', 2,{
            height: '100%',
            opacity: 1,
            y: 0
        })
        // tl.to('.work_with_us_content', 2,{
        //     y: 0,
        //     opacity: 1
        // }, 1)
    }
}
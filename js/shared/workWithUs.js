let workWithUsImage = document.querySelector('.work_with_us_container')

ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: updateValues
  });

function updateValues() {
    if(ScrollTrigger.isInViewport(workWithUsImage)) {
        tl.to('.work_with_us_image', 2,{
            height: '100%',
        })
    }
}

updateValues()
const MoveInRight = document.querySelectorAll('.move-in-right')
const MoveInUp = document.querySelectorAll('.move-in-up')
const MoveInLeft = document.querySelectorAll('.move-in-left')
const options = {
    root:null,
    threshold:0,
    rootMargin:"-300px 0px -300px 0px",
}
const observer = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){return}
        entry.target.classList.add('add-animation');
        console.log(entry.target)
        observer.unobserve(entry.target)
    })
},options)

MoveInRight.forEach(item => observer.observe(item))
MoveInLeft.forEach(item => observer.observe(item))
MoveInUp.forEach(item => observer.observe(item))

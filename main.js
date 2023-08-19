const article = document.querySelector('article');
const headerIntro = document.querySelector('.header-intro h1');
const skillsDom = document.querySelector('.skills');
const about = document.querySelector('.about');
const sections = document.querySelectorAll('section');
const skills = ['HTML', "CSS", "JavaScript", "VueJs", "BootStrap", "Github", "Responsive Design", "Java Basics",
    "SpringBoot Basics"
]
console.log(article)
document.addEventListener('DOMContentLoaded', () => {
    article.classList.add('animate')
    // headerIntro.classList.add('animate')
})
function setSkill() {
    skills.forEach((e) => {
        const skill = document.createElement('span');
        skill.classList.add('skill');
        skill.textContent = e
        skillsDom.append(skill)
    })
}
setSkill();
const sectionObj = {
    root: null,
    threshold: 0,
    rootMargin:'100px'
};
function sectionFunc(entries, observer) {
    console.log(entries)
    entries.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.add('animate-section');
            sectionObserver.unobserve(e.target)
        }
    })
}
const sectionObserver = new IntersectionObserver(sectionFunc, sectionObj);
sections.forEach((e) => {
    sectionObserver.observe(e)
})

function animateProjects() {
    var projects = document.querySelectorAll('.project');
    projects.forEach(function(project) {
        var projectPosition = project.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;
        
        if(projectPosition < screenPosition) {
            project.classList.add('show');
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', animateProjects);
window.addEventListener('load', animateProjects);
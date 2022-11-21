const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});   //läuft an sobald sich state eines der untersuchten elemente verändert

const hiddenElements = document.querySelectorAll('.hidden'); //holt alle elemente der klasse hidden
hiddenElements.forEach((el) => observer.observe(el));
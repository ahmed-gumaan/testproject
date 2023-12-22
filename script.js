document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); 
        window.open(this.getAttribute('href'), '_blank'); 
    });
});
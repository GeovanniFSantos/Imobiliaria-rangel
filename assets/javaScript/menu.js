const fanAvicon = document.getElementsByClassName('fa');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')

}

fanAvicon.addEventListener('click', toggleMenu)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        const params = new URLSearchParams(formData).toString();

        fetch(form.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params
        })
        .then(response => {
            if (response.ok) {
                alert('Your message has been sent successfully!');
                form.reset(); 
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('There was an error sending your message. Please try again.');
        });
    });
});
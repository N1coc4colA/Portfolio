
// Navigation between sections
const navLinks = document.querySelectorAll('.nav-link');
const easyLinks = document.querySelectorAll('.easy-link');
const sections = document.querySelectorAll('section');

const nbtn = document.getElementById("nav-btn");
const container = document.getElementById("nav-ctr");

nbtn.addEventListener('click', function(e) {
    e.preventDefault();

    container.classList.toggle('display');
});

easyLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetSection = this.getAttribute('data-section');

        // Update active links
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        navLinks.forEach(lnk => {
            if (lnk.getAttribute('data-section') === targetSection) {
                lnk.classList.add('active');
            }
        });

        // Show proper section
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetSection) {
                section.classList.add('active');
            }
        });

        // Update URL
        window.location.hash = targetSection;
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Update active links
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');

        // Show proper section
        const targetSection = this.getAttribute('data-section');
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetSection) {
                section.classList.add('active');
            }
        });

        // Update URL
        window.location.hash = targetSection;
    });
});

// Handle URL's #
window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
        const targetLink = document.querySelector(`.nav-link[data-section="${hash}"]`);
        if (targetLink) {
            targetLink.click();
        }
    }
});

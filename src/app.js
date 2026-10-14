// Mobile dropdown menu toggle
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

if (toggleBtn && dropDownMenu) {
    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');
        if (toggleBtnIcon) {
            toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        }
    };
}

// Active nav link on click
document.querySelectorAll('.nav_link').forEach(navLinkEl => {
    navLinkEl.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        navLinkEl.classList.add('active');
    });
});

// Collapsible case-study sections
document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', function () {
        const parent = this.parentNode;
        const id = parent.getAttribute('id');
        const parentSection = document.getElementById(id);
        if (parentSection) parentSection.classList.toggle('active');
    });
});

// Image lightbox (case-study pages). Safe no-op where the modal isn't present.
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('img01');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];

if (modal && modalImg) {
    document.querySelectorAll('[id^="myImg"]').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.onclick = function () {
            modal.style.display = 'block';
            modalImg.src = this.src;
            if (captionText) captionText.innerHTML = this.alt;
        };
    });
    if (closeBtn) closeBtn.onclick = function () { modal.style.display = 'none'; };
    modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
}

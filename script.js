// https://okromchedlishvili.github.io/
// Get-ChildItem *.avif | Select-Object Name | ConvertTo-Json | Out-File -Encoding utf8 ../../(name).json

const dropdownHeaders = document.querySelectorAll('.dropdown-header');
dropdownHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const parent = header.parentElement;
        parent.classList.toggle('active');
    })
})

const linkHome = document.querySelector('.name')
const linkAstro = document.getElementById('link-astro');
const linkBuilding = document.getElementById('link-building');
const linkStreet = document.getElementById('link-street');
const linkLandscape = document.getElementById('link-landscape');
const linkPanorama = document.getElementById('link-panorama');
const linkWildlife = document.getElementById('link-wildlife');
const linkContact = document.getElementById('link-contact');

const homeView = document.getElementById('home-view')
const astroView = document.getElementById('astro-view');
const buildingView = document.getElementById('building-view');
const streetView = document.getElementById('street-view');
const landscapeView = document.getElementById('landscape-view');
const panoramaView = document.getElementById('panorama-view');
const wildlifeView = document.getElementById('wildlife-view');
const contactView = document.getElementById('contact-view');

function hideAllViews() {
    homeView.classList.add('hide')
    astroView.classList.add('hide')
    buildingView.classList.add('hide')
    streetView.classList.add('hide')
    landscapeView.classList.add('hide');
    panoramaView.classList.add('hide')
    wildlifeView.classList.add('hide')
    contactView.classList.add('hide');
    document.querySelectorAll('.photography-grid').forEach(grid => {
    grid.scrollTop = 0;
    });
    submitSuccess.classList.add('hide');
}

const loadedGalleries = {
    astro: false,
    building: false,
    street: false,
    landscape: false,
    panorama: false,
    wildlife: false
};

linkHome.addEventListener('click', (event) => {
    hideAllViews();
    homeView.classList.remove('hide');
    const activeDropdowns = document.querySelectorAll('.dropdown.active');
    activeDropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
    });
});

linkAstro.addEventListener('click', (event) => {
    event.preventDefault();
    hideAllViews();
    astroView.classList.remove('hide');
    loadAstroGallery();
});

linkBuilding.addEventListener('click', (event) => {
    event.preventDefault();
    hideAllViews();
    buildingView.classList.remove('hide');
    loadBuildingGallery();
});

linkStreet.addEventListener('click', (event) => {
    event.preventDefault();
    hideAllViews();
    streetView.classList.remove('hide');
    loadStreetGallery();
});

linkLandscape.addEventListener('click', (event) => {
    event.preventDefault();
    hideAllViews();
    landscapeView.classList.remove('hide');
    loadLandscapeGallery();
});

linkPanorama.addEventListener('click', (event) => {
    event.preventDefault();
    hideAllViews();
    panoramaView.classList.remove('hide');
    loadPanoramaGallery();
});

linkWildlife.addEventListener('click', (event) => {
    event.preventDefault();
    hideAllViews();
    wildlifeView.classList.remove('hide');
    loadWildlifeGallery();
});

linkContact.addEventListener('click', (event) => {
    event.preventDefault();
    hideAllViews();
    contactView.classList.remove('hide');
    const activeDropdowns = document.querySelectorAll('.dropdown.active');
    activeDropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
    });
});

function loadAstroGallery() {
    if (loadedGalleries.astro) return;
    const astroGrid = document.getElementById('astro-grid');
    
    fetch('Json/astro.json')
        .then(response => response.json())
        .then(photoList => {
            let gridHTML = "";
            photoList.forEach(photo => {
                gridHTML += `<img src="Images/Astro & Aviation/${photo.Name}" alt="Astrography" loading="lazy">`;
            });
            astroGrid.innerHTML = gridHTML;
            loadedGalleries.astro = true;
        })
        .catch(error => console.error("Oei Astro", error));
}

function loadBuildingGallery() {
    if (loadedGalleries.building) return;
    const buildingGrid = document.getElementById('building-grid');
    
    fetch('Json/building.json')
        .then(response => response.json())
        .then(photoList => {
            let gridHTML = "";
            photoList.forEach(photo => {
                gridHTML += `<img src="Images/Buildings/${photo.Name}" alt="Building Photography" loading="lazy">`;
            });
            buildingGrid.innerHTML = gridHTML;
            loadedGalleries.building = true;
        })
        .catch(error => console.error("Oei Buildings", error));
}

function loadStreetGallery() {
    if (loadedGalleries.street) return;
    const streetGrid = document.getElementById('street-grid');
    
    fetch('Json/street.json')
        .then(response => response.json())
        .then(photoList => {
            let gridHTML = "";
            photoList.forEach(photo => {
                gridHTML += `<img src="Images/Streets/${photo.Name}" alt="Street Photography" loading="lazy">`;
            });
            streetGrid.innerHTML = gridHTML;
            loadedGalleries.street = true;
        })
        .catch(error => console.error("Oei Streets", error));
}

function loadLandscapeGallery() {
    if (loadedGalleries.landscape) return;
    const landscapeGrid = document.getElementById('landscape-grid');
    
    fetch('Json/landscape.json')
        .then(response => response.json())
        .then(photoList => {
            let gridHTML = "";
            photoList.forEach(photo => {
                gridHTML += `<img src="Images/Landscapes/${photo.Name}" alt="Landscape Photography" loading="lazy">`;
            });
            landscapeGrid.innerHTML = gridHTML;
            loadedGalleries.landscape = true;
        })
        .catch(error => console.error("Oei Landscapes", error));
}

function loadPanoramaGallery() {
    if (loadedGalleries.panorama) return;
    const panoramaGrid = document.getElementById('panorama-grid');
    
    fetch('Json/panorama.json')
        .then(response => response.json())
        .then(photoList => {
            let gridHTML = "";
            photoList.forEach(photo => {
                gridHTML += `<img src="Images/Panoramas/${photo.Name}" alt="Panoramas" loading="lazy">`;
            });
            panoramaGrid.innerHTML = gridHTML;
            loadedGalleries.panorama = true;
        })
        .catch(error => console.error("Oei Panoramas", error));
}

function loadWildlifeGallery() {
    if (loadedGalleries.wildlife) return;
    const wildlifeGrid = document.getElementById('wildlife-grid');
    
    fetch('Json/wildlife.json')
        .then(response => response.json())
        .then(photoList => {
            let gridHTML = "";
            photoList.forEach(photo => {
                gridHTML += `<img src="Images/Wildlife/${photo.Name}" alt="Wildlife Photography" loading="lazy">`;
            });
            wildlifeGrid.innerHTML = gridHTML;
            loadedGalleries.wildlife = true;
        })
        .catch(error => console.error("Oei Wildlife", error));
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const btnPrev = document.getElementById('lightbox-prev');
const btnNext = document.getElementById('lightbox-next');

let currentImageIndex = 0;
let activeImagesList = [];

document.querySelector('.preview').addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG' && event.target.closest('.photography-grid')) {
        const clickedImg = event.target;
        const currentGrid = clickedImg.closest('.photography-grid');
        
        activeImagesList = Array.from(currentGrid.querySelectorAll('img'));
        currentImageIndex = activeImagesList.indexOf(clickedImg);
        
        updateLightboxImage();
        lightbox.classList.remove('hide');
    }
});

function updateLightboxImage() {
    const currentPhoto = activeImagesList[currentImageIndex];
    lightboxImg.src = currentPhoto.src;
    lightboxImg.alt = currentPhoto.alt;

    btnPrev.style.visibility = (currentImageIndex === 0) ? 'hidden' : 'visible';
    btnNext.style.visibility = (currentImageIndex === activeImagesList.length - 1) ? 'hidden' : 'visible';
}

btnPrev.addEventListener('click', () => {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateLightboxImage();
    }
});

btnNext.addEventListener('click', () => {
    if (currentImageIndex < activeImagesList.length - 1) {
        currentImageIndex++;
        updateLightboxImage();
    }
});

lightboxClose.addEventListener('click', () => {
    lightbox.classList.add('hide');
    lightboxImg.src = ""; 
});

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.classList.add('hide');
        lightboxImg.src = "";
    }
});

window.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('hide')) return;
    
    if (e.key === 'ArrowLeft' && currentImageIndex > 0) {
        currentImageIndex--;
        updateLightboxImage();
    } else if (e.key === 'ArrowRight' && currentImageIndex < activeImagesList.length - 1) {
        currentImageIndex++;
        updateLightboxImage();
    } else if (e.key === 'Escape') {
        lightbox.classList.add('hide');
    }
});

const contactForm = document.getElementById('contact-form');
const submitSuccess = document.getElementById('submit-success');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                submitSuccess.classList.remove('hide');
                submitSuccess.style.animation = 'none';
                submitSuccess.offsetHeight; 
                submitSuccess.style.animation = '';
                contactForm.reset();
            } else {
                alert("Something went wrong. Please try again!");
            }
        })
    .catch(error => {
            console.error("Submission error:", error);
            alert("Network error. Please check your connection.");
        });
    });
}
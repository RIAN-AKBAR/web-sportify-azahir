// Sample album data (you can replace with your actual data)
const albums = [
    {
        name: "Sholawat Nabawi",
        image: "foto1.png",
        spotifyLink: "https://open.spotify.com/album/your-album-id1"
    },
    {
        name: "Dzikir Pagi Petang",
        image: "foto2.png",
        spotifyLink: "https://open.spotify.com/album/your-album-id2"
    },
    {
        name: "Qasidah Modern",
        image: "foto3.png",
        spotifyLink: "https://open.spotify.com/album/your-album-id3"
    },
    {
        name: "Maulid Nabi",
        image: "foto4.png",
        spotifyLink: "https://open.spotify.com/album/your-album-id4"
    },
    {
        name: "Sholawat Jibril",
        image: "foto5.png",
        spotifyLink: "https://open.spotify.com/album/your-album-id5"
    },
    {
        name: "Doa Harian",
        image: "foto6.png",
        spotifyLink: "https://open.spotify.com/album/your-album-id6"
    }
];

// Initialize the gallery
function initGallery() {
    const gallery = document.querySelector('.gallery-container');
    if (gallery) {
        gallery.innerHTML = '';
        albums.forEach(album => {
            const albumItem = document.createElement('div');
            albumItem.className = 'album-item';
            albumItem.innerHTML = `
                <a href="${album.spotifyLink}" target="_blank" class="album-link">
                    <img src="${album.image}" class="aa" alt="${album.name}">
                    <div class="album-overlay">
                        <h3>${album.name}</h3>
                        <span class="play-button"><i class="fas fa-play"></i></span>
                    </div>
                </a>
            `;
            gallery.appendChild(albumItem);
        });
    }
}

// Handle album form submission
function setupAlbumForm() {
    const form = document.getElementById('albumForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const albumName = this.elements[0].value;
            const albumImage = this.elements[1].value;
            const spotifyLink = this.elements[2].value;
            
            if (albumImage && albumName && spotifyLink) {
                albums.push({
                    name: albumName,
                    image: albumImage,
                    spotifyLink: spotifyLink
                });
                
                initGallery(); // Refresh the gallery
                this.reset();
                alert(`Album "${albumName}" berhasil ditambahkan!`);
            }
        });
    }
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initGallery();
    setupAlbumForm();
    setupSmoothScrolling();
    
    // Add current year to footer
    const yearElement = document.querySelector('.footer-content p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = yearElement.textContent.replace('2025', currentYear);
    }
});

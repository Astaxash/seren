document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Switcher Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
    });

    // --- Image Modal (Pop-up) Logic ---
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-btn');

    document.querySelectorAll('.gallery-img').forEach(img => {
        img.onclick = function() {
            modal.classList.add('active');
            modalImg.src = this.src;
        }
    });

    // Function to close the modal
    function closeModal() {
        modal.classList.remove('active');
    }

    // Close the modal when the 'x' is clicked
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }

    // Close the modal when clicking outside the image
    if (modal) {
        modal.onclick = function(event) {
            if (event.target === modal) {
                closeModal();
            }
        }
    }
});
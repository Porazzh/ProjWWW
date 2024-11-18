document.addEventListener("DOMContentLoaded", function() {

    const lightboxLinks = document.querySelectorAll('.lightbox');
  
    lightboxLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); 
        const imageSrc = link.getAttribute('href'); 
        const modal = document.createElement('div');
        modal.classList.add('lightbox-modal');
        
      
        const modalImage = document.createElement('img');
        modalImage.setAttribute('src', imageSrc);
        modal.appendChild(modalImage);
  
      
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Zamknij';
        closeButton.classList.add('close-btn');
        modal.appendChild(closeButton);
  
    
        document.body.appendChild(modal);
  
      
        closeButton.addEventListener('click', function() {
          document.body.removeChild(modal);
        });
  
        modal.addEventListener('click', function(event) {
          if (event.target === modal) {
            document.body.removeChild(modal);
          }
        });
      });
    });
  });
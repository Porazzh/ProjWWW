document.addEventListener("DOMContentLoaded", function() {

    const lightboxImages = document.querySelectorAll('[data-lightbox="customs"]');
  
    lightboxImages.forEach(image => {
      image.addEventListener("click", function(e) {
        e.preventDefault();
        
        const imageSrc = this.getAttribute("href");
        const imageTitle = this.getAttribute("data-title");
  
        const modal = document.createElement("div");
        modal.classList.add("lightbox-modal");
        
        const img = document.createElement("img");
        img.src = imageSrc;
        img.alt = imageTitle;
  
        const closeBtn = document.createElement("button");
        closeBtn.classList.add("close-btn");
        closeBtn.textContent = "×";
  
        closeBtn.addEventListener("click", function() {
          modal.remove();
        });
  
        modal.appendChild(img);
        modal.appendChild(closeBtn);
        document.body.appendChild(modal);
      });
    });
  });
  
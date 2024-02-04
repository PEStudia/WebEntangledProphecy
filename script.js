const gallery = document.getElementById('gallery');
const images = gallery.getElementsByTagName('img');

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('mouseover', function() {
    this.style.width = '45vw';
  });

  images[i].addEventListener('mouseout', function() {
    this.style.width = '20vw'; 
  });
}

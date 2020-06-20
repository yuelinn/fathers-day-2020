// window.alert('hi ')

const photos = document.querySelectorAll('.photos li');

const random = (start, end) => {
  return start + Math.random() * (end-start);
}

photos.forEach((photo) => {
  photo.style.setProperty('--rot', `${random(-10, 10)}deg`);
  photo.style.setProperty('--posx', `${random(-50, 50)}px`);
  photo.style.setProperty('--posy', `${random(-50, 50)}px`);
  photo.style.setProperty('--zindex', `${random(1, 5)}px`);
})

const slideshows = document.querySelectorAll('.slideshow');

if(window.location.search === "?slideshow"){
  slideshows.forEach((ss, si) => {
    let currentIndex = 0;
    const slides = ss.querySelectorAll('li');
    slides[0].classList.add('show');
    setInterval(() => {
      slides.forEach((s, i) => {
        s.classList.remove('show');
        if(currentIndex % i === 0){
          s.classList.add('show');
        }
        currentIndex++;
      })
    }, 5 * (1000+(300*(Math.random()+0.001) * slideshows.length)))
  })
} else {
  slideshows.forEach((ss, si) => {
    ss.querySelectorAll('li')[0].classList.add('show');
  });
}
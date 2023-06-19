const stars = document.querySelectorAll('.star');
let rating = 0;

function handleStarClick(event) {
  const clickedStar = event.target;
  const value = parseInt(clickedStar.getAttribute('data-value'));

  if (rating === value) {
    rating = value - 1;
  } else {
    rating = value;
  }

  stars.forEach(function(star, index) {
    star.classList.toggle('active', index < rating);
  });
}

stars.forEach(function(star) {
  star.addEventListener('click', handleStarClick);
});

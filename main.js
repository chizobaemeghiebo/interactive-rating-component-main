// get values from HTML

const submitBtn = document.querySelector('#submit')
const main = document.querySelector('#main')
const thankYouPage = document.querySelector('.thank-you')
const ratings = document.querySelectorAll('.ratingOptions')
submitBtn.addEventListener('click', showThankYouPage)

function showThankYouPage() {
  main.style.opacity = '0'
  thankYouPage.style.opacity = '1'
}

// loop over each rating option
for (const ratingOptions of ratings) {
  ratingOptions.addEventListener('click', showClickedRating)

  function showClickedRating() {
    document.querySelector('.clickedValue').innerHTML = ratingOptions.innerHTML
  }
}

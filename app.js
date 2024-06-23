const ratingBtns = document.querySelectorAll('.rating-btn');
const submitBtn = document.getElementById('submit-btn');
const thankYouCard = document.getElementById('thank-you-card'); 
const ratingCard = document.getElementById('rating-card'); 
const userRating = document.getElementById('user-rating');
let userRatingValue;


ratingBtns.forEach(btn => {
    btn.addEventListener('click', handleBtnClick)
})

function handleBtnClick(e) {
    e.target.classList.toggle('active');
    userRatingValue = e.target.id;
    ratingBtns.forEach(btn => {
        if (btn.id !== e.target.id) {
            btn.classList.remove('active');
        }
    }
    )
}

submitBtn.addEventListener('click', handleSubmit);

function handleSubmit() {
    if (!userRatingValue) {
        return;
    }

    hide(ratingCard);
    show(thankYouCard);
    displayUserRating();
}

function hide(element) {
   element.classList.add('hidden');
}

function show(element) {
   element.classList.remove('hidden');
}

function displayUserRating() {
    userRating.innerHTML = userRatingValue;
}